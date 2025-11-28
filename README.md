# IntelliToggle - Frontend Developer Assignment

A responsive landing page for IntelliToggle, built with Nuxt 3, Vue 3, and TailwindCSS, matching the provided Figma design.

## 🚀 Live Demo

**Hosted URL**: [Add your deployment URL here]
- Deploy to: GitHub Pages, Firebase Hosting, Vercel, Netlify, or similar
- Example: `https://your-username.github.io/intelliToggle` or `https://intelliToggle.web.app`

## 📋 Project Overview

This project recreates the IntelliToggle homepage design with:
- **Framework**: Nuxt 3 + Vue 3
- **Styling**: TailwindCSS
- **Responsive Design**: Desktop and mobile breakpoints
- **Interactive Elements**: Mobile menu toggle with smooth animations
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation support

## 🛠️ Setup

Install dependencies:

```bash
npm install
```

## 💻 Development

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## 🏗️ Production Build

Build the application for production:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
intelliToggle/
├── components/          # Reusable Vue components
│   ├── Header.vue      # Navigation with mobile menu toggle
│   ├── Hero.vue         # Hero section with CTA
│   ├── TrustedBy.vue    # Company logos section
│   ├── WhatIsIntelliToggle.vue
│   ├── OpenFeature.vue
│   ├── ControlPower.vue # Three-column feature showcase
│   ├── ComparisonTable.vue
│   ├── DartCodeAI.vue   # AI features section
│   ├── Pricing.vue
│   ├── WhyTeams.vue
│   ├── FinalCTA.vue
│   └── Footer.vue
├── assets/
│   └── css/
│       └── main.css     # TailwindCSS directives
├── pixelay/             # Pixelay comparison files
│   ├── pixelay-desktop.png
│   ├── pixelay-mobile.png
│   └── notes.md
├── app.vue              # Main app component
├── nuxt.config.ts       # Nuxt configuration
└── tailwind.config.js   # TailwindCSS configuration
```

## 🎨 Design Implementation

### Color Scheme
- **Primary Purple**: `#4A148C` (IntelliToggle brand color)
- **Accent Orange**: `#FF6B35` (CTA buttons, highlights)
- **Accent Yellow**: `#FFB84D` (Hero text highlights)
- **Backgrounds**: White, light gray (`#F3F4F6`), dark purple

### Key Features Implemented
1. ✅ Responsive navigation with mobile menu toggle (interactive element)
2. ✅ Hero section with gradient CTA button
3. ✅ Trusted by section with company logos
4. ✅ Feature showcase sections
5. ✅ Comparison table (IntelliToggle vs Others)
6. ✅ AI features section with dark purple background
7. ✅ Pricing section
8. ✅ Footer with newsletter subscription

## 📝 Tradeoffs & Notes

### What Was Implemented
- All sections from the Figma design
- Fully responsive layout (mobile-first approach)
- Mobile menu toggle with smooth open/close animation
- Semantic HTML structure for accessibility
- TailwindCSS utility classes for maintainability

### Shortcuts & Limitations
- **Images**: Used placeholder divs and gradients instead of actual dashboard screenshots. In production, these would be replaced with optimized images or Nuxt Image components.
- **Fonts**: Using system fonts (Arial/Helvetica) instead of custom Figma fonts. For exact fidelity, custom fonts would need to be loaded.
- **Icons**: Using SVG icons and simple shapes instead of custom icon library. Could be enhanced with Heroicons or similar.
- **Animations**: Basic hover states and transitions. More complex animations could be added with more time.
- **Content**: Some placeholder text used where exact content wasn't specified in the design description.

### With More Time, I Would:
1. **Optimize Images**: Use Nuxt Image component for lazy-loading and responsive images
2. **Custom Fonts**: Load and apply exact fonts from Figma design
3. **Enhanced Animations**: Add scroll-triggered animations and micro-interactions
4. **CMS Integration**: If using Twig, integrate with a headless CMS for content management
5. **Performance**: Implement code splitting, optimize bundle size
6. **Testing**: Add unit tests for components and E2E tests for critical user flows
7. **Accessibility**: Enhanced ARIA labels, focus management, screen reader optimization
8. **SEO**: Add meta tags, structured data, Open Graph tags

## 📸 Pixelay Comparison

The `/pixelay` folder contains:
- `pixelay-desktop.png` - Desktop overlay comparison
- `pixelay-mobile.png` - Mobile overlay comparison
- `notes.md` - Detailed notes on differences found

**To run Pixelay comparison:**
1. Open your deployed site or local dev server
2. Use Pixelay browser extension or tool
3. Compare against the Figma design
4. Save screenshots to `/pixelay` folder

## 🚢 Deployment

### Option 1: Vercel (Recommended for Nuxt)

#### Method A: Deploy via Vercel CLI
1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy to production:
```bash
vercel --prod
```

#### Method B: Deploy via GitHub (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Nuxt 3 and configure everything automatically
6. Click "Deploy"

The `vercel.json` file is already configured for optimal Nuxt 3 deployment.

### Option 2: Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Option 3: Firebase Hosting
```bash
npm install -g firebase-tools
firebase init hosting
firebase deploy
```

### Option 4: GitHub Pages
1. Build: `npm run generate`
2. Deploy `dist` folder to GitHub Pages

## 📄 License

This is an assignment project for evaluation purposes.

