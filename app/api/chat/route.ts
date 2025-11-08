import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { message } = await req.json()

    // Simple FAQ matcher (replace with OpenAI for production)
    const faqs: Record<string, string> = {
      'what services': 'We offer SaaS development, AI/ML solutions, Healthcare software, Education & School Management systems, FinTech applications, ERP/CRM systems, and modern web applications.',
      'how to start': 'Starting a project is easy! Simply fill out our contact form or schedule a consultation. We will discuss your requirements and provide a detailed proposal within 48 hours.',
      'pricing': 'Our pricing is project-based and depends on scope, complexity, and timeline. We offer flexible payment plans and can work within various budget ranges. Contact us for a custom quote!',
      'timeline': 'Project timelines vary based on complexity. Simple projects take 4-8 weeks, medium projects 2-4 months, and complex enterprise solutions 6-12 months.',
      'technologies': 'We use cutting-edge technologies including React, Next.js, Node.js, Python, TensorFlow, AWS, Azure, Docker, Kubernetes, and more.',
      'support': 'Yes! We provide 24/7 support, maintenance, and updates for all our projects.',
    }

    const lowerMessage = message.toLowerCase()
    let response = "That is a great question! For detailed information, please contact us directly via our contact form or email us at info@dezeq.com."

    for (const [key, value] of Object.entries(faqs)) {
      if (lowerMessage.includes(key)) {
        response = value
        break
      }
    }

    return NextResponse.json({ reply: response })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    )
  }
}

// Uncomment below to use OpenAI (requires OPENAI_API_KEY in .env.local)
/*
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request) {
  try {
    const { message } = await req.json()

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant for Dezeq, a software agency specializing in SaaS, AI, Healthcare, FinTech, ERP/CRM, and Education software. Answer questions about services, pricing, and how to get started.',
        },
        {
          role: 'user',
          content: message,
        },
      ],
      max_tokens: 150,
    })

    return NextResponse.json({
      reply: completion.choices[0].message.content,
    })
  } catch (error) {
    console.error('OpenAI API error:', error)
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    )
  }
}
*/
