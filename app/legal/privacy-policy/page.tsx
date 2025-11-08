'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { IconArrowLeft, IconShieldCheck } from '@tabler/icons-react'

export default function PrivacyPolicyPage() {
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
              <IconShieldCheck className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Legal</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 gradient-text">
              Privacy Policy
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
                <h2 className="text-3xl font-display font-bold text-white mb-4">1. Introduction</h2>
                <p className="text-gray-400 leading-relaxed">
                  Welcome to Dezeq ("we," "our," or "us"). We are committed to protecting your personal information
                  and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard
                  your information when you visit our website or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-white mb-4">2. Information We Collect</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Company information and job title</li>
                  <li>Project requirements and specifications</li>
                  <li>Payment and billing information</li>
                  <li>Communications with us</li>
                  <li>Technical information (IP address, browser type, device information)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-white mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to comments, questions, and requests</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>Detect, prevent, and address fraud and security issues</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-white mb-4">4. Information Sharing</h2>
                <p className="text-gray-400 leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. We may share your
                  information with trusted third-party service providers who assist us in operating our website,
                  conducting our business, or servicing you, provided those parties agree to keep this information
                  confidential.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-white mb-4">5. Data Security</h2>
                <p className="text-gray-400 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal
                  information. However, no method of transmission over the internet or electronic storage is 100%
                  secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-white mb-4">6. Your Rights</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to or restrict processing of your information</li>
                  <li>Data portability</li>
                  <li>Withdraw consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-white mb-4">7. Cookies and Tracking</h2>
                <p className="text-gray-400 leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and hold certain
                  information. You can instruct your browser to refuse all cookies or to indicate when a cookie is
                  being sent. For more information, see our Cookie Policy.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-white mb-4">8. Changes to This Policy</h2>
                <p className="text-gray-400 leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting
                  the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-white mb-4">9. Contact Us</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  If you have questions about this Privacy Policy, please contact us:
                </p>
                <div className="bg-dark-lighter/50 p-6 rounded-2xl">
                  <p className="text-gray-300">
                    <strong>Email:</strong> info@dezeq.com<br />
                    <strong>Address:</strong> Dezeq Software Agency<br />
                    <strong>Response Time:</strong> Within 48 hours
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
            <Link href="/legal/terms-of-service" className="glass-effect p-6 rounded-2xl hover:border-primary/30 transition-all group">
              <h3 className="font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
                Terms of Service
              </h3>
              <p className="text-sm text-gray-400">Read our terms and conditions</p>
            </Link>
            <Link href="/legal/cookie-policy" className="glass-effect p-6 rounded-2xl hover:border-primary/30 transition-all group">
              <h3 className="font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
                Cookie Policy
              </h3>
              <p className="text-sm text-gray-400">How we use cookies</p>
            </Link>
            <Link href="/legal/gdpr" className="glass-effect p-6 rounded-2xl hover:border-primary/30 transition-all group">
              <h3 className="font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
                GDPR Compliance
              </h3>
              <p className="text-sm text-gray-400">Our GDPR commitments</p>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
