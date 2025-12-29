# Pratik Devkota - Portfolio

A modern, professional portfolio website showcasing full-stack web and React Native development expertise through real-world project case studies.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN-inspired components
- **Animations**: Framer Motion
- **Form Validation**: React Hook Form + Zod
- **Icons**: Lucide React

## 📋 Features

- ✨ Modern, responsive design with dark mode support
- 🎨 Custom design system with HSL-based color palette
- 📱 Fully responsive across all devices
- 🎭 Smooth animations and micro-interactions
- 📊 5 detailed project case studies
- 📝 Contact form with validation
- ♿ Accessible and SEO optimized
- ⚡ Static site generation for optimal performance

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to view the portfolio.

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm start
```

## 📝 Customization

### Update Personal Information

1. **Contact Details** - Update in:
   - `components/sections/HeroSection.tsx` - GitHub link
   - `components/sections/ContactSection.tsx` - Email and social links
   - `components/layout/Footer.tsx` - Social media links

2. **Projects** - Edit `data/projects.ts`:
   - Add your own projects
   - Include problem, solution, tech stack, features, and outcomes
   - Mark your flagship project as `featured: true`

3. **Skills** - Edit `data/skills.ts`:
   - Update skills by category
   - Add new categories as needed

4. **Meta Tags** - Update `app/layout.tsx`:
   - Title, description, keywords
   - Open Graph and Twitter card metadata

### Add Images

- Place images in `public/` directory
- Update references in components
- Consider using Next.js Image component for optimization

## 🎨 Design System

The portfolio uses a comprehensive design system with:
- CSS custom properties for colors (HSL values)
- Dark mode toggle with localStorage persistence
- Responsive typography using clamp()
- Reusable UI components with variants
- Consistent spacing and border radius tokens

## 📦 Project Structure

```
d:/Portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Main page
│   └── globals.css        # Global styles
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Page sections
│   ├── projects/          # Project components
│   └── ui/                # Reusable UI components
├── data/                  # Project and skills data
└── lib/                   # Utilities
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

- Build command: `npm run build`
- Publish directory: `.next`

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Pratik Devkota**
- Full-Stack Web Developer & React Native Developer
- Location: Nepal
- [GitHub](https://github.com/pratikdevkota)
- [LinkedIn](https://linkedin.com/in/pratikdevkota)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
