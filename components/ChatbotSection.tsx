'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export default function ChatbotSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hi! I\'m Dezeq\'s AI assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const faqs = {
    'what services': 'We offer SaaS development, AI/ML solutions, Healthcare software, Education & School Management systems, FinTech applications, ERP/CRM systems, and modern web applications.',
    'how to start': 'Starting a project is easy! Simply fill out our contact form or schedule a consultation. We\'ll discuss your requirements and provide a detailed proposal within 48 hours.',
    'pricing': 'Our pricing is project-based and depends on scope, complexity, and timeline. We offer flexible payment plans and can work within various budget ranges. Contact us for a custom quote!',
    'timeline': 'Project timelines vary based on complexity. Simple projects take 4-8 weeks, medium projects 2-4 months, and complex enterprise solutions 6-12 months. We provide detailed timelines during consultation.',
    'technologies': 'We use cutting-edge technologies including React, Next.js, Node.js, Python, TensorFlow, AWS, Azure, Docker, Kubernetes, and more. We choose the best stack for your specific needs.',
    'support': 'Yes! We provide 24/7 support, maintenance, and updates for all our projects. We offer various support packages tailored to your needs.',
    'team': 'Our team consists of experienced developers, AI specialists, designers, and project managers led by Kashan Iqbal (AI Developer & Team Lead) and Farhan Ali (Senior AI & Full Stack Developer).',
    'location': 'We\'re a global team serving clients worldwide. We work remotely and have successfully delivered projects across 15+ countries.',
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const findBestResponse = (input: string): string => {
    const lowerInput = input.toLowerCase()

    for (const [key, value] of Object.entries(faqs)) {
      if (lowerInput.includes(key)) {
        return value
      }
    }

    return "That\'s a great question! For detailed information, please contact us directly via our contact form or email us at hello@dezeq.com. We\'ll get back to you within 24 hours!"
  }

  const handleSend = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: findBestResponse(inputValue),
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1000)
  }

  const quickQuestions = [
    'What services do you offer?',
    'How can I start a project?',
    'What are your pricing models?',
    'Do you provide support?',
  ]

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-[150px]" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 gradient-text">
            Ask Us Anything
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Got questions? Our AI-powered chatbot is here to help you 24/7.
            Get instant answers about our services, pricing, and more.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-effect rounded-3xl overflow-hidden">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold">Dezeq AI Assistant</h3>
                  <p className="text-gray-400 text-sm">Always online</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-[400px] overflow-y-auto p-6 space-y-4">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl p-4 ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-r from-primary to-secondary text-white'
                          : 'bg-dark-lighter text-gray-300'
                      }`}
                    >
                      {message.text}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-dark-lighter rounded-2xl p-4">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                      <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            <div className="p-4 border-t border-white/10">
              <div className="flex flex-wrap gap-2 mb-4">
                {quickQuestions.map((question) => (
                  <motion.button
                    key={question}
                    onClick={() => setInputValue(question)}
                    className="px-4 py-2 bg-dark-lighter rounded-full text-sm text-gray-400 hover:bg-primary/20 hover:text-white transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {question}
                  </motion.button>
                ))}
              </div>

              {/* Input */}
              <div className="flex gap-4">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your question..."
                  className="flex-1 bg-dark-lighter border border-white/10 rounded-full px-6 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-all"
                />
                <motion.button
                  onClick={handleSend}
                  className="px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
