'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import {
  IconArrowLeft,
  IconRocket,
  IconBrain,
  IconHeartbeat,
  IconCurrencyDollar,
  IconExternalLink,
  IconCode
} from '@tabler/icons-react'

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', 'SaaS', 'AI/ML', 'Healthcare', 'FinTech']

  const projects = [
    {
      id: 1,
      title: 'ProjectFlow',
      subtitle: 'Enterprise Project Management SaaS',
      category: 'SaaS',
      description: 'Scalable project management platform serving 50,000+ users across 120 countries with real-time collaboration.',
      technologies: ['Next.js', 'PostgreSQL', 'AWS', 'Redis', 'WebSockets'],
      metrics: ['50K+ Users', '99.9% Uptime', '$5M ARR', '120 Countries'],
      gradient: 'from-blue-500 to-cyan-500',
      icon: IconRocket,
    },
    {
      id: 2,
      title: 'DataSync Analytics',
      subtitle: 'Real-Time Analytics Platform',
      category: 'SaaS',
      description: 'Enterprise analytics SaaS processing 100TB+ data daily with sub-second query times and beautiful dashboards.',
      technologies: ['React', 'Python', 'ClickHouse', 'Kafka', 'Kubernetes'],
      metrics: ['100TB+ Daily', '500ms Query', '1000+ Enterprises', 'Real-time'],
      gradient: 'from-primary to-secondary',
      icon: IconCode,
    },
    {
      id: 3,
      title: 'MedAI Diagnostics',
      subtitle: 'AI-Powered Medical Imaging',
      category: 'Healthcare',
      description: 'FDA-approved AI diagnostic system analyzing 10M+ medical images with 98% accuracy for early disease detection.',
      technologies: ['TensorFlow', 'Python', 'DICOM', 'FHIR', 'AWS'],
      metrics: ['98% Accuracy', '10M+ Images', 'FDA Approved', 'HIPAA Compliant'],
      gradient: 'from-green-500 to-teal-500',
      icon: IconHeartbeat,
    },
    {
      id: 4,
      title: 'TeleHealth Pro',
      subtitle: 'Telemedicine Platform',
      category: 'Healthcare',
      description: 'HIPAA-compliant telemedicine solution enabling 50,000+ monthly remote consultations with integrated EHR.',
      technologies: ['Next.js', 'WebRTC', 'Node.js', 'MongoDB', 'Twilio'],
      metrics: ['50K+ Consultations/mo', 'HIPAA Certified', '4.9/5 Rating', '24/7 Available'],
      gradient: 'from-teal-500 to-green-500',
      icon: IconHeartbeat,
    },
    {
      id: 5,
      title: 'SmartPredict AI',
      subtitle: 'Predictive Analytics Engine',
      category: 'AI/ML',
      description: 'Machine learning platform for demand forecasting, customer churn prediction, and business intelligence.',
      technologies: ['PyTorch', 'FastAPI', 'PostgreSQL', 'Airflow', 'Docker'],
      metrics: ['95% Accuracy', '1M+ Predictions/day', '500+ Clients', 'Auto-scaling'],
      gradient: 'from-purple-500 to-pink-500',
      icon: IconBrain,
    },
    {
      id: 6,
      title: 'VisionAI Pro',
      subtitle: 'Computer Vision Platform',
      category: 'AI/ML',
      description: 'Real-time object detection and image recognition system processing 1M+ images daily with 97% accuracy.',
      technologies: ['TensorFlow', 'OpenCV', 'Python', 'Redis', 'GCP'],
      metrics: ['97% Accuracy', '1M+ Images/day', '< 100ms Processing', 'Multi-model'],
      gradient: 'from-pink-500 to-purple-500',
      icon: IconBrain,
    },
    {
      id: 7,
      title: 'PayFlow Gateway',
      subtitle: 'Payment Processing Platform',
      category: 'FinTech',
      description: 'Enterprise payment gateway processing 1M+ transactions daily with multi-currency support and fraud detection.',
      technologies: ['Node.js', 'Stripe', 'PostgreSQL', 'Redis', 'AWS'],
      metrics: ['1M+ Trans/day', '99.99% Uptime', 'PCI-DSS Level 1', '150+ Currencies'],
      gradient: 'from-orange-500 to-yellow-500',
      icon: IconCurrencyDollar,
    },
    {
      id: 8,
      title: 'CryptoVault',
      subtitle: 'Multi-Chain Crypto Wallet',
      category: 'FinTech',
      description: 'Secure cryptocurrency wallet managing $500M+ in assets with multi-chain support and institutional security.',
      technologies: ['React Native', 'Ethereum', 'Polygon', 'Web3.js', 'AWS KMS'],
      metrics: ['$500M+ Managed', '100K+ Users', 'Multi-Chain', 'Hardware Security'],
      gradient: 'from-yellow-500 to-orange-500',
      icon: IconCurrencyDollar,
    },
    {
      id: 9,
      title: 'TradeMax Platform',
      subtitle: 'High-Frequency Trading System',
      category: 'FinTech',
      description: 'Lightning-fast trading platform with sub-millisecond execution serving 10,000+ active traders.',
      technologies: ['Go', 'WebSockets', 'TimescaleDB', 'Redis', 'Kubernetes'],
      metrics: ['< 1ms Latency', '10K+ Traders', '$2B+ Volume', 'Real-time Charts'],
      gradient: 'from-orange-400 to-red-500',
      icon: IconCurrencyDollar,
    },
  ]

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <div className="min-h-screen bg-dark">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary opacity-10 rounded-full blur-[150px]" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary opacity-10 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8 group">
            <IconArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <IconRocket className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Our Work</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 gradient-text">
              Projects Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Explore our award-winning projects across SaaS, AI/ML, Healthcare, and FinTech
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/50'
                    : 'glass-effect text-gray-400 hover:text-white hover:border-primary/30'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-32 relative">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => {
                const Icon = project.icon
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="glass-effect rounded-3xl overflow-hidden group cursor-pointer"
                  >
                    {/* Project Header */}
                    <div className={`h-48 bg-gradient-to-br ${project.gradient} p-8 flex items-center justify-center relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20" />
                      <Icon className="w-20 h-20 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                    </div>

                    {/* Project Content */}
                    <div className="p-8">
                      <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all">
                        {project.title}
                      </h3>
                      <p className={`text-sm font-semibold mb-4 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                        {project.subtitle}
                      </p>
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <p className="text-xs font-semibold text-gray-500 mb-3">TECH STACK</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs px-3 py-1 bg-dark-lighter rounded-full text-gray-300 border border-white/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {project.metrics.map((metric) => (
                          <div
                            key={metric}
                            className={`px-3 py-2 bg-gradient-to-r ${project.gradient} bg-opacity-10 border border-white/10 rounded-lg text-center`}
                          >
                            <p className="text-xs font-bold text-white">{metric}</p>
                          </div>
                        ))}
                      </div>

                      {/* View Project Link */}
                      <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-dark-lighter rounded-full text-white font-semibold hover:bg-gradient-to-r hover:from-primary hover:to-accent transition-all group/btn">
                        <span>View Project</span>
                        <IconExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-xl text-gray-400">No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative bg-dark-lighter/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-effect p-12 md:p-16 rounded-3xl text-center max-w-4xl mx-auto relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Ready to Build Your <span className="gradient-text">Next Project</span>?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Let's create something extraordinary together
              </p>

              <motion.a
                href="/#contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary via-secondary to-accent rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Your Project</span>
                <IconRocket className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
