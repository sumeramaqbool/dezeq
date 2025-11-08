'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursorOptimized() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>()
  const posRef = useRef({ x: 0, y: 0 })
  const targetRef = useRef({ x: 0, y: 0 })
  const isHoveringRef = useRef(false)

  useEffect(() => {
    const cursor = cursorRef.current
    const cursorDot = cursorDotRef.current
    if (!cursor || !cursorDot) return

    // Update target position immediately
    const updatePosition = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY }
    }

    // Smooth animation with RAF
    const animate = () => {
      // Lerp for smooth following
      posRef.current.x += (targetRef.current.x - posRef.current.x) * 0.15
      posRef.current.y += (targetRef.current.y - posRef.current.y) * 0.15

      // Use transform for GPU acceleration
      cursor.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0)`
      cursorDot.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0)`

      rafRef.current = requestAnimationFrame(animate)
    }

    // Handle hover states
    const handleMouseEnter = () => {
      isHoveringRef.current = true
      cursor.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0) scale(1.8)`
      cursorDot.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0) scale(0.3)`
    }

    const handleMouseLeave = () => {
      isHoveringRef.current = false
      cursor.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0) scale(1)`
      cursorDot.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0) scale(1)`
    }

    // Add event listeners with passive for better performance
    window.addEventListener('mousemove', updatePosition, { passive: true })

    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    // Start animation loop
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)

      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Outer cursor ring */}
      <div
        ref={cursorRef}
        className="fixed w-10 h-10 pointer-events-none z-[9999] hidden md:block mix-blend-difference"
        style={{
          left: '-20px',
          top: '-20px',
          transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div className="w-full h-full rounded-full border-2 border-primary" />
      </div>

      {/* Inner cursor dot */}
      <div
        ref={cursorDotRef}
        className="fixed w-2 h-2 pointer-events-none z-[9999] hidden md:block"
        style={{
          left: '-4px',
          top: '-4px',
          transition: 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div className="w-full h-full rounded-full bg-primary" />
      </div>
    </>
  )
}
