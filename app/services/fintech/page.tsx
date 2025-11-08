'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import {
  IconCurrencyDollar,
  IconChartCandle,
  IconWallet,
  IconLock,
  IconTrendingUp,
  IconCreditCard,
  IconShieldCheck,
  IconArrowLeft,
  IconCheck,
  IconRocket,
  IconCoins
} from '@tabler/icons-react'

export default function FinTechPage() {
  const features = [
    {
      icon: IconCreditCard,
      title: 'Payment Processing & Gateways',
      description: 'Secure payment processing with Stripe, PayPal integration, PCI-DSS compliance, and fraud detection.'
    },
    {
      icon: IconWallet,
      title: 'Digital Wallets & Banking',
      description: 'Mobile banking apps, digital wallets, P2P transfers, and multi-currency support.'
    },
    {
      icon: IconChartCandle,
      title: 'Trading Platforms',
      description: 'Real-time stock trading, crypto exchanges, algorithmic trading, and portfolio management.'
    },
    {
      icon: IconCoins,
      title: 'Blockchain & Crypto',
      description: 'Cryptocurrency wallets, DeFi platforms, NFT marketplaces, and smart contract integration.'
    },
    {
      icon: IconTrendingUp,
      title: 'Financial Analytics & AI',
      description: 'Predictive analytics, risk assessment, credit scoring, and fraud detection using machine learning.'
    },
    {
      icon: IconShieldCheck,
      title: 'Compliance & Security',
      description: 'PCI-DSS, SOC 2, GDPR compliance with KYC/AML verification and end-to-end encryption.'
    },
  ]

  const techStack = [
    { category: 'Payment', technologies: ['Stripe', 'PayPal', 'Plaid', 'Dwolla', 'Square'] },
    { category: 'Blockchain', technologies: ['Ethereum', 'Polygon', 'Solana', 'Web3.js', 'Hardhat'] },
    { category: 'Backend', technologies: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'Redis'] },
    { category: 'Security', technologies: ['OAuth 2.0', 'JWT', '2FA', 'AES-256', 'HSM'] },
  ]

  const useCases = [
    {
      title: 'PayFlow - Payment Gateway',
      description: 'Enterprise payment processing platform handling 1M+ transactions daily with 99.99% uptime.',
      metrics: ['1M+ Transactions/day', '99.99% Uptime', 'PCI-DSS Level 1']
    },
    {
      title: 'CryptoVault - Digital Wallet',
      description: 'Multi-currency crypto wallet managing $500M+ in assets with institutional-grade security.',
      metrics: ['$500M+ Managed', '100K+ Users', 'Multi-Chain']
    },
    {
      title: 'TradeMax - Trading Platform',
      description: 'High-frequency trading platform with sub-millisecond execution and 10K+ active traders.',
      metrics: ['<1ms Latency', '10K+ Traders', '$2B+ Volume']
    },
  ]

  return (
    <div className="min-h-screen bg-dark">
      <Navigation />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500 opacity-10 rounded-full blur-[150px]" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500 opacity-10 rounded-full blur-[150px]" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
              <IconCurrencyDollar className="w-5 h-5 text-orange-400" />
              <span className="text-orange-400 font-semibold">FinTech Solutions</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight">
              Build Secure{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400">
                FinTech Products
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed">
              From payment gateways to crypto exchanges, we build secure, compliant, and scalable
              financial technology solutions that handle billions in transactions safely.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="/#contact"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start FinTech Project
              </motion.a>
              <motion.a
                href="#case-studies"
                className="px-8 py-4 glass-effect rounded-full text-white font-semibold text-lg hover:bg-white/10 transition-all border border-orange-500/30"
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
              FinTech Solutions We Build
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Enterprise-grade financial software with bank-level security
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
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500 opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity" />

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center mb-6">
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
              FinTech Technology Stack
            </h2>
            <p className="text-xl text-gray-400">
              Proven technologies for secure, compliant financial systems
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
                <h3 className="text-xl font-display font-bold mb-6 text-orange-400">{stack.category}</h3>
                <ul className="space-y-3">
                  {stack.technologies.map((tech) => (
                    <li key={tech} className="flex items-center gap-3 text-gray-300">
                      <IconCheck className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-effect p-12 md:p-16 rounded-3xl max-w-4xl mx-auto text-center"
          >
            <IconLock className="w-16 h-16 text-orange-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              <span className="gradient-text">Bank-Level Security & Compliance</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              All our FinTech solutions are built with security-first architecture, ensuring compliance with
              PCI-DSS, SOC 2, GDPR, and other financial regulations. We implement multi-layer security,
              fraud detection, and real-time monitoring.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-dark-lighter/50 p-6 rounded-2xl">
                <h3 className="font-display font-bold text-orange-400 mb-2">PCI-DSS</h3>
                <p className="text-sm text-gray-400">Level 1 certified payment card security</p>
              </div>
              <div className="bg-dark-lighter/50 p-6 rounded-2xl">
                <h3 className="font-display font-bold text-orange-400 mb-2">SOC 2</h3>
                <p className="text-sm text-gray-400">Type II compliance for data security</p>
              </div>
              <div className="bg-dark-lighter/50 p-6 rounded-2xl">
                <h3 className="font-display font-bold text-orange-400 mb-2">KYC/AML</h3>
                <p className="text-sm text-gray-400">Identity verification and anti-money laundering</p>
              </div>
              <div className="bg-dark-lighter/50 p-6 rounded-2xl">
                <h3 className="font-display font-bold text-orange-400 mb-2">Real-time Fraud</h3>
                <p className="text-sm text-gray-400">AI-powered fraud detection and prevention</p>
              </div>
            </div>
          </motion.div>
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
              FinTech Success Stories
            </h2>
            <p className="text-xl text-gray-400">
              Financial platforms processing billions in transactions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-effect p-10 rounded-3xl cursor-pointer group"
              >
                <h3 className="text-2xl font-display font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-yellow-400 transition-all">
                  {useCase.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{useCase.description}</p>

                <div className="flex flex-wrap gap-3">
                  {useCase.metrics.map((metric) => (
                    <div key={metric} className="px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-semibold">
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
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-yellow-500/5 to-orange-500/5" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Ready to Build Your <span className="gradient-text">FinTech Solution</span>?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Let's create secure, compliant financial software that scales
              </p>

              <motion.a
                href="/#contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Building</span>
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
