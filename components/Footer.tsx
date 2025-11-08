'use client'

import { motion } from 'framer-motion'
import { IconBrandLinkedin, IconBrandTwitter, IconBrandGithub, IconBrandInstagram } from '@tabler/icons-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Company: [
      { name: 'About', href: '#about' },
      { name: 'Team', href: '#team' },
      { name: 'Careers', href: '#contact' },
      { name: 'Contact', href: '#contact' },
    ],
    Services: [
      { name: 'SaaS Development', href: '/services/saas' },
      { name: 'AI & ML', href: '/services/ai-ml' },
      { name: 'Healthcare', href: '/services/healthcare' },
      { name: 'FinTech', href: '/services/fintech' },
    ],
  }

  const socialLinks = [
    { name: 'LinkedIn', icon: IconBrandLinkedin, href: 'https://linkedin.com/company/dezeq' },
    { name: 'Twitter', icon: IconBrandTwitter, href: 'https://twitter.com/dezeq' },
    { name: 'GitHub', icon: IconBrandGithub, href: 'https://github.com/dezeq' },
    { name: 'Instagram', icon: IconBrandInstagram, href: 'https://instagram.com/dezeq' },
  ]

  return (
    <footer className="relative bg-dark-lighter border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-20 w-96 h-96 bg-primary rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-20 w-96 h-96 bg-secondary rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.h2
              className="text-3xl font-display font-bold gradient-text mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Dezeq
            </motion.h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building intelligent software for the future. Transform your vision
              into reality with cutting-edge AI and enterprise solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary/20 transition-all group"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-primary transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-effect rounded-3xl p-8 mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                Stay Updated
              </h3>
              <p className="text-gray-400">
                Subscribe to our newsletter for the latest insights, updates, and
                exclusive offers.
              </p>
            </div>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-dark-lighter border border-white/10 rounded-full px-6 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-all"
              />
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>
              © {currentYear} Dezeq. All rights reserved. Built with ❤️ using Next.js
              & Three.js
            </p>
            <div className="flex items-center gap-6">
              <a href="/legal/privacy-policy" className="hover:text-primary transition-colors">
                Privacy
              </a>
              <a href="/legal/terms-of-service" className="hover:text-primary transition-colors">
                Terms
              </a>
              <a href="/legal/cookie-policy" className="hover:text-primary transition-colors">
                Cookies
              </a>
              <a href="/legal/gdpr" className="hover:text-primary transition-colors">
                GDPR
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/50 z-40"
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </footer>
  )
}
