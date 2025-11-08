'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import Image from 'next/image'
import { IconBrandLinkedin, IconBrandGithub, IconMail, IconSparkles, IconCode, IconRocket } from '@tabler/icons-react'

export default function TeamProfessional() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const teamMembers = [
    {
      name: 'Kashan Iqbal',
      role: 'AI Developer & Team Lead',
      avatarUrl: '/team/kashan.png',
      gradient: 'from-green-600 via-teal-500 to-cyan-500',
      skills: ['AI Architecture', 'Team Leadership', 'Deep Learning', 'MLOps'],
      bio: 'Leading innovation through AI and empowering teams to exceed expectations.',
      linkedin: '#',
      github: '#',
      email: 'kashan@dezeq.com',
      icon: IconRocket,
    },
    {
      name: 'David',
      role: 'Sales Executive',
      avatarUrl: '/team/david.png',
      gradient: 'from-blue-600 via-blue-500 to-cyan-500',
      skills: ['Business Development', 'Client Relations', 'Strategic Planning', 'Enterprise Sales'],
      bio: 'Expert in building lasting partnerships and driving enterprise growth.',
      linkedin: '#',
      email: 'david@dezeq.com',
      icon: IconSparkles,
    },
    {
      name: 'Farhan Ali',
      role: 'Senior AI & Full Stack Developer',
      avatarUrl: '/team/farhan.png',
      gradient: 'from-purple-600 via-purple-500 to-pink-500',
      skills: ['Machine Learning', 'React/Next.js', 'Python/TensorFlow', 'Cloud Architecture'],
      bio: 'Architecting intelligent systems that push the boundaries of technology.',
      linkedin: '#',
      github: '#',
      email: 'farhan@dezeq.com',
      icon: IconCode,
    },
  ]

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-lighter to-dark opacity-50" />

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 rounded-full bg-primary opacity-10 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary opacity-10 blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
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
              Our Leadership
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 gradient-text">
            Meet The Visionaries
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            A world-class team of innovators, developers, and strategists dedicated to
            building the future of intelligent software.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mt-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => {
            const Icon = member.icon
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Tilt
                  tiltMaxAngleX={8}
                  tiltMaxAngleY={8}
                  glareEnable={true}
                  glareMaxOpacity={0.2}
                  glareColor="#00D9FF"
                  glarePosition="all"
                  glareBorderRadius="24px"
                  className="h-full"
                >
                  <div className="glass-effect rounded-3xl p-8 relative overflow-hidden transition-all duration-500 hover:scale-105 cursor-pointer group h-full">
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                    {/* Animated particles */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-primary rounded-full"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                          animate={{
                            y: [-10, -30, -10],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>

                    {/* Icon badge */}
                    <div className="absolute top-6 right-6">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${member.gradient} p-0.5`}>
                        <div className="w-full h-full rounded-full bg-dark-card flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                    </div>

                    {/* Professional API Avatar */}
                    <div className="relative mb-6">
                      <div className={`w-40 h-40 mx-auto rounded-3xl bg-gradient-to-br ${member.gradient} p-1 group-hover:scale-110 transition-all duration-500 shadow-2xl`}>
                        <div className="w-full h-full rounded-3xl overflow-hidden bg-dark-lighter relative">
                          <Image
                            src={member.avatarUrl}
                            alt={member.name}
                            width={160}
                            height={160}
                            className="w-full h-full object-cover"
                            unoptimized
                          />
                        </div>
                      </div>

                      {/* Glowing ring effect */}
                      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-500`} />

                      {/* Status indicator */}
                      <div className="absolute bottom-2 right-2">
                        <div className="w-6 h-6 rounded-full bg-green-500 border-4 border-dark-card flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        </div>
                      </div>
                    </div>

                    {/* Member Info */}
                    <div className="text-center relative z-10 space-y-4">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-display font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                          {member.name}
                        </h3>
                        <p className={`text-transparent bg-clip-text bg-gradient-to-r ${member.gradient} font-semibold mb-3`}>
                          {member.role}
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {member.bio}
                        </p>
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 justify-center">
                        {member.skills.map((skill, idx) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 }}
                            className="text-xs bg-dark-lighter/70 px-3 py-1.5 rounded-full text-gray-300 group-hover:bg-gradient-to-r group-hover:from-primary/20 group-hover:to-secondary/20 group-hover:text-white transition-all duration-300 border border-transparent group-hover:border-primary/30"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>

                      {/* Social Links */}
                      <div className="flex gap-3 justify-center pt-4">
                        {member.linkedin && (
                          <motion.a
                            href={member.linkedin}
                            className={`w-10 h-10 rounded-full bg-gradient-to-br ${member.gradient} p-0.5 hover:scale-110 transition-transform`}
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <div className="w-full h-full rounded-full bg-dark-card flex items-center justify-center">
                              <IconBrandLinkedin className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                            </div>
                          </motion.a>
                        )}
                        {member.github && (
                          <motion.a
                            href={member.github}
                            className={`w-10 h-10 rounded-full bg-gradient-to-br ${member.gradient} p-0.5 hover:scale-110 transition-transform`}
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <div className="w-full h-full rounded-full bg-dark-card flex items-center justify-center">
                              <IconBrandGithub className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                            </div>
                          </motion.a>
                        )}
                        <motion.a
                          href={`mailto:${member.email}`}
                          className={`w-10 h-10 rounded-full bg-gradient-to-br ${member.gradient} p-0.5 hover:scale-110 transition-transform`}
                          whileHover={{ y: -3 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <div className="w-full h-full rounded-full bg-dark-card flex items-center justify-center">
                            <IconMail className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                          </div>
                        </motion.a>
                      </div>
                    </div>

                    {/* External glow effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-br ${member.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`} />
                  </div>
                </Tilt>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
