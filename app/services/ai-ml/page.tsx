'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import {
  IconBrain,
  IconRobot,
  IconChartDots3,
  IconLanguage,
  IconEye,
  IconDatabase,
  IconCloud,
  IconArrowLeft,
  IconCheck,
  IconRocket
} from '@tabler/icons-react'

export default function AIMLPage() {
  const features = [
    {
      icon: IconBrain,
      title: 'Custom ML Models',
      description: 'Tailored machine learning models trained on your data for maximum accuracy and performance.'
    },
    {
      icon: IconLanguage,
      title: 'Natural Language Processing',
      description: 'Advanced NLP for chatbots, sentiment analysis, document processing, and language translation.'
    },
    {
      icon: IconEye,
      title: 'Computer Vision',
      description: 'Image recognition, object detection, facial recognition, and video analytics solutions.'
    },
    {
      icon: IconChartDots3,
      title: 'Predictive Analytics',
      description: 'Forecast trends, customer behavior, and business outcomes with advanced ML algorithms.'
    },
    {
      icon: IconRobot,
      title: 'AI Automation',
      description: 'Intelligent process automation to reduce manual work and increase efficiency.'
    },
    {
      icon: IconDatabase,
      title: 'Big Data Processing',
      description: 'Handle massive datasets with distributed computing and real-time processing.'
    },
  ]

  const techStack = [
    { category: 'Frameworks', technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'Hugging Face'] },
    { category: 'Languages', technologies: ['Python', 'R', 'Julia', 'C++', 'CUDA'] },
    { category: 'MLOps', technologies: ['MLflow', 'Kubeflow', 'Airflow', 'DVC', 'Weights & Biases'] },
    { category: 'Cloud AI', technologies: ['AWS SageMaker', 'Google AI Platform', 'Azure ML', 'Databricks'] },
  ]

  const useCases = [
    {
      title: 'Healthcare Diagnostics AI',
      description: 'AI-powered diagnostic system achieving 95% accuracy in detecting medical conditions from imaging data.',
      metrics: ['95% Accuracy', '10M+ Scans', 'FDA Approved']
    },
    {
      title: 'FinTech Fraud Detection',
      description: 'Real-time ML system detecting fraudulent transactions with 99.7% accuracy, saving $50M annually.',
      metrics: ['99.7% Accuracy', '$50M Saved', '< 100ms Response']
    },
  ]

  return (
    <div className="min-h-screen bg-dark">
      <Navigation />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 opacity-10 rounded-full blur-[150px]" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 opacity-10 rounded-full blur-[150px]" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
              <IconBrain className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-semibold">AI & Machine Learning</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight">
              Intelligent{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
                AI Solutions
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed">
              Transform your business with cutting-edge AI and machine learning. From predictive analytics
              to computer vision, we build intelligent systems that learn, adapt, and deliver results.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="/#contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start AI Project
              </motion.a>
              <motion.a
                href="#use-cases"
                className="px-8 py-4 glass-effect rounded-full text-white font-semibold text-lg hover:bg-white/10 transition-all border border-purple-500/30"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Use Cases
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
              AI & ML Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive AI solutions powered by state-of-the-art technology
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
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity" />

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
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
              AI Technology Stack
            </h2>
            <p className="text-xl text-gray-400">
              Industry-leading AI/ML frameworks and tools
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
                <h3 className="text-xl font-display font-bold mb-6 text-purple-400">{stack.category}</h3>
                <ul className="space-y-3">
                  {stack.technologies.map((tech) => (
                    <li key={tech} className="flex items-center gap-3 text-gray-300">
                      <IconCheck className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text">
              Real-World AI Applications
            </h2>
            <p className="text-xl text-gray-400">
              AI solutions delivering measurable business impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
                <h3 className="text-2xl font-display font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                  {useCase.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{useCase.description}</p>

                <div className="flex flex-wrap gap-4">
                  {useCase.metrics.map((metric) => (
                    <div key={metric} className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-semibold">
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
      <section className="py-32 relative bg-dark-lighter/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-effect p-12 md:p-16 rounded-3xl text-center max-w-4xl mx-auto relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-purple-500/5" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Ready to Harness <span className="gradient-text">AI Power</span>?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Let's build intelligent systems that transform your business
              </p>

              <motion.a
                href="/#contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start AI Journey</span>
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
