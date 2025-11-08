# Deployment Guide

## Quick Deployment to Vercel

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit: Dezeq award-level website"
git remote add origin your-repo-url
git push -u origin main
```

2. **Deploy to Vercel**
- Visit [vercel.com](https://vercel.com)
- Click "Import Project"
- Select your GitHub repository
- Configure:
  - Framework Preset: Next.js
  - Build Command: `npm run build`
  - Output Directory: `.next`
- Add environment variables (if using OpenAI)
- Click "Deploy"

## Alternative: Netlify

1. **Build for static export** (optional)
```bash
npm run build
```

2. **Deploy**
- Connect GitHub repo to Netlify
- Build settings:
  - Build command: `npm run build`
  - Publish directory: `.next`

## Docker Deployment

1. **Create Dockerfile**

```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Build application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

2. **Build and run**
```bash
docker build -t dezeq-website .
docker run -p 3000:3000 dezeq-website
```

## Performance Checklist

Before deployment, ensure:

- [ ] All images are optimized (WebP format)
- [ ] Fonts are loaded correctly
- [ ] Lighthouse score > 90
- [ ] No console errors
- [ ] Mobile responsive on all devices
- [ ] SEO metadata is complete
- [ ] Social sharing images work
- [ ] Forms validate properly
- [ ] 3D animations perform well on mid-range devices

## Post-Deployment

1. **Test the website**
   - Check all sections load
   - Test chatbot functionality
   - Verify contact form
   - Check mobile responsiveness

2. **SEO Setup**
   - Submit sitemap to Google Search Console
   - Add Google Analytics (optional)
   - Set up social media tags

3. **Monitor Performance**
   - Use Vercel Analytics
   - Monitor Core Web Vitals
   - Check error logs

## Custom Domain

1. **Add domain in Vercel**
   - Go to Project Settings > Domains
   - Add your custom domain
   - Follow DNS configuration instructions

2. **Update DNS records**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

## SSL Certificate

SSL is automatically provided by Vercel/Netlify. No additional configuration needed.

## Environment Variables

For production, set these in your hosting platform:

```
OPENAI_API_KEY=your_key_here
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
```

## Monitoring

Set up monitoring:
- [Sentry](https://sentry.io) for error tracking
- [LogRocket](https://logrocket.com) for session replay
- [Vercel Analytics](https://vercel.com/analytics) for performance

## Maintenance

Regular maintenance tasks:
- Update dependencies monthly
- Check for security vulnerabilities
- Optimize images as needed
- Review and update content
- Monitor performance metrics

## Rollback

If deployment fails:
```bash
# Vercel
vercel rollback

# Or redeploy previous commit
git revert HEAD
git push
```

## Support

For deployment issues:
- Check [Next.js docs](https://nextjs.org/docs/deployment)
- Vercel [support](https://vercel.com/support)
- Email: hello@dezeq.com
