# Dezeq - Award-Level Website

> Building Intelligent Software for the Future

An ultra-premium, award-level website for Dezeq software agency featuring Three.js 3D animations, GSAP scroll effects, smooth transitions, and an AI-powered chatbot.

## Features

- **3D Interactive Hero**: Three.js powered particle systems and geometric animations
- **GSAP Animations**: Smooth scroll-triggered animations throughout
- **Smooth Scrolling**: Lenis smooth scroll implementation
- **AI Chatbot**: Intelligent FAQ system with natural language understanding
- **Custom Cursor**: Interactive cursor with hover effects
- **Glass Morphism**: Modern glassmorphic UI elements
- **Gradient Animations**: Beautiful color gradients and neon effects
- **Responsive Design**: Fully responsive across all devices
- **Performance Optimized**: Lazy loading, code splitting, and optimized assets

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js, React Three Fiber
- **Animations**: GSAP, Framer Motion
- **Smooth Scroll**: Lenis
- **UI Components**: Custom components with glass morphism

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install Dependencies**

```bash
npm install
```

2. **Download Fonts** (Optional but recommended)

Download the following fonts and place them in `public/fonts/`:
- [Satoshi](https://www.fontshare.com/fonts/satoshi) - Variable font
- [Inter](https://rsms.me/inter/) - Variable font

Or use Google Fonts fallback (already configured).

3. **Run Development Server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

4. **Build for Production**

```bash
npm run build
npm start
```

## Project Structure

```
dezeq-website/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── Preloader.tsx        # Loading animation
│   ├── CustomCursor.tsx     # Custom cursor
│   ├── SmoothScroll.tsx     # Lenis smooth scroll wrapper
│   ├── Navigation.tsx       # Sticky navigation bar
│   ├── Hero.tsx             # 3D hero section
│   ├── About.tsx            # About section with GSAP
│   ├── Expertise.tsx        # Services/expertise showcase
│   ├── Team.tsx             # Team member cards
│   ├── Portfolio.tsx        # Project portfolio
│   ├── TrustedBy.tsx        # Client logos carousel
│   ├── ChatbotSection.tsx   # AI chatbot interface
│   ├── Contact.tsx          # Contact form
│   └── Footer.tsx           # Footer with newsletter
├── public/
│   └── fonts/               # Custom fonts (add manually)
└── package.json
```

## Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: '#00D9FF',      // Cyan
  secondary: '#9D4EDD',    // Purple
  accent: '#FF006E',       // Pink
}
```

### Content

Update company information in:
- `components/About.tsx` - Company description
- `components/Team.tsx` - Team member details
- `components/Expertise.tsx` - Services offered
- `components/Portfolio.tsx` - Project showcases

### Chatbot FAQ

Customize chatbot responses in `components/ChatbotSection.tsx`:

```typescript
const faqs = {
  'what services': 'Your custom response...',
  // Add more FAQ entries
}
```

## AI Chatbot Integration

The chatbot currently uses a simple pattern-matching system. To integrate with a real AI service:

### Option 1: OpenAI Integration

1. Install OpenAI SDK:
```bash
npm install openai
```

2. Create API route at `app/api/chat/route.ts`:

```typescript
import { OpenAI } from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request) {
  const { message } = await req.json()

  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: message }],
  })

  return Response.json({
    reply: response.choices[0].message.content
  })
}
```

3. Add to `.env.local`:
```
OPENAI_API_KEY=your_api_key_here
```

### Option 2: Dialogflow

Integrate Google Dialogflow for more structured conversations.

### Option 3: Retell AI

Use Retell AI for voice-enabled customer support.

## Performance Optimization

### Lazy Loading

Images and heavy components are lazy-loaded:

```typescript
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <LoadingSpinner />,
})
```

### Font Optimization

- Use `next/font` for automatic font optimization
- Fonts are preloaded and self-hosted

### Bundle Size

- Check bundle size: `npm run build`
- Analyze with: `npx @next/bundle-analyzer`

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project to Vercel
3. Deploy automatically

### Other Platforms

- **Netlify**: Use `next export` for static export
- **AWS**: Deploy with AWS Amplify
- **Docker**: Use the provided Dockerfile

## SEO Optimization

The website includes:
- Meta tags for social sharing
- Open Graph protocol
- Twitter Cards
- Semantic HTML
- Fast Core Web Vitals

Update metadata in `app/layout.tsx`.

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Awwwards Submission Tips

To maximize your chances of winning:

1. **Performance**: Ensure 90+ Lighthouse scores
2. **Mobile**: Perfect mobile responsiveness
3. **Innovation**: Highlight unique 3D interactions
4. **Case Study**: Prepare a detailed case study
5. **Video**: Create a demo video
6. **Loading**: Keep initial load under 3 seconds

## Contributing

This is a custom website for Dezeq. For modifications or enhancements, please contact the development team.

## Team

- **Kashan Iqbal** - AI Developer & Team Lead
- **Farhan Ali** - Senior AI & Full Stack Developer
- **David** - Sales Executive

## License

© 2025 Dezeq. All rights reserved.

## Support

For support, email hello@dezeq.com or open an issue.

---

**Built with ❤️ using Next.js, Three.js, and GSAP**
# dezeq
