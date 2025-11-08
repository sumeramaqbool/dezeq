'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function HeroScrollReactive() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const meshGroupRef = useRef<THREE.Group | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 5
    cameraRef.current = camera

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Create group for all meshes
    const meshGroup = new THREE.Group()
    meshGroupRef.current = meshGroup
    scene.add(meshGroup)

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 2000
    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.015,
      color: new THREE.Color('#40b0c4'),
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    meshGroup.add(particlesMesh)

    // Create main torus
    const torusGeometry = new THREE.TorusGeometry(1.5, 0.4, 16, 100)
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#1d4651'),
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    })
    const torus = new THREE.Mesh(torusGeometry, torusMaterial)
    meshGroup.add(torus)

    // Create sphere
    const sphereGeometry = new THREE.SphereGeometry(0.8, 32, 32)
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#40b0c4'),
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    })
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
    sphere.position.x = 2
    meshGroup.add(sphere)

    // Create icosahedron
    const icoGeometry = new THREE.IcosahedronGeometry(0.6, 0)
    const icoMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#40b0c4'),
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    })
    const icosahedron = new THREE.Mesh(icoGeometry, icoMaterial)
    icosahedron.position.x = -2
    meshGroup.add(icosahedron)

    // Mouse movement
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    // Animation loop
    const clock = new THREE.Clock()

    const animate = () => {
      const elapsedTime = clock.getElapsedTime()

      // Animate particles
      particlesMesh.rotation.y = elapsedTime * 0.03
      particlesMesh.rotation.x = mouseY * 0.2

      // Animate torus
      torus.rotation.x = elapsedTime * 0.1
      torus.rotation.y = elapsedTime * 0.15

      // Animate sphere
      sphere.rotation.x = elapsedTime * 0.2
      sphere.rotation.y = elapsedTime * 0.1
      sphere.position.y = Math.sin(elapsedTime * 0.5) * 0.3

      // Animate icosahedron
      icosahedron.rotation.x = elapsedTime * 0.15
      icosahedron.rotation.y = elapsedTime * 0.2
      icosahedron.position.y = Math.cos(elapsedTime * 0.7) * 0.3

      // Subtle mouse follow
      meshGroup.rotation.y += (mouseX * 0.1 - meshGroup.rotation.y) * 0.05
      meshGroup.rotation.x += (mouseY * 0.1 - meshGroup.rotation.x) * 0.05

      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    animate()

    // GSAP ScrollTrigger for section-based movement
    const setupScrollAnimation = () => {
      // Hero section - center
      gsap.to(meshGroup.position, {
        x: 0,
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })

      // About section - move left
      gsap.to(meshGroup.position, {
        x: -3,
        y: 1,
        scrollTrigger: {
          trigger: '#about',
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
      })

      // Expertise section - move right
      gsap.to(meshGroup.position, {
        x: 3,
        y: -0.5,
        scrollTrigger: {
          trigger: '#expertise',
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
      })

      // Team section - move left again
      gsap.to(meshGroup.position, {
        x: -2.5,
        y: 0.8,
        scrollTrigger: {
          trigger: '#team',
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
      })

      // Portfolio section - center right
      gsap.to(meshGroup.position, {
        x: 2,
        y: -1,
        scrollTrigger: {
          trigger: '#portfolio',
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
      })

      // Scale down as we scroll
      gsap.to(meshGroup.scale, {
        x: 0.6,
        y: 0.6,
        z: 0.6,
        scrollTrigger: {
          trigger: '#about',
          start: 'top center',
          end: 'bottom bottom',
          scrub: 1,
        },
      })

      // Fade out after portfolio
      gsap.to(meshGroup, {
        opacity: 0,
        scrollTrigger: {
          trigger: '#trusted-by',
          start: 'top center',
          end: 'center center',
          scrub: 1,
        },
      })
    }

    // Delay scroll setup to ensure DOM is ready
    setTimeout(setupScrollAnimation, 100)

    // Handle resize
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
      {/* Fixed 3D Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-10"
        style={{ background: 'transparent' }}
      />

      {/* Hero Content */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Building{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                Intelligent Software
              </span>
              <br />
              for the Future
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Next-generation software agency specializing in SaaS, AI, Healthcare,
              FinTech, and enterprise solutions that drive innovation.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
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

          <motion.div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="text-primary"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto"
              >
                <path
                  d="M12 5V19M12 19L5 12M12 19L19 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
