# PatrolDesk Website - Deployment Guide

## Prerequisites

- Node.js 14+ installed
- npm or yarn package manager
- Web hosting service (Netlify, Vercel, AWS, etc.)

## Local Development

### 1. Clone and Install
```bash
git clone https://github.com/yourusername/patroldesk-website.git
cd patroldesk-website
npm install
```

### 2. Start Development Server
```bash
npm start
```
The site will open at `http://localhost:3000`

### 3. Build for Production
```bash
npm run build
```
This creates an optimized production build in the `/build` folder.

## Deployment Options

### Option 1: Netlify (Recommended - Easiest)

1. **Sign up at [Netlify](https://www.netlify.com/)**

2. **Deploy via Git:**
   - Connect your GitHub repository
   - Build command: `npm run build`
   - Publish directory: `build`
   - Click "Deploy site"

3. **Or deploy via drag-and-drop:**
   - Run `npm run build` locally
   - Drag the `/build` folder to Netlify's deploy zone

4. **Custom Domain:**
   - Go to Domain Settings
   - Add your custom domain (e.g., patroldesk.com)
   - Update DNS records as instructed

### Option 2: Vercel

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Deploy:**
```bash
cd /Users/keean/PatrolDesk\ Website
vercel
```

3. **Follow prompts and configure:**
   - Project name: patroldesk-website
   - Build command: `npm run build`
   - Output directory: `build`

### Option 3: GitHub Pages

1. **Install gh-pages:**
```bash
npm install --save-dev gh-pages
```

2. **Add to package.json:**
```json
{
  "homepage": "https://yourusername.github.io/patroldesk-website",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. **Deploy:**
```bash
npm run deploy
```

### Option 4: AWS S3 + CloudFront

1. **Build the project:**
```bash
npm run build
```

2. **Create S3 Bucket:**
   - Enable static website hosting
   - Upload `/build` folder contents
   - Set bucket policy for public read access

3. **Configure CloudFront:**
   - Create distribution pointing to S3 bucket
   - Set up SSL certificate
   - Configure custom domain

4. **Deploy script (optional):**
```bash
aws s3 sync build/ s3://your-bucket-name --delete
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
```

## Environment Variables

If you add any environment variables, create a `.env` file:

```env
REACT_APP_API_URL=https://api.patroldesk.com
REACT_APP_ANALYTICS_ID=UA-XXXXXXXXX-X
```

**Important:** Never commit `.env` files with sensitive data to version control.

## Performance Optimization

### 1. Image Optimization
- Compress images before adding to `/src/assets`
- Use WebP format when possible
- Recommended tools: TinyPNG, ImageOptim, Squoosh

### 2. Code Splitting
React automatically code-splits. To optimize further:
```javascript
const Contact = React.lazy(() => import('./pages/Contact'));
```

### 3. CDN Configuration
- Enable Gzip compression
- Set cache headers for static assets
- Use CDN for asset delivery

### 4. Bundle Size Analysis
```bash
npm install --save-dev webpack-bundle-analyzer
npm run build
npx webpack-bundle-analyzer build/static/js/*.js
```

## SEO Configuration

### 1. Update meta tags in `public/index.html`
- Title, description, keywords
- Open Graph tags for social media
- Twitter Card tags

### 2. Create sitemap.xml
Place in `/public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://patroldesk.com/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://patroldesk.com/privacy</loc>
    <priority>0.8</priority>
  </url>
</urlset>
```

### 3. Google Analytics
Add to `public/index.html` before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## SSL/HTTPS

All deployment platforms mentioned above provide free SSL certificates. Ensure HTTPS is enabled:
- Netlify/Vercel: Automatic
- AWS: Use AWS Certificate Manager
- Others: Let's Encrypt

## Monitoring

### Uptime Monitoring
- [UptimeRobot](https://uptimerobot.com/)
- [Pingdom](https://www.pingdom.com/)
- AWS CloudWatch

### Performance Monitoring
- Google Lighthouse (built into Chrome DevTools)
- [WebPageTest](https://www.webpagetest.org/)
- [GTmetrix](https://gtmetrix.com/)

## Continuous Deployment

### Netlify/Vercel
Automatic deployment on every push to `main` branch.

### GitHub Actions Example
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: '16'
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

## Apple App Store Requirements Checklist

Before submitting your app to Apple:

- [x] Privacy Policy page implemented and accessible
- [x] Terms of Service page available
- [x] Contact information clearly visible
- [x] EULA (End User License Agreement) included
- [x] Mobile-responsive design
- [x] HTTPS enabled
- [x] Clear app description and features
- [x] Support email listed
- [x] Data collection practices disclosed
- [x] Cookie policy (if applicable)

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Images Not Loading
- Check file paths are correct (case-sensitive)
- Ensure images are in `/src/assets`
- Import images properly in components

### Routing Issues on Deployment
For single-page apps, configure your host:

**Netlify:** Create `/public/_redirects`:
```
/*    /index.html   200
```

**Vercel:** Automatically handled

**AWS S3:** Configure error document to `index.html`

## Post-Deployment

1. Test all pages and links
2. Verify mobile responsiveness
3. Check page load speed
4. Test forms and interactions
5. Verify SSL certificate
6. Submit to Google Search Console
7. Set up monitoring

## Support

For deployment issues:
- Email: devops@patroldesk.com
- Documentation: [Your docs URL]
- GitHub Issues: [Your repo URL]

---

**Last Updated:** November 21, 2024

