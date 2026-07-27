# BridgeKey - Next.js Conversion

This project has been successfully converted from a single HTML file to a modern Next.js application with React components, TypeScript, and Tailwind CSS.

## Project Structure

```
bridgekey/
├── app/
│   ├── layout.tsx          # Root layout with metadata and font imports
│   ├── page.tsx            # Main page component
│   ├── globals.css         # Global styles (converted from inline HTML CSS)
│   └── favicon.ico         # Favicon
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Ticker.tsx          # Live crypto ticker (fetches from CoinGecko API)
│   ├── Hero.tsx            # Hero section with animated payment demo
│   ├── Showcase.tsx        # Wallet showcase section with device mockup
│   ├── Features.tsx        # Features section
│   ├── MSTChain.tsx        # MST Blockchain section with world map
│   ├── HowItWorks.tsx      # Three-step flow section
│   ├── Security.tsx        # Security properties section
│   ├── CTABand.tsx         # Call-to-action band
│   ├── Footer.tsx          # Footer with social links
│   ├── CursorGlow.tsx      # Custom cursor glow effect
│   ├── ParticleNetwork.tsx # Animated particle network background
│   └── ScrollReveal.tsx    # Scroll animation triggers
├── public/
│   ├── assets/             # All original assets (images, icons, logos)
│   └── uploads/            # Uploaded images
├── package.json            # Dependencies
├── tailwind.config.ts      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## Key Features

### 1. **Custom Cursor Glow Effect**
   - `CursorGlow.tsx` - Implements the custom mouse cursor with a glowing effect
   - Uses `requestAnimationFrame` for smooth 60fps tracking

### 2. **Particle Network Background**
   - `ParticleNetwork.tsx` - Canvas-based animated particle network
   - Dynamically creates particles and draws connections between nearby ones
   - Responds to scroll position with parallax effect

### 3. **Live Crypto Ticker**
   - `Ticker.tsx` - Fetches real-time crypto prices from CoinGecko API
   - Displays 15 major cryptocurrencies with live prices
   - Auto-scrolling ticker with seamless loop

### 4. **Scroll Animations**
   - `ScrollReveal.tsx` - Uses Intersection Observer API for efficient scroll-triggered animations
   - Reveals content as user scrolls with staggered delays
   - Smooth hero section parallax on scroll

### 5. **Interactive Components**
   - Animated SVG payments demo in Hero section
   - Interactive world map showing MST network locations
   - Hover effects on feature cards with local gradient glow

### 6. **Typewriter Effect**
   - Hero tagline types out character by character
   - Smooth random delays between characters for natural feel

## Development

### Installation
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production
```bash
npm run build
npm start
```

## Styling

All styles have been converted from inline HTML `<style>` to a comprehensive `globals.css` file. CSS custom properties (variables) are used for consistent theming:

```css
:root {
  --bg: #050A14;           /* Main background */
  --ink: #E8F0F8;          /* Main text color */
  --teal: #00E5C0;         /* Primary accent */
  --gold: #FFB830;         /* Secondary accent */
  /* ... more variables */
}
```

## Component Breakdown

### Client Components
All components are marked as `'use client'` since they use React hooks and interactive features:
- Event listeners (mouse, scroll, resize)
- `useEffect` for animations and API calls
- `useRef` for DOM manipulations
- State management with `useState`

### API Integration
- **CoinGecko API**: Fetches cryptocurrency market data for the live ticker
- No authentication required for public endpoints

### Browser APIs Used
- **Intersection Observer**: For scroll-triggered animations
- **Canvas API**: For particle network rendering
- **RequestAnimationFrame**: For smooth animations at 60fps
- **Local Storage**: Can be added for user preferences

## Performance Optimizations

1. **Next.js Image Optimization**: Using Next.js Image component for optimized images
2. **Code Splitting**: Each component is separate for better bundling
3. **Efficient Animations**: Using CSS animations and `requestAnimationFrame` over heavy JavaScript
4. **Intersection Observer**: Lazy triggering of animations only when elements are visible

## Browser Support

- Modern browsers with ES6+ support
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile-responsive with media queries

## Future Enhancements

1. Add dark mode toggle
2. Add PWA capabilities
3. Add form validation for any future contact/signup forms
4. Add analytics tracking (Google Analytics, Vercel Analytics)
5. Add internationalization (i18n)
6. Add performance monitoring
7. Cache crypto ticker data in local storage
8. Add test coverage with Jest and React Testing Library

## File Size Comparison

**Original HTML File**: ~100KB (all embedded)
**Next.js Project**: 
- Much better code organization
- Lazy loading of components
- Smaller bundle sizes due to tree-shaking
- Better developer experience

## Deployment

This Next.js project can be deployed to:
- **Vercel** (recommended - optimized for Next.js)
- **Netlify**
- **AWS Amplify**
- **Docker container**
- **Self-hosted Node.js server**

Example Vercel deployment:
```bash
npm install -g vercel
vercel
```

## Notes

- All original functionality has been preserved
- The project uses React 19.2.4 with the latest Next.js 16.2.10
- TypeScript is configured but can write in JavaScript if preferred
- Tailwind CSS is set up but all custom CSS uses the `globals.css` file for consistency

## Support

For questions or issues, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
