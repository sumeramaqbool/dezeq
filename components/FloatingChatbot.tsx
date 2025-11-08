'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconX, IconSend, IconMessageCircle } from '@tabler/icons-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
}

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: 'Hi! How can I help you today?', sender: 'bot' },
  ])
  const [input, setInput] = useState('')

  const faqs: Record<string, string> = {
    'services': 'We offer SaaS, AI/ML, Healthcare, FinTech, ERP/CRM, and Education software development.',
    'start': 'Contact us via the form or email hello@dezeq.com to start your project.',
    'pricing': 'Pricing is project-based. Contact us for a custom quote tailored to your needs.',
    'timeline': 'Projects range from 4-8 weeks (simple) to 6-12 months (enterprise).',
    'support': 'Yes! We provide 24/7 support and maintenance for all projects.',
  }

  const handleSend = () => {
    if (!input.trim()) return

    const userMsg: Message = { id: Date.now().toString(), text: input, sender: 'user' }
    setMessages(prev => [...prev, userMsg])

    setTimeout(() => {
      const lowerInput = input.toLowerCase()
      let response = "Thanks for your question! Email us at hello@dezeq.com for detailed information."

      for (const [key, value] of Object.entries(faqs)) {
        if (lowerInput.includes(key)) {
          response = value
          break
        }
      }

      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), text: response, sender: 'bot' }])
    }, 500)

    setInput('')
  }

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-2xl hover:shadow-primary/50 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <IconMessageCircle className="w-8 h-8 text-white" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-50 w-96 h-[500px] glass-effect rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-primary/30"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-4 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                  <IconMessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold">Dezeq Assistant</h3>
                  <p className="text-xs text-gray-400">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <IconX className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map(msg => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl p-3 ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-primary to-accent text-white'
                        : 'bg-dark-lighter text-gray-300'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type a message..."
                  className="flex-1 bg-dark-lighter border border-white/10 rounded-full px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-all text-sm"
                />
                <button
                  onClick={handleSend}
                  className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <IconSend className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
