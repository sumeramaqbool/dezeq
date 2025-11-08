'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import {
  IconRocket,
  IconCloud,
  IconUsers,
  IconShieldCheck,
  IconTrendingUp,
  IconDeviceDesktop,
  IconBrandStripe,
  IconDatabase,
  IconApi,
  IconChartBar,
  IconArrowLeft,
  IconCheck
} from '@tabler/icons-react'

export default function SaaSDevelopmentPage() {
  const features = [
    {
      icon: IconCloud,
      title: 'Cloud-Native Architecture',
      description: 'Scalable, resilient applications built on AWS, Google Cloud, or Azure with microservices architecture.'
    },
    {
      icon: IconUsers,
      title: 'Multi-Tenancy Support',
      description: 'Secure data isolation, custom branding, and flexible subscription models for each tenant.'
    },
    {
      icon: IconShieldCheck,
      title: 'Enterprise Security',
      description: 'SOC 2, GDPR, HIPAA compliance with encryption, SSO, 2FA, and role-based access control.'
    },
    {
      icon: IconTrendingUp,
      title: 'Auto-Scaling Infrastructure',
      description: 'Handle traffic spikes effortlessly with automatic scaling and load balancing.'
    },
    {
      icon: IconBrandStripe,
      title: 'Payment Integration',
      description: 'Stripe, PayPal, and custom billing systems with subscription management and invoicing.'
    },
    {
      icon: IconApi,
      title: 'RESTful & GraphQL APIs',
      description: 'Well-documented, versioned APIs for seamless third-party integrations.'
    },
  ]

  const techStack = [
    { category: 'Frontend', technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
    { category: 'Backend', technologies: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB', 'Redis'] },
    { category: 'Cloud', technologies: ['AWS', 'Google Cloud', 'Azure', 'Vercel', 'Docker', 'Kubernetes'] },
    { category: 'Tools', technologies: ['Stripe', 'SendGrid', 'Twilio', 'Auth0', 'Datadog', 'Sentry'] },
  ]

  const process = [
    { step: '01', title: 'Discovery & Strategy', description: 'Deep dive into your business model, target market, and competitive landscape.' },
    { step: '02', title: 'Design & Prototyping', description: 'Create intuitive UI/UX with interactive prototypes and user testing.' },
    { step: '03', title: 'Development & Testing', description: 'Agile development with continuous integration and automated testing.' },
    { step: '04', title: 'Launch & Scale', description: 'Deployment, monitoring, and ongoing optimization for growth.' },
  ]

  const caseStudies = [
    {
      title: 'ProjectFlow - Project Management SaaS',
      description: 'Built a scalable project management platform serving 50,000+ users across 120 countries.',
      metrics: ['99.9% Uptime', '2M+ Tasks Created', '$5M ARR']
    },
    {
      title: 'DataSync - Analytics Platform',
      description: 'Enterprise analytics SaaS processing 100TB+ data daily with real-time dashboards.',
      metrics: ['100TB+ Daily', '500ms Query Time', '1000+ Enterprises']
    },
  ]

  return (
    <div className="min-h-screen bg-dark">
      <Navigation />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary opacity-10 rounded-full blur-[150px]" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary opacity-10 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <Link href="/#expertise" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8 group">
            <IconArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <IconRocket className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">SaaS Development</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight">
              Build Scalable{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
                SaaS Products
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed">
              From MVP to enterprise-scale platforms, we architect and develop cloud-native SaaS applications
              that scale effortlessly, delight users, and drive recurring revenue.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.a>
              <motion.a
                href="#case-studies"
                className="px-8 py-4 glass-effect rounded-full text-white font-semibold text-lg hover:bg-white/10 transition-all border border-primary/30"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Case Studies
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 gradient-text">
              Enterprise-Grade SaaS Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Every feature you need to build, launch, and scale your SaaS product
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="glass-effect p-8 rounded-3xl relative overflow-hidden group cursor-pointer"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity" />

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-display font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-32 relative bg-dark-lighter/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text">
              Modern Technology Stack
            </h2>
            <p className="text-xl text-gray-400">
              Battle-tested technologies for reliable, scalable SaaS products
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((stack, index) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect p-8 rounded-3xl"
              >
                <h3 className="text-xl font-display font-bold mb-6 text-primary">{stack.category}</h3>
                <ul className="space-y-3">
                  {stack.technologies.map((tech) => (
                    <li key={tech} className="flex items-center gap-3 text-gray-300">
                      <IconCheck className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-400">
              A proven methodology for building successful SaaS products
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="glass-effect p-8 rounded-3xl relative overflow-hidden group hover:border-primary/30 transition-all">
                  <div className="text-6xl font-display font-black text-primary/20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>

                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-32 relative bg-dark-lighter/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text">
              Success Stories
            </h2>
            <p className="text-xl text-gray-400">
              SaaS products we've built and scaled
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-effect p-10 rounded-3xl cursor-pointer group"
              >
                <h3 className="text-2xl font-display font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all">
                  {study.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{study.description}</p>

                <div className="flex flex-wrap gap-4">
                  {study.metrics.map((metric) => (
                    <div key={metric} className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-semibold">
                      {metric}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
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
                Ready to Build Your <span className="gradient-text">SaaS Product</span>?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Let's discuss your vision and create a scalable, profitable SaaS platform
              </p>

              <motion.a
                href="/#contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary via-secondary to-accent rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Started Today</span>
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
