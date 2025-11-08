'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function TrustedBy() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const companies = [
    'Google', 'Microsoft', 'IBM', 'AWS', 'Meta', 'Revolut',
    'Stripe', 'Shopify', 'Oracle', 'SAP', 'Adobe', 'Salesforce'
  ]

  return (
    <section
      id="trusted-by"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-lighter to-dark opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 gradient-text">
            Trusted By Industry Leaders
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            We've partnered with some of the world's most innovative companies to
            deliver exceptional software solutions.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Rotating Logo Carousel */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark to-transparent z-10" />

          <div className="overflow-hidden py-12">
            <motion.div
              className="flex gap-16"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {[...companies, ...companies].map((company, index) => (
                <motion.div
                  key={`${company}-${index}`}
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="glass-effect px-12 py-8 rounded-2xl min-w-[200px] flex items-center justify-center group hover:bg-white/10 transition-all duration-300">
                    <span className="text-2xl font-bold text-gray-500 group-hover:text-white transition-colors duration-300">
                      {company}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { value: '$50M+', label: 'Revenue Generated' },
            { value: '10M+', label: 'Active Users' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="glass-effect p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary opacity-10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <svg
                className="w-12 h-12 text-primary mb-6"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h8V14H6c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h8V14h-6c0-2.2 1.8-4 4-4V8z" />
              </svg>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                "Dezeq transformed our entire digital infrastructure. Their AI-powered
                solutions increased our operational efficiency by 300% and delivered
                ROI within the first quarter. Truly exceptional work."
              </p>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-2xl">
                  👨‍💼
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Michael Chen</div>
                  <div className="text-gray-400">CTO, TechCorp International</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
