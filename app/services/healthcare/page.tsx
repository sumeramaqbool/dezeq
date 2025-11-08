'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import {
  IconHeartbeat,
  IconStethoscope,
  IconFileAnalytics,
  IconVideo,
  IconShieldLock,
  IconClipboardData,
  IconDeviceMobile,
  IconCloud,
  IconArrowLeft,
  IconCheck,
  IconRocket
} from '@tabler/icons-react'

export default function HealthcarePage() {
  const features = [
    {
      icon: IconClipboardData,
      title: 'Electronic Health Records (EHR/EMR)',
      description: 'Comprehensive EHR systems with patient management, clinical workflows, and seamless interoperability.'
    },
    {
      icon: IconVideo,
      title: 'Telemedicine Platforms',
      description: 'HIPAA-compliant video consultations, appointment scheduling, and remote patient monitoring.'
    },
    {
      icon: IconFileAnalytics,
      title: 'Medical Imaging & AI Diagnostics',
      description: 'AI-powered analysis of X-rays, MRIs, and CT scans with 95%+ accuracy for early detection.'
    },
    {
      icon: IconDeviceMobile,
      title: 'Patient Portal Systems',
      description: 'Self-service portals for appointments, test results, prescriptions, and billing.'
    },
    {
      icon: IconStethoscope,
      title: 'Clinical Decision Support',
      description: 'AI-driven recommendations, drug interaction alerts, and evidence-based treatment protocols.'
    },
    {
      icon: IconShieldLock,
      title: 'HIPAA Compliance & Security',
      description: 'End-to-end encryption, audit logs, role-based access, and full HIPAA/GDPR compliance.'
    },
  ]

  const techStack = [
    { category: 'Standards', technologies: ['HL7 FHIR', 'DICOM', 'ICD-10', 'SNOMED CT', 'LOINC'] },
    { category: 'Backend', technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'] },
    { category: 'AI/ML', technologies: ['TensorFlow', 'PyTorch', 'OpenCV', 'scikit-learn', 'Keras'] },
    { category: 'Cloud', technologies: ['AWS HIPAA', 'Google Cloud Healthcare API', 'Azure Health', 'GCP'] },
  ]

  const useCases = [
    {
      title: 'MedFlow - Hospital Management System',
      description: 'Complete hospital management platform serving 100,000+ patients with integrated EHR, billing, and analytics.',
      metrics: ['100K+ Patients', '50+ Hospitals', '99.99% Uptime']
    },
    {
      title: 'TeleHealth Pro - Telemedicine Platform',
      description: 'HIPAA-compliant telemedicine solution facilitating 50,000+ remote consultations monthly.',
      metrics: ['50K+ Consultations/mo', 'HIPAA Certified', '4.9/5 Rating']
    },
    {
      title: 'DiagnosticAI - Medical Imaging Analysis',
      description: 'AI system analyzing 10M+ medical images with 98% accuracy, FDA-approved for clinical use.',
      metrics: ['98% Accuracy', '10M+ Images', 'FDA Approved']
    },
  ]

  return (
    <div className="min-h-screen bg-dark">
      <Navigation />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-green-500 opacity-10 rounded-full blur-[150px]" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500 opacity-10 rounded-full blur-[150px]" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
              <IconHeartbeat className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-semibold">Healthcare Software</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight">
              Transform{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-green-400">
                Healthcare Delivery
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed">
              Build secure, HIPAA-compliant healthcare software that improves patient outcomes,
              streamlines operations, and empowers medical professionals with cutting-edge technology.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="/#contact"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Healthcare Project
              </motion.a>
              <motion.a
                href="#case-studies"
                className="px-8 py-4 glass-effect rounded-full text-white font-semibold text-lg hover:bg-white/10 transition-all border border-green-500/30"
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
              Healthcare Software Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive digital health platforms for hospitals, clinics, and healthcare providers
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
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-500 opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity" />

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center mb-6">
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
              Healthcare Technology Stack
            </h2>
            <p className="text-xl text-gray-400">
              Industry-standard technologies for secure, compliant healthcare software
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
                <h3 className="text-xl font-display font-bold mb-6 text-green-400">{stack.category}</h3>
                <ul className="space-y-3">
                  {stack.technologies.map((tech) => (
                    <li key={tech} className="flex items-center gap-3 text-gray-300">
                      <IconCheck className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-effect p-12 md:p-16 rounded-3xl max-w-4xl mx-auto text-center"
          >
            <IconShieldLock className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              <span className="gradient-text">HIPAA & GDPR Compliant</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              All our healthcare solutions are built with security-first architecture, ensuring full compliance
              with HIPAA, GDPR, and other regulatory requirements. We implement end-to-end encryption,
              comprehensive audit logs, and role-based access controls.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-dark-lighter/50 p-6 rounded-2xl">
                <h3 className="font-display font-bold text-green-400 mb-2">End-to-End Encryption</h3>
                <p className="text-sm text-gray-400">AES-256 encryption for data at rest and in transit</p>
              </div>
              <div className="bg-dark-lighter/50 p-6 rounded-2xl">
                <h3 className="font-display font-bold text-green-400 mb-2">Audit Trails</h3>
                <p className="text-sm text-gray-400">Complete logging of all system access and changes</p>
              </div>
              <div className="bg-dark-lighter/50 p-6 rounded-2xl">
                <h3 className="font-display font-bold text-green-400 mb-2">Access Control</h3>
                <p className="text-sm text-gray-400">Role-based permissions and multi-factor authentication</p>
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
              Healthcare Success Stories
            </h2>
            <p className="text-xl text-gray-400">
              Transforming healthcare delivery with innovative digital solutions
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
                <h3 className="text-2xl font-display font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-teal-400 transition-all">
                  {useCase.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{useCase.description}</p>

                <div className="flex flex-wrap gap-3">
                  {useCase.metrics.map((metric) => (
                    <div key={metric} className="px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-semibold">
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
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-teal-500/5 to-green-500/5" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Ready to Revolutionize <span className="gradient-text">Healthcare</span>?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Let's build HIPAA-compliant healthcare software that saves lives and improves patient care
              </p>

              <motion.a
                href="/#contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-green-500 via-teal-500 to-green-500 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all"
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
