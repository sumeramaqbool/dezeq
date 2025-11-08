'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { IconArrowLeft, IconFileText } from '@tabler/icons-react'

export default function TermsOfServicePage() {
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
              <IconFileText className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Legal</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 gradient-text">
              Terms of Service
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
                <h2 className="text-3xl font-display font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-400 leading-relaxed">
                  By accessing and using Dezeq's services, you accept and agree to be bound by the terms and provisions
                  of this agreement. If you do not agree to abide by these Terms of Service, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-white mb-4">2. Services Description</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Dezeq provides software development services including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                  <li>SaaS product development</li>
                  <li>AI and machine learning solutions</li>
                  <li>Healthcare software development</li>
                  <li>FinTech application development</li>
                  <li>Custom enterprise software</li>
                  <li>Consulting and technical advisory services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-white mb-4">3. User Responsibilities</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  When using our services, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Use our services in compliance with all applicable laws</li>
                  <li>Not engage in any activity that interferes with our services</li>
                  <li>Respect intellectual property rights</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-white mb-4">4. Payment Terms</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Payment terms are outlined in individual project agreements:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                  <li>Payment schedules are defined per project scope</li>
                  <li>Invoices are due within 30 days unless otherwise stated</li>
                  <li>Late payments may incur additional fees</li>
                  <li>Refund policies are project-specific</li>
                  <li>All fees are exclusive of applicable taxes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-white mb-4">5. Intellectual Property Rights</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Intellectual property ownership is defined in individual agreements:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                  <li>Custom-developed code ownership transfers upon full payment</li>
                  <li>Dezeq retains rights to proprietary frameworks and tools</li>
                  <li>Third-party software licenses remain with respective owners</li>
                  <li>Client provides license for their brand materials</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-white mb-4">6. Confidentiality</h2>
                <p className="text-gray-400 leading-relaxed">
                  Both parties agree to maintain confidentiality of proprietary information shared during the course
                  of the project. This includes but is not limited to business processes, technical data, customer
                  information, and trade secrets.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-white mb-4">7. Warranties and Disclaimers</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Services are provided "as is" with the following understandings:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                  <li>We guarantee professional quality workmanship</li>
                  <li>Software is tested but may contain bugs</li>
                  <li>Third-party integrations are subject to their terms</li>
                  <li>Performance depends on hosting and infrastructure</li>
                  <li>Maintenance and support terms are separate</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-white mb-4">8. Limitation of Liability</h2>
                <p className="text-gray-400 leading-relaxed">
                  To the maximum extent permitted by law, Dezeq shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred
                  directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-white mb-4">9. Termination</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Either party may terminate services under these conditions:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                  <li>Written notice 30 days in advance</li>
                  <li>Immediate termination for breach of terms</li>
                  <li>Payment for work completed up to termination date</li>
                  <li>Return of confidential materials</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-white mb-4">10. Governing Law</h2>
                <p className="text-gray-400 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction
                  in which Dezeq operates, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-white mb-4">11. Changes to Terms</h2>
                <p className="text-gray-400 leading-relaxed">
                  We reserve the right to modify these terms at any time. We will notify users of material changes
                  via email or through our website. Continued use of our services after such modifications constitutes
                  acceptance of the updated terms.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-white mb-4">12. Contact Information</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  For questions regarding these Terms of Service, please contact us:
                </p>
                <div className="bg-dark-lighter/50 p-6 rounded-2xl">
                  <p className="text-gray-300">
                    <strong>Email:</strong> info@dezeq.com<br />
                    <strong>Address:</strong> Dezeq Software Agency<br />
                    <strong>Phone:</strong> +92 - 3317430602
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
              <p className="text-sm text-gray-400">How we handle your data</p>
            </Link>
            <Link href="/legal/cookie-policy" className="glass-effect p-6 rounded-2xl hover:border-primary/30 transition-all group">
              <h3 className="font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
                Cookie Policy
              </h3>
              <p className="text-sm text-gray-400">Our cookie usage</p>
            </Link>
            <Link href="/legal/gdpr" className="glass-effect p-6 rounded-2xl hover:border-primary/30 transition-all group">
              <h3 className="font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
                GDPR Compliance
              </h3>
              <p className="text-sm text-gray-400">Data protection rights</p>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
