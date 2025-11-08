'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CountUp from 'react-countup'
import {
  IconRocket,
  IconBulb,
  IconTarget,
  IconUsers,
  IconTrophy,
  IconCertificate,
  IconBrandAws,
  IconBrandGoogle,
  IconChartBar,
  IconCode,
  IconDeviceDesktop,
  IconBrain
} from '@tabler/icons-react'
import Tilt from 'react-parallax-tilt'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  const stats = [
    { number: 200, suffix: '+', label: 'Projects Delivered', icon: IconRocket, color: 'from-blue-500 to-cyan-500' },
    { number: 50, suffix: '+', label: 'Enterprise Clients', icon: IconUsers, color: 'from-purple-500 to-pink-500' },
    { number: 15, suffix: '+', label: 'Countries Served', icon: IconTarget, color: 'from-green-500 to-teal-500' },
    { number: 98, suffix: '%', label: 'Client Satisfaction', icon: IconTrophy, color: 'from-orange-500 to-red-500' },
  ]

  const values = [
    {
      icon: IconBulb,
      title: 'Innovation First',
      description: 'Pushing boundaries with cutting-edge AI and technology solutions',
      gradient: 'from-primary to-secondary',
    },
    {
      icon: IconRocket,
      title: 'Lightning Fast',
      description: 'Delivering optimized, high-performance software at scale',
      gradient: 'from-secondary to-accent',
    },
    {
      icon: IconBrain,
      title: 'AI-Powered',
      description: 'Integrating intelligent automation in every solution we build',
      gradient: 'from-accent to-primary',
    },
    {
      icon: IconTarget,
      title: 'Result Driven',
      description: 'Focused on measurable impact and ROI for our clients',
      gradient: 'from-primary via-secondary to-accent',
    },
  ]

  const certifications = [
    { icon: IconBrandAws, name: 'AWS Certified', color: 'text-orange-400' },
    { icon: IconBrandGoogle, name: 'Google Cloud', color: 'text-blue-400' },
    { icon: IconCertificate, name: 'ISO 9001', color: 'text-green-400' },
    { icon: IconCode, name: 'Agile Certified', color: 'text-purple-400' },
  ]

  const journey = [
    { year: '2020', milestone: 'Founded Dezeq', description: 'Started with a vision to transform digital innovation' },
    { year: '2021', milestone: '50+ Projects', description: 'Delivered solutions across 5 countries' },
    { year: '2022', milestone: 'AI Integration', description: 'Pioneered AI-first development approach' },
    { year: '2023', milestone: 'Global Expansion', description: 'Serving clients in 15+ countries' },
    { year: '2024', milestone: 'Award Recognition', description: 'Industry-leading software solutions' },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-lighter to-dark opacity-50" />

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-primary opacity-10 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-96 h-96 rounded-full bg-secondary opacity-10 blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full text-primary text-sm font-semibold border border-primary/30">
              About Dezeq
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 gradient-text">
            Pioneering Digital Excellence
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            A next-generation software agency transforming industries through AI-powered solutions,
            enterprise innovation, and award-winning development excellence.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mt-8" />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                  <div className="glass-effect p-8 rounded-3xl text-center relative overflow-hidden group cursor-pointer">
                    {/* Background gradient on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                    {/* Icon */}
                    <div className="relative z-10 mb-4 flex justify-center">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} p-0.5`}>
                        <div className="w-full h-full rounded-2xl bg-dark-card flex items-center justify-center">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                    </div>

                    {/* Number */}
                    <div className="relative z-10">
                      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                        {isInView && (
                          <CountUp
                            end={stat.number}
                            duration={2.5}
                            suffix={stat.suffix}
                            enableScrollSpy
                            scrollSpyOnce
                          />
                        )}
                      </div>
                      <div className="text-gray-400 text-sm md:text-base font-medium">
                        {stat.label}
                      </div>
                    </div>

                    {/* Glow effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-br ${stat.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`} />
                  </div>
                </Tilt>
              </motion.div>
            )
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* Left - Company Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-effect p-10 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-5 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <IconRocket className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-display font-bold">
                    Our <span className="gradient-text">Mission</span>
                  </h3>
                </div>

                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  At Dezeq, we architect intelligent software solutions that transform businesses and
                  drive innovation. Our expertise spans <span className="text-primary font-semibold">AI & Machine Learning</span>,
                  <span className="text-secondary font-semibold"> SaaS Development</span>,
                  <span className="text-accent font-semibold"> FinTech</span>, and
                  <span className="text-primary font-semibold"> Healthcare Technology</span>.
                </p>

                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  We don\'t just build software — we create digital experiences that scale, perform,
                  and deliver measurable business impact. Every solution is crafted with precision,
                  powered by cutting-edge technology, and designed for the future.
                </p>

                <div className="flex flex-wrap gap-3">
                  {['AI-Powered', 'Cloud-Native', 'Enterprise Scale', 'Security First'].map((tag, i) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                      className="px-4 py-2 bg-dark-lighter/70 rounded-full text-sm text-primary font-medium border border-primary/20"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="glass-effect p-8 rounded-3xl"
            >
              <h4 className="text-xl font-display font-bold mb-6 flex items-center gap-3">
                <IconCertificate className="w-6 h-6 text-primary" />
                Certifications & Partnerships
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert, i) => {
                  const Icon = cert.icon
                  return (
                    <motion.div
                      key={cert.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-3 bg-dark-lighter/50 p-4 rounded-2xl group cursor-pointer hover:bg-dark-lighter transition-all"
                    >
                      <Icon className={`w-8 h-8 ${cert.color} group-hover:scale-110 transition-transform`} />
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                        {cert.name}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Values & Journey */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Core Values */}
            <div className="glass-effect p-10 rounded-3xl relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary opacity-5 rounded-full blur-3xl" />

              <div className="relative z-10">
                <h3 className="text-3xl font-display font-bold mb-8">
                  Core <span className="gradient-text">Values</span>
                </h3>

                <div className="space-y-4">
                  {values.map((value, i) => {
                    const Icon = value.icon
                    return (
                      <motion.div
                        key={value.title}
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                        whileHover={{ x: 10 }}
                      >
                        <div className="flex items-start gap-4 p-5 rounded-2xl bg-dark-lighter/30 hover:bg-dark-lighter/60 transition-all cursor-pointer group">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.gradient} p-0.5 flex-shrink-0 group-hover:scale-110 transition-transform`}>
                            <div className="w-full h-full rounded-xl bg-dark-card flex items-center justify-center">
                              <Icon className="w-6 h-6 text-primary" />
                            </div>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all">
                              {value.title}
                            </h4>
                            <p className="text-sm text-gray-400 leading-relaxed">
                              {value.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Journey Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-effect p-8 rounded-3xl relative overflow-hidden"
            >
              <h4 className="text-xl font-display font-bold mb-6 flex items-center gap-3">
                <IconChartBar className="w-6 h-6 text-primary" />
                Our Journey
              </h4>
              <div className="space-y-4">
                {journey.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
                    className="flex gap-4 group cursor-pointer"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform">
                        {item.year.slice(-2)}
                      </div>
                      {i !== journey.length - 1 && (
                        <div className="w-0.5 flex-1 bg-gradient-to-b from-primary/50 to-transparent mt-2" />
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <h5 className="text-white font-bold mb-1 group-hover:text-primary transition-colors">
                        {item.milestone}
                      </h5>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <div className="glass-effect p-12 rounded-3xl relative overflow-hidden max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Ready to Build Something <span className="gradient-text">Extraordinary</span>?
              </h3>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Let\'s transform your vision into an award-winning digital solution
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary via-secondary to-accent rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all relative overflow-hidden group"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Start Your Project</span>
                <IconRocket className="w-6 h-6 relative z-10 group-hover:rotate-45 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-accent via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
