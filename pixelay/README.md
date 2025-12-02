URL LINK: https://intelli-toggle-psi.vercel.app/

## Tradeoffs, Shortcuts & Future Improvements

### Tradeoffs Made

**1. Typography & Fonts**
- **Decision**: Used system fonts (Arial/Helvetica) instead of custom Figma fonts
- **Reason**: Faster implementation, no font loading overhead, better performance
- **Impact**: Slight visual differences in text rendering, but maintains readability and accessibility
- **Alternative**: Would load custom fonts via `@font-face` or Google Fonts for pixel-perfect match

**2. Image Handling**
- **Decision**: Direct static image imports instead of Nuxt Image component
- **Reason**: Simpler implementation, no additional configuration needed
- **Impact**: Larger bundle size, no automatic optimization, no lazy loading, no responsive image variants
- **Alternative**: Use `@nuxt/image` module for automatic optimization, lazy loading, and WebP conversion

**3. Component Architecture**
- **Decision**: Single-file components with inline Tailwind classes
- **Reason**: Faster development, easier to see styles in context
- **Impact**: Some repetition of utility classes, harder to maintain consistent spacing/colors at scale
- **Alternative**: Extract common patterns to composables or utility classes, use CSS variables for theme colors

**4. State Management**
- **Decision**: No global state management (Pinia/Vuex)
- **Reason**: Static landing page doesn't require complex state
- **Impact**: Mobile menu state is local only (acceptable for this use case)
- **Alternative**: Would add Pinia if building dashboard or multi-page app with shared state

**5. Animations & Interactions**
- **Decision**: Basic CSS transitions and hover states
- **Reason**: Faster to implement, good enough for MVP
- **Impact**: Less polished feel compared to sophisticated micro-interactions
- **Alternative**: Add GSAP or Framer Motion for scroll-triggered animations, parallax effects, and smoother transitions

**6. Form Handling**
- **Decision**: No form validation or submission logic
- **Reason**: Assignment focused on visual implementation, not backend integration
- **Impact**: Buttons and forms are non-functional
- **Alternative**: Add form validation (VeeValidate), API integration, error handling, loading states

### Shortcuts Taken

**1. No Image Optimization**
- Images are imported directly without compression or format conversion
- No lazy loading implemented
- All images load on initial page load

**2. Hardcoded Content**
- All text content is hardcoded in components
- No content management system or i18n support

**3. No SEO Implementation**
- Missing meta tags, Open Graph, Twitter cards
- No structured data (JSON-LD)
- No sitemap generation
- **Fix**: Add `@nuxtjs/seo` module, implement proper meta tags, add structured data for better search visibility


**8. Button Functionality**
- All CTA buttons are non-functional (no routing or actions)
- Navigation links use hash anchors but no smooth scrolling
- **Fix**: Add Nuxt routing, implement smooth scroll behavior, connect buttons to actual actions

### With More Time, I Would:

**Performance Optimizations**
1. **Image Optimization**: Implement `@nuxt/image` for automatic WebP/AVIF conversion, lazy loading, and responsive images
2. **Code Splitting**: Implement route-based code splitting and component lazy loading
3. **Bundle Analysis**: Use `@nuxtjs/web-vitals` to identify and fix performance bottlenecks
4. **Critical CSS**: Extract and inline critical CSS for above-the-fold content
5. **Preload Resources**: Add resource hints (preload, prefetch) for critical assets

**Developer Experience**
1. **TypeScript**: Convert to TypeScript for better type safety and IDE support
2. **Component Documentation**: Add JSDoc comments and Storybook for component library
3. **Linting & Formatting**: Configure ESLint, Prettier, and stylelint for consistent code quality
4. **Git Hooks**: Add Husky with pre-commit hooks for linting and testing
5. **Component Patterns**: Extract reusable patterns (Button, Card, Section) to reduce duplication

**User Experience**
1. **Smooth Scrolling**: Implement smooth scroll behavior for anchor links
2. **Loading States**: Add skeleton loaders and loading indicators
3. **Animations**: Add scroll-triggered animations using Intersection Observer API
4. **Micro-interactions**: Enhance button hover states, add ripple effects, improve mobile menu animation
5. **Progressive Enhancement**: Ensure core functionality works without JavaScript

**Accessibility**
1. **ARIA Enhancements**: Add comprehensive ARIA labels, roles, and live regions
2. **Keyboard Navigation**: Implement full keyboard navigation, focus management, and skip links
3. **Screen Reader Testing**: Test with NVDA/JAWS, add screen reader announcements
4. **Color Contrast**: Verify all text meets WCAG AA standards (4.5:1 ratio)
5. **Focus Indicators**: Ensure all interactive elements have visible focus states

### Technical Debt Notes

- **Color Values**: Hardcoded hex colors throughout components - should use CSS variables or Tailwind theme
- **Breakpoint Consistency**: Responsive breakpoints defined in multiple places - should centralize
- **Component Props**: Many components could accept props for reusability (e.g., button variants, section backgrounds)
- **Asset Organization**: Images scattered in assets folder - could organize by section/feature
- **CSS Specificity**: Some inline styles mixed with Tailwind - should standardize approach
