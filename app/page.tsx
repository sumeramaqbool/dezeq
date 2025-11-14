'use client'

import { useEffect, useState } from 'react'
import Preloader from '@/components/Preloader'
import Navigation from '@/components/Navigation'
import HeroOptimized from '@/components/HeroOptimized'
import About from '@/components/About'
import Expertise from '@/components/Expertise'
import TeamProfessional from '@/components/TeamProfessional'
import Portfolio from '@/components/Portfolio'
import TrustedByProfessional from '@/components/TrustedByProfessional'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import CustomCursorOptimized from '@/components/CustomCursorOptimized'
import FloatingChatbot from '@/components/FloatingChatbot'
import AnimatedBackground from '@/components/AnimatedBackground'
export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Preloader isLoading={isLoading} />
      <AnimatedBackground />
      <CustomCursorOptimized />
      <FloatingChatbot />
      <Navigation />
      <main>
        <HeroOptimized />
        <About />
        <Expertise />
        <TeamProfessional />
        <Portfolio />
        <TrustedByProfessional />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
