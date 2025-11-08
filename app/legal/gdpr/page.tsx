'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { IconArrowLeft, IconShieldCheck, IconCheck } from '@tabler/icons-react'

export default function GDPRPage() {
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
              GDPR Compliance
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
                <h2 className="text-3xl font-display font-bold text-white mb-4">1. Our GDPR Commitment</h2>
                <p className="text-gray-400 leading-relaxed">
                  Dezeq is committed to protecting and respecting your privacy in accordance with the General Data
                  Protection Regulation (GDPR). This page outlines how we comply with GDPR and what rights you have
                  under this regulation.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-white mb-4">2. Legal Basis for Processing</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  We process personal data under the following legal bases:
                </p>
                <div className="space-y-4">
                  {[
                    { title: 'Consent', desc: 'You have given clear consent for us to process your personal data for a specific purpose' },
                    { title: 'Contract', desc: 'Processing is necessary for a contract we have with you, or because you asked us to take specific steps before entering into a contract' },
                    { title: 'Legal Obligation', desc: 'Processing is necessary for us to comply with the law' },
                    { title: 'Legitimate Interests', desc: 'Processing is necessary for our legitimate interests or those of a third party, unless there is a good reason to protect your personal data which overrides those interests' }
                  ].map((basis) => (
                    <div key={basis.title} className="bg-dark-lighter/50 p-4 rounded-2xl flex gap-4">
                      <IconCheck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-white mb-1">{basis.title}</h4>
                        <p className="text-gray-400 text-sm">{basis.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-white mb-4">3. Your Rights Under GDPR</h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Under GDPR, you have the following rights regarding your personal data:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: 'Right to Access',
                      desc: 'You have the right to request copies of your personal data',
                      icon: '📋'
                    },
                    {
                      title: 'Right to Rectification',
                      desc: 'You have the right to request correction of inaccurate or incomplete data',
                      icon: '✏️'
                    },
                    {
                      title: 'Right to Erasure',
                      desc: 'You have the right to request deletion of your personal data',
                      icon: '🗑️'
                    },
                    {
                      title: 'Right to Restrict Processing',
                      desc: 'You have the right to request limitation of processing your data',
                      icon: '⏸️'
                    },
                    {
                      title: 'Right to Data Portability',
                      desc: 'You have the right to request transfer of your data to another organization',
                      icon: '📤'
                    },
                    {
                      title: 'Right to Object',
                      desc: 'You have the right to object to our processing of your personal data',
                      icon: '🚫'
                    }
                  ].map((right) => (
                    <div key={right.title} className="glass-effect p-6 rounded-2xl">
                      <div className="text-3xl mb-3">{right.icon}</div>
                      <h4 className="font-display font-bold text-white mb-2">{right.title}</h4>
                      <p className="text-gray-400 text-sm">{right.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-white mb-4">4. Data We Collect</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  We collect and process the following categories of personal data:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                  <li>Identity Data: Name, username, title</li>
                  <li>Contact Data: Email address, telephone numbers, addresses</li>
                  <li>Technical Data: IP address, browser type, device information</li>
                  <li>Usage Data: How you use our website and services</li>
                  <li>Marketing Data: Your preferences for receiving communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-white mb-4">5. How We Protect Your Data</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  We implement appropriate technical and organizational measures:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'End-to-end encryption',
                    'Secure data storage',
                    'Regular security audits',
                    'Access controls',
                    'Staff training',
                    'Incident response plan'
                  ].map((measure) => (
                    <div key={measure} className="flex items-center gap-3 bg-dark-lighter/50 p-4 rounded-xl">
                      <IconCheck className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-300">{measure}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-white mb-4">6. Data Retention</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  We retain personal data only for as long as necessary:
                </p>
                <div className="bg-dark-lighter/50 p-6 rounded-2xl">
                  <ul className="space-y-2 text-gray-400">
                    <li><strong className="text-white">Active Clients:</strong> Duration of contract + 7 years</li>
                    <li><strong className="text-white">Marketing Contacts:</strong> Until you unsubscribe + 30 days</li>
                    <li><strong className="text-white">Website Visitors:</strong> As per Cookie Policy</li>
                    <li><strong className="text-white">Applicants:</strong> 12 months after application</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-white mb-4">7. International Transfers</h2>
                <p className="text-gray-400 leading-relaxed">
                  When we transfer personal data outside the EEA, we ensure appropriate safeguards are in place,
                  including Standard Contractual Clauses approved by the European Commission and adequacy decisions.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-white mb-4">8. Data Protection Officer</h2>
                <div className="bg-dark-lighter/50 p-6 rounded-2xl">
                  <p className="text-gray-400 mb-4">
                    Our Data Protection Officer is responsible for overseeing our GDPR compliance:
                  </p>
                  <p className="text-gray-300">
                    <strong>Email:</strong> info@dezeq.com<br />
                    <strong>Response Time:</strong> Within 30 days<br />
                    <strong>Office Hours:</strong> Monday - Friday, 9 AM - 5 PM
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-white mb-4">9. How to Exercise Your Rights</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  To exercise any of your GDPR rights:
                </p>
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-2xl border border-primary/20">
                  <ol className="space-y-3 text-gray-300">
                    <li><strong className="text-white">1.</strong> Send an email to <strong className="text-primary">info@dezeq.com</strong></li>
                    <li><strong className="text-white">2.</strong> Include subject line: "GDPR Data Request"</li>
                    <li><strong className="text-white">3.</strong> Specify which right you wish to exercise</li>
                    <li><strong className="text-white">4.</strong> Provide identification for verification</li>
                    <li><strong className="text-white">5.</strong> We will respond within 30 days</li>
                  </ol>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-white mb-4">10. Complaints</h2>
                <p className="text-gray-400 leading-relaxed">
                  If you believe we have not handled your personal data properly, you have the right to lodge a
                  complaint with your local supervisory authority. In the UK, this is the Information Commissioner's
                  Office (ICO). However, we encourage you to contact us first so we can address your concerns.
                </p>
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
              <p className="text-sm text-gray-400">Complete privacy practices</p>
            </Link>
            <Link href="/legal/terms-of-service" className="glass-effect p-6 rounded-2xl hover:border-primary/30 transition-all group">
              <h3 className="font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
                Terms of Service
              </h3>
              <p className="text-sm text-gray-400">Service agreement</p>
            </Link>
            <Link href="/legal/cookie-policy" className="glass-effect p-6 rounded-2xl hover:border-primary/30 transition-all group">
              <h3 className="font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
                Cookie Policy
              </h3>
              <p className="text-sm text-gray-400">Cookie usage details</p>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
