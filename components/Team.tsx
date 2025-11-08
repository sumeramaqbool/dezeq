'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const teamMembers = [
    {
      name: 'David',
      role: 'Sales Executive',
      avatar: '👔',
      color: 'from-blue-500 to-cyan-500',
      skills: ['Business Development', 'Client Relations', 'Strategic Planning'],
    },
    {
      name: 'Farhan Ali',
      role: 'Senior AI & Full Stack Developer',
      avatar: '🧑‍💻',
      color: 'from-purple-500 to-pink-500',
      skills: ['Machine Learning', 'React/Next.js', 'Python/TensorFlow'],
    },
    {
      name: 'Kashan Iqbal',
      role: 'AI Developer & Team Lead',
      avatar: '👨‍💼',
      color: 'from-green-500 to-teal-500',
      skills: ['AI Architecture', 'Team Leadership', 'Deep Learning'],
    },
  ]

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-lighter to-dark opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 gradient-text">
            Meet Our Team
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A diverse team of innovators, developers, and strategists dedicated to
            building the future of intelligent software.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="glass-effect rounded-3xl p-8 relative overflow-hidden transition-all duration-500 hover:scale-105 cursor-pointer">
                {/* Floating particles background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-10 left-10 w-2 h-2 bg-primary rounded-full animate-float" />
                  <div className="absolute top-20 right-10 w-2 h-2 bg-secondary rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute bottom-10 left-1/2 w-2 h-2 bg-accent rounded-full animate-float" style={{ animationDelay: '1s' }} />
                  <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-primary rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
                </div>

                {/* Avatar Circle with gradient border */}
                <div className="relative mb-6">
                  <div className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-br ${member.color} p-1 group-hover:scale-110 transition-transform duration-500`}>
                    <div className="w-full h-full rounded-full bg-dark-card flex items-center justify-center text-6xl">
                      {member.avatar}
                    </div>
                  </div>

                  {/* Glowing ring effect */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />
                </div>

                {/* Member Info */}
                <div className="text-center relative z-10">
                  <h3 className="text-2xl font-display font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 mb-6">{member.role}</p>

                  {/* Skills */}
                  <div className="space-y-2">
                    {member.skills.map((skill, idx) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 }}
                        className="text-sm text-gray-400 bg-dark-lighter/50 px-4 py-2 rounded-full inline-block mx-1 group-hover:bg-gradient-to-r group-hover:from-primary/20 group-hover:to-secondary/20 group-hover:text-white transition-all duration-300"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Hover overlay gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
              </div>

              {/* External glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-br ${member.color} rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`} />
            </motion.div>
          ))}
        </div>

        {/* Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-gray-400 text-lg mb-6">
            Want to join our team of innovators?
          </p>
          <motion.a
            href="#contact"
            className="inline-block px-8 py-4 glass-effect rounded-full text-white font-semibold hover:bg-white/10 transition-all"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            We&apos;re Hiring
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
