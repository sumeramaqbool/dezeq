'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { IconArrowLeft, IconCookie } from '@tabler/icons-react'

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-dark">
      <Navigation />
      <section className="py-32 relative">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary opacity-5 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8 group">
            <IconArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <IconCookie className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Legal</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 gradient-text">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-400">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <div className="glass-effect p-8 md:p-12 rounded-3xl space-y-8">
              <section>
                <h2 className="text-3xl font-display font-bold text-white mb-4">1. What Are Cookies?</h2>
                <p className="text-gray-400 leading-relaxed">
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website.
                  They are widely used to make websites work more efficiently and provide useful information to website owners.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-white mb-4">2. How We Use Cookies</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  We use cookies for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                  <li>To enable certain functions of the website</li>
                  <li>To provide analytics and measure traffic</li>
                  <li>To store your preferences</li>
                  <li>To enable advertisements delivery</li>
                  <li>To improve user experience</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-white mb-4">3. Types of Cookies We Use</h2>

                <div className="space-y-6">
                  <div className="bg-dark-lighter/50 p-6 rounded-2xl">
                    <h3 className="text-xl font-display font-bold text-primary mb-3">Essential Cookies</h3>
                    <p className="text-gray-400 leading-relaxed mb-3">
                      These cookies are necessary for the website to function properly. They enable basic functions
                      like page navigation and access to secure areas.
                    </p>
                    <p className="text-sm text-gray-500">Examples: Session management, security, load balancing</p>
                  </div>

                  <div className="bg-dark-lighter/50 p-6 rounded-2xl">
                    <h3 className="text-xl font-display font-bold text-green-400 mb-3">Analytics Cookies</h3>
                    <p className="text-gray-400 leading-relaxed mb-3">
                      These cookies help us understand how visitors interact with our website by collecting and
                      reporting information anonymously.
                    </p>
                    <p className="text-sm text-gray-500">Examples: Google Analytics, page views, bounce rate, traffic sources</p>
                  </div>

                  <div className="bg-dark-lighter/50 p-6 rounded-2xl">
                    <h3 className="text-xl font-display font-bold text-orange-400 mb-3">Functional Cookies</h3>
                    <p className="text-gray-400 leading-relaxed mb-3">
                      These cookies enable enhanced functionality and personalization, such as videos and live chats.
                    </p>
                    <p className="text-sm text-gray-500">Examples: Language preferences, region settings, chat widget</p>
                  </div>

                  <div className="bg-dark-lighter/50 p-6 rounded-2xl">
                    <h3 className="text-xl font-display font-bold text-purple-400 mb-3">Marketing Cookies</h3>
                    <p className="text-gray-400 leading-relaxed mb-3">
                      These cookies track your activity across websites to deliver relevant advertisements.
                    </p>
                    <p className="text-sm text-gray-500">Examples: Retargeting ads, conversion tracking, social media pixels</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-white mb-4">4. Third-Party Cookies</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  We use the following third-party services that may set cookies:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                  <li><strong>Google Analytics:</strong> Website traffic analysis</li>
                  <li><strong>Google Ads:</strong> Advertising and remarketing</li>
                  <li><strong>LinkedIn Insight:</strong> Professional analytics</li>
                  <li><strong>Facebook Pixel:</strong> Social media marketing</li>
                  <li><strong>Intercom/Drift:</strong> Chat and customer support</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-white mb-4">5. Cookie Duration</h2>
                <div className="bg-dark-lighter/50 p-6 rounded-2xl">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-white mb-2">Session Cookies</h4>
                      <p className="text-gray-400 text-sm">Deleted when you close your browser</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Persistent Cookies</h4>
                      <p className="text-gray-400 text-sm">Remain for a set period (up to 2 years)</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-white mb-4">6. Managing Cookies</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  You can control and manage cookies in various ways:
                </p>

                <div className="space-y-4">
                  <div className="bg-dark-lighter/50 p-6 rounded-2xl">
                    <h4 className="font-bold text-white mb-2">Browser Settings</h4>
                    <p className="text-gray-400 text-sm mb-3">
                      Most browsers allow you to refuse or accept cookies through their settings.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm ml-4">
                      <li>Chrome: Settings → Privacy and Security → Cookies</li>
                      <li>Firefox: Options → Privacy & Security → Cookies</li>
                      <li>Safari: Preferences → Privacy → Cookies</li>
                      <li>Edge: Settings → Cookies and Site Permissions</li>
                    </ul>
                  </div>

                  <div className="bg-dark-lighter/50 p-6 rounded-2xl">
                    <h4 className="font-bold text-white mb-2">Opt-Out Tools</h4>
                    <p className="text-gray-400 text-sm">
                      Use opt-out tools provided by advertising networks and analytics providers.
                    </p>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed mt-4">
                  <strong>Note:</strong> Blocking certain cookies may impact your experience on our website and
                  limit the functionality available to you.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-white mb-4">7. Updates to This Policy</h2>
                <p className="text-gray-400 leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for
                  other operational, legal, or regulatory reasons. Please revisit this page regularly.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-white mb-4">8. Contact Us</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  If you have questions about our use of cookies, please contact us:
                </p>
                <div className="bg-dark-lighter/50 p-6 rounded-2xl">
                  <p className="text-gray-300">
                    <strong>Email:</strong> info@dezeq.com<br />
                    <strong>Subject:</strong> Cookie Policy Inquiry
                  </p>
                </div>
              </section>
            </div>
          </motion.div>

          {/* Related Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 grid md:grid-cols-3 gap-4"
          >
            <Link href="/legal/privacy-policy" className="glass-effect p-6 rounded-2xl hover:border-primary/30 transition-all group">
              <h3 className="font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
                Privacy Policy
              </h3>
              <p className="text-sm text-gray-400">Data protection practices</p>
            </Link>
            <Link href="/legal/terms-of-service" className="glass-effect p-6 rounded-2xl hover:border-primary/30 transition-all group">
              <h3 className="font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
                Terms of Service
              </h3>
              <p className="text-sm text-gray-400">Service terms and conditions</p>
            </Link>
            <Link href="/legal/gdpr" className="glass-effect p-6 rounded-2xl hover:border-primary/30 transition-all group">
              <h3 className="font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
                GDPR Compliance
              </h3>
              <p className="text-sm text-gray-400">Your data rights</p>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
