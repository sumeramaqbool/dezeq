'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const projects = [
    {
      title: 'AI Healthcare Platform',
      category: 'Healthcare · AI',
      description: 'HIPAA-compliant telemedicine platform with AI-powered diagnostics and patient management.',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      tags: ['React', 'TensorFlow', 'AWS'],
    },
    {
      title: 'FinTech Banking App',
      category: 'FinTech · Mobile',
      description: 'Secure digital banking solution with real-time transactions and blockchain integration.',
      gradient: 'from-purple-500 via-pink-500 to-red-500',
      tags: ['Flutter', 'Blockchain', 'Node.js'],
    },
    {
      title: 'Education LMS',
      category: 'Education · SaaS',
      description: 'Comprehensive learning management system with AI-driven personalized learning paths.',
      gradient: 'from-green-500 via-emerald-500 to-cyan-500',
      tags: ['Next.js', 'Python', 'PostgreSQL'],
    },
    {
      title: 'Enterprise ERP System',
      category: 'Enterprise · ERP',
      description: 'Full-scale ERP solution managing inventory, HR, finance, and supply chain operations.',
      gradient: 'from-orange-500 via-amber-500 to-yellow-500',
      tags: ['Vue.js', 'Django', 'Redis'],
    },
    {
      title: 'SaaS Analytics Dashboard',
      category: 'SaaS · Analytics',
      description: 'Real-time analytics platform with predictive insights and customizable reporting.',
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
      tags: ['React', 'D3.js', 'FastAPI'],
    },
    {
      title: 'Web3 DeFi Platform',
      category: 'Web3 · DeFi',
      description: 'Decentralized finance platform with smart contracts and liquidity pool management.',
      gradient: 'from-cyan-500 via-blue-500 to-purple-500',
      tags: ['Solidity', 'Web3.js', 'Ethereum'],
    },
  ]

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 right-10 w-96 h-96 bg-accent rounded-full blur-[150px]" />
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-primary rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 gradient-text">
            Our Portfolio
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Explore our showcase of cutting-edge projects that have transformed
            businesses across various industries.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="glass-effect rounded-3xl overflow-hidden h-full transition-all duration-500 hover:scale-105">
                {/* Project Image Placeholder with Gradient */}
                <div className={`relative h-64 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500" />

                  {/* 3D Effect Elements */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-32 h-32 border-4 border-white/30 rounded-2xl rotate-45"
                      animate={{
                        rotate: [45, 55, 45],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs text-white font-semibold">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <motion.div
                      className="px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-white font-semibold flex items-center gap-2"
                      whileHover={{ scale: 1.1 }}
                    >
                      View Project
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-display font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-dark-lighter/70 rounded-full text-xs text-gray-300 group-hover:bg-gradient-to-r group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
