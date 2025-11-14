'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function HeroOptimized() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const meshGroupRef = useRef<THREE.Group | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: false, // Disable for performance
      powerPreference: 'high-performance',
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)) // Limit pixel ratio

    const meshGroup = new THREE.Group()
    meshGroupRef.current = meshGroup
    scene.add(meshGroup)

    // REDUCED particles for performance - 500 instead of 2000
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 500
    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 8
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: new THREE.Color('#40b0c4'),
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    meshGroup.add(particlesMesh)

    // Main torus - simplified
    const torusGeometry = new THREE.TorusGeometry(1.5, 0.3, 8, 50) // Reduced segments
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#1d4651'),
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    })
    const torus = new THREE.Mesh(torusGeometry, torusMaterial)
    meshGroup.add(torus)

    // Sphere - simplified
    const sphereGeometry = new THREE.SphereGeometry(0.7, 16, 16) // Reduced segments
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#40b0c4'),
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    })
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
    sphere.position.x = 2
    meshGroup.add(sphere)

    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    // Highly optimized animation loop - 30fps max
    const clock = new THREE.Clock()
    let frameCount = 0
    let lastTime = 0
    const fps = 30
    const interval = 1000 / fps

    const animate = (currentTime: number) => {
      const elapsed = currentTime - lastTime

      if (elapsed > interval) {
        lastTime = currentTime - (elapsed % interval)
        frameCount++
        const elapsedTime = clock.getElapsedTime()

        // Update only every 3 frames for better performance
        if (frameCount % 3 === 0) {
          particlesMesh.rotation.y = elapsedTime * 0.02
          particlesMesh.rotation.x = mouseY * 0.15
        }

        torus.rotation.x = elapsedTime * 0.08
        torus.rotation.y = elapsedTime * 0.12

        sphere.rotation.x = elapsedTime * 0.15
        sphere.rotation.y = elapsedTime * 0.08
        sphere.position.y = Math.sin(elapsedTime * 0.4) * 0.2

        // Reduced mouse follow sensitivity
        meshGroup.rotation.y += (mouseX * 0.05 - meshGroup.rotation.y) * 0.03
        meshGroup.rotation.x += (mouseY * 0.05 - meshGroup.rotation.x) * 0.03

        renderer.render(scene, camera)
      }

      requestAnimationFrame(animate)
    }

    animate(0)

    // Smooth scroll animations with gentle movements
    const setupScrollAnimation = () => {
      // Create a single timeline for smooth transitions
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 2, // Higher value = smoother
        }
      })

      // Hero - center (starting position)
      tl.to(meshGroup.position, {
        x: 0,
        y: 0,
        duration: 1,
        ease: 'power1.inOut'
      })

      // About - gentle left movement
      .to(meshGroup.position, {
        x: -1.5, // Reduced from -3
        y: 0.3,
        duration: 2,
        ease: 'power1.inOut'
      }, '+=1')

      // Expertise - gentle right movement
      .to(meshGroup.position, {
        x: 1.5, // Reduced from 3
        y: -0.2,
        duration: 2,
        ease: 'power1.inOut'
      }, '+=1')

      // Team - gentle left
      .to(meshGroup.position, {
        x: -1.2, // Reduced from -2.5
        y: 0.2,
        duration: 2,
        ease: 'power1.inOut'
      }, '+=1')

      // Portfolio - gentle right
      .to(meshGroup.position, {
        x: 1.2,
        y: -0.3,
        duration: 2,
        ease: 'power1.inOut'
      }, '+=1')

      // Gradual scale down
      .to(meshGroup.scale, {
        x: 0.8,
        y: 0.8,
        z: 0.8,
        duration: 3,
        ease: 'power1.inOut'
      }, 2)

      // Fade out smoothly
      gsap.to(meshGroup, {
        opacity: 0,
        scrollTrigger: {
          trigger: '#trusted-by',
          start: 'top center',
          end: '+=500',
          scrub: 3,
        },
      })
    }

    setTimeout(setupScrollAnimation, 100)

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      renderer.dispose()
    }
  }, [])

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-dark">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-10"
        style={{ background: 'transparent' }}
      />

      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Building{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
                Intelligent Software
              </span>
              <br />
              for the Future
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Next-generation software agency specializing in SaaS, AI, Healthcare,
              FinTech, and enterprise solutions that drive innovation.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all inline-block"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                Let&apos;s Build Something Intelligent
              </motion.a>

              <motion.a
                href="#portfolio"
                className="px-8 py-4 glass-effect rounded-full text-white font-semibold text-lg hover:bg-white/10 transition-all inline-block border border-primary/30"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Work
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
