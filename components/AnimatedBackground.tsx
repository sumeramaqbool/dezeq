'use client'

import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[5]">
      {/* Gradient orbs that fill empty spaces */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, #40b0c4 0%, transparent 70%)',
          top: '10%',
          left: '5%',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-[100px]"
        style={{
          background: 'radial-gradient(circle, #1d4651 0%, transparent 70%)',
          top: '40%',
          right: '10%',
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full opacity-10 blur-[90px]"
        style={{
          background: 'radial-gradient(circle, #40b0c4 0%, transparent 70%)',
          bottom: '15%',
          left: '15%',
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute w-[550px] h-[550px] rounded-full opacity-12 blur-[110px]"
        style={{
          background: 'radial-gradient(circle, #1d4651 0%, transparent 70%)',
          bottom: '25%',
          right: '5%',
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute w-32 h-32 border border-primary/20 rounded-2xl"
        style={{
          top: '20%',
          right: '20%',
          transform: 'rotate(45deg)',
        }}
        animate={{
          y: [0, -20, 0],
          rotate: [45, 65, 45],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute w-24 h-24 border border-secondary/20 rounded-full"
        style={{
          bottom: '30%',
          left: '10%',
        }}
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute w-20 h-20 border border-primary/20"
        style={{
          top: '60%',
          right: '15%',
          transform: 'rotate(30deg)',
        }}
        animate={{
          y: [0, -15, 0],
          rotate: [30, 50, 30],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #40b0c4 1px, transparent 1px),
            linear-gradient(to bottom, #40b0c4 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Animated lines */}
      <motion.div
        className="absolute h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        style={{ top: '25%' }}
        animate={{
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute h-px w-full bg-gradient-to-r from-transparent via-secondary/20 to-transparent"
        style={{ top: '75%' }}
        animate={{
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
    </div>
  )
}
