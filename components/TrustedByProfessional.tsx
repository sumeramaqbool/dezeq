'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CountUp from 'react-countup'
import { GoogleLogo, MicrosoftLogo, AWSLogo, IBMLogo, MetaLogo, StripeLogo, ShopifyLogo, RevolutLogo, SalesforceLogo } from './icons/CompanyLogos'
import { IconTrophy, IconUsers, IconClock, IconHeadset } from '@tabler/icons-react'

export default function TrustedByProfessional() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const companies = [
    { name: 'Google', Logo: GoogleLogo },
    { name: 'Microsoft', Logo: MicrosoftLogo },
    { name: 'AWS', Logo: AWSLogo },
    { name: 'IBM', Logo: IBMLogo },
    { name: 'Meta', Logo: MetaLogo },
    { name: 'Stripe', Logo: StripeLogo },
    { name: 'Shopify', Logo: ShopifyLogo },
    { name: 'Revolut', Logo: RevolutLogo },
    { name: 'Salesforce', Logo: SalesforceLogo },
  ]

  const stats = [
    {
      value: 50,
      suffix: 'M+',
      label: 'Revenue Generated',
      icon: IconTrophy,
      color: 'from-yellow-500 to-orange-500',
    },
    {
      value: 10,
      suffix: 'M+',
      label: 'Active Users',
      icon: IconUsers,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      value: 99.9,
      suffix: '%',
      label: 'Uptime SLA',
      icon: IconClock,
      color: 'from-green-500 to-emerald-500',
    },
    {
      value: 24,
      suffix: '/7',
      label: 'Support Available',
      icon: IconHeadset,
      color: 'from-purple-500 to-pink-500',
    },
  ]

  return (
    <section
      id="trusted-by"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-lighter to-dark opacity-50" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:64px_64px]" />

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
              Trusted Globally
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 gradient-text">
            Powering Industry Leaders
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            We&apos;ve partnered with the world&apos;s most innovative companies to
            deliver exceptional software solutions.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mt-8" />
        </motion.div>

        {/* Logo Grid with Professional Layout */}
        <div className="mb-24">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {companies.map((company, index) => {
              const Logo = company.Logo
              return (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="group cursor-pointer"
                >
                  <div className="glass-effect p-8 rounded-2xl flex items-center justify-center h-32 relative overflow-hidden transition-all duration-300 hover:bg-white/10">
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Logo */}
                    <div className="w-full h-16 relative z-10 grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100">
                      <Logo />
                    </div>

                    {/* Border glow */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-primary/30 to-secondary/30" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Stats Section with CountUp */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="glass-effect p-8 rounded-3xl text-center relative overflow-hidden group cursor-pointer"
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                {/* Icon */}
                <div className="relative z-10 mb-4">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${stat.color} p-0.5`}>
                    <div className="w-full h-full rounded-2xl bg-dark-card flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Value with CountUp */}
                <div className="relative z-10">
                  <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {isInView && (
                      <CountUp
                        end={stat.value}
                        duration={2.5}
                        decimals={stat.value % 1 !== 0 ? 1 : 0}
                        suffix={stat.suffix}
                      />
                    )}
                  </div>
                  <div className="text-gray-400 text-sm md:text-base font-medium">
                    {stat.label}
                  </div>
                </div>

                {/* Border glow on hover */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${stat.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10`} />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Premium Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="glass-effect p-10 md:p-14 rounded-3xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
            {/* Gradient orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity" />

            <div className="relative z-10">
              {/* Quote icon */}
              <svg
                className="w-16 h-16 text-primary mb-6 opacity-50"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h8V14H6c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h8V14h-6c0-2.2 1.8-4 4-4V8z" />
              </svg>

              {/* Testimonial text */}
              <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed mb-10 font-light">
                &quot;Dezeq transformed our entire digital infrastructure. Their AI-powered
                solutions increased our operational efficiency by <span className="text-primary font-semibold">300%</span> and delivered
                ROI within the first quarter. Truly exceptional work.&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary p-0.5">
                  <div className="w-full h-full rounded-2xl bg-dark-card flex items-center justify-center text-3xl">
                    👨‍💼
                  </div>
                </div>
                <div>
                  <div className="text-white font-bold text-xl mb-1">Michael Chen</div>
                  <div className="text-gray-400 font-medium">CTO, TechCorp International</div>
                  <div className="flex gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Border accent */}
            <div className="absolute inset-0 rounded-3xl border border-white/5 pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
