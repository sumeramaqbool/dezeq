# Quick Start Guide

Get your Dezeq website up and running in 5 minutes!

## Installation

```bash
# Navigate to project directory
cd Dezeq

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your website.

## Common Issues & Fixes

### Issue: Dependencies not installing

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Issue: Three.js animations not showing

**Solution:**
- Check browser console for WebGL errors
- Ensure your browser supports WebGL 2.0
- Try a different browser (Chrome recommended)

### Issue: Fonts not loading

**Solution:**
1. Download fonts:
   - [Satoshi](https://www.fontshare.com/fonts/satoshi)
   - [Inter](https://rsms.me/inter/)
2. Place in `public/fonts/` directory
3. Or use Google Fonts fallback (default)

### Issue: Port 3000 already in use

**Solution:**
```bash
# Use different port
npm run dev -- -p 3001
```

## Customization Quick Guide

### Change Company Name
Edit these files:
- `app/layout.tsx` - Page title and metadata
- `components/Navigation.tsx` - Logo
- `components/Hero.tsx` - Hero headline
- `components/Footer.tsx` - Footer text

### Update Team Members
Edit `components/Team.tsx`:
```typescript
const teamMembers = [
  {
    name: 'Your Name',
    role: 'Your Role',
    avatar: '👤', // Any emoji
    color: 'from-blue-500 to-cyan-500',
    skills: ['Skill 1', 'Skill 2', 'Skill 3'],
  },
  // Add more team members...
]
```

### Modify Services
Edit `components/Expertise.tsx`:
```typescript
const expertiseAreas = [
  {
    title: 'Your Service',
    description: 'Service description',
    icon: <YourIcon />,
    color: 'from-primary to-secondary',
  },
  // Add more services...
]
```

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#YOUR_COLOR',
  secondary: '#YOUR_COLOR',
  accent: '#YOUR_COLOR',
}
```

### Update Portfolio Projects
Edit `components/Portfolio.tsx`:
```typescript
const projects = [
  {
    title: 'Project Name',
    category: 'Category',
    description: 'Description',
    gradient: 'from-blue-500 to-cyan-500',
    tags: ['Tech1', 'Tech2'],
  },
  // Add more projects...
]
```

### Modify Contact Info
Edit `components/Contact.tsx`:
```typescript
// Update email, phone, location, social links
```

## Performance Tips

### Optimize Images
```bash
# Install image optimizer
npm install sharp

# Use Next.js Image component
import Image from 'next/image'
```

### Reduce Bundle Size
```bash
# Analyze bundle
npm run build
npx @next/bundle-analyzer
```

### Lazy Load Components
```typescript
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <LoadingSkeleton />,
})
```

## Testing

### Run Lighthouse
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Generate report
4. Aim for 90+ scores

### Test Responsiveness
```bash
# Mobile devices to test:
- iPhone 12/13/14
- Samsung Galaxy S21
- iPad Pro
- Desktop (1920x1080)
```

### Browser Testing
Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Workflow

### 1. Make Changes
Edit files in `components/` or `app/`

### 2. See Changes Live
Changes auto-reload at [http://localhost:3000](http://localhost:3000)

### 3. Test Thoroughly
- Check all sections
- Test on mobile
- Verify animations
- Test forms

### 4. Build & Deploy
```bash
npm run build
npm start
```

## Deploy to Production

### Vercel (Easiest)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Manual Deploy
```bash
# Build
npm run build

# The .next folder contains your production build
# Upload to your hosting provider
```

## Environment Variables

Create `.env.local` file:
```env
OPENAI_API_KEY=your_key_here (optional)
NEXT_PUBLIC_GA_ID=GA_TRACKING_ID (optional)
```

## Chatbot Setup

### Basic (Included)
Works out of the box with pattern matching.

### Advanced (OpenAI)
1. Get API key from [OpenAI](https://platform.openai.com)
2. Add to `.env.local`
3. Uncomment OpenAI code in `app/api/chat/route.ts`
4. Restart server

## Support & Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Three.js Docs](https://threejs.org/docs)
- [GSAP Docs](https://greensock.com/docs)
- [Framer Motion](https://www.framer.com/motion)

### Community
- [Next.js Discord](https://discord.com/invite/nextjs)
- [Three.js Forum](https://discourse.threejs.org)

### Need Help?
Email: hello@dezeq.com

## Awwwards Submission Checklist

Before submitting to Awwwards:

- [ ] Perfect mobile responsive design
- [ ] Lighthouse score 90+ on all metrics
- [ ] All animations are smooth (60fps)
- [ ] No console errors
- [ ] Fast loading time (<3 seconds)
- [ ] Unique design and interactions
- [ ] High-quality content and images
- [ ] Create a case study page
- [ ] Prepare a demo video
- [ ] Test on multiple devices
- [ ] SEO optimized
- [ ] Accessible (WCAG AA)

## Pro Tips

1. **Optimize Three.js**
   - Reduce particle count on mobile
   - Use lower quality textures on mobile
   - Disable animations on low-end devices

2. **GSAP Performance**
   - Use `will-change` CSS property sparingly
   - Animate transform and opacity only
   - Use `scrollTrigger` efficiently

3. **Images**
   - Use WebP format
   - Lazy load images
   - Use next/image component

4. **Fonts**
   - Preload critical fonts
   - Use font-display: swap
   - Subset fonts if possible

5. **Code Splitting**
   - Dynamic imports for heavy components
   - Route-based splitting (automatic in Next.js)

## Troubleshooting

### Animations choppy
- Reduce particle count in Three.js scenes
- Check GPU usage
- Disable animations on mobile

### Slow loading
- Optimize images
- Enable lazy loading
- Check bundle size

### Chatbot not responding
- Check browser console for errors
- Verify API route is working
- Test with simple messages

### Build fails
- Clear `.next` folder
- Update dependencies
- Check for TypeScript errors

---

Happy coding! Build something amazing with Dezeq! 🚀
