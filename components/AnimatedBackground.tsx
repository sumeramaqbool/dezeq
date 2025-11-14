'use client'

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[5]">
      {/* Static gradient orbs - no animation, much lighter blur */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-10 blur-[60px]"
        style={{
          background: 'radial-gradient(circle, #40b0c4 0%, transparent 70%)',
          top: '10%',
          left: '5%',
        }}
      />

      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-8 blur-[50px]"
        style={{
          background: 'radial-gradient(circle, #1d4651 0%, transparent 70%)',
          top: '40%',
          right: '10%',
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
    </div>
  )
}
