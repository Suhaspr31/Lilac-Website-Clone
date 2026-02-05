# Lilac Mental Health Practice Website

A modern, responsive mental health practice website built with Next.js, React, and Tailwind CSS. This project represents a professional online presence for a mental health practice, featuring comprehensive information about services, practitioners, and patient resources.

## 🏥 About the Practice

Lilac is a compassionate mental health practice dedicated to providing comprehensive psychological services in a supportive and healing environment. The practice offers a range of mental health services designed to help individuals navigate their emotional well-being journey with professional guidance and care.

## 🚀 Features

### Core Functionality

- **Responsive Design**: Fully responsive website that works seamlessly across desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional interface with carefully selected color schemes promoting calm and healing
- **Fast Performance**: Built on Next.js 16 for optimal performance and SEO
- **Accessibility**: WCAG compliant design ensuring inclusive access to information

### Website Sections

- **Home**: Welcoming landing page with hero section, introduction, and specialty areas
- **About/Bio**: Detailed practitioner profiles and practice philosophy
- **Blog**: Mental health resources and insights with individual article pages
- **Contact**: Easy way for patients to reach out and schedule appointments
- **Legal Pages**: Privacy Policy, Terms of Service, Disclaimer, and Good Faith Estimate

### Technical Features

- **Server-Side Rendering**: Next.js App Router for optimal SEO and performance
- **Component-Based Architecture**: Reusable React components for maintainable code
- **Styling**: Tailwind CSS v4 with custom color palette (sage green and sand tones)
- **Icons**: Lucide React icon library for consistent, scalable vector icons
- **Image Optimization**: Next.js Image component for optimized image loading

## 🛠️ Tech Stack

| Technology         | Purpose                                 |
| ------------------ | --------------------------------------- |
| **Next.js 16.1.6** | React framework for production          |
| **React 19.2.3**   | UI library for building user interfaces |
| **Tailwind CSS 4** | Utility-first CSS framework             |
| **JavaScript**     | Programming language                    |
| **Lucide React**   | Icon library                            |
| **ESLint**         | Code linting and quality                |
| **PostCSS**        | CSS transformation                      |

## 📁 Project Structure

```
lilac-website44/
├── public/                    # Static assets
│   ├── *.webp               # Optimized images
│   ├── *.jpeg               # Office photos
│   └── *.svg                # Icons and logos
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── layout.js        # Root layout with providers
│   │   ├── page.js          # Homepage
│   │   ├── globals.css      # Global styles
│   │   ├── favicon.ico      # Site favicon
│   │   ├── blog/           # Blog section
│   │   │   ├── page.js      # Blog listing
│   │   │   └── [id]/        # Individual blog posts
│   │   ├── contact/        # Contact page
│   │   ├── privacy/        # Privacy policy
│   │   ├── terms/          # Terms of service
│   │   ├── disclaimer/     # Medical disclaimer
│   │   └── good-faith-estimate/  # Cost information
│   └── components/         # React components
│       ├── Navbar.js       # Site navigation
│       ├── Footer.js       # Site footer
│       └── NotFoundContent.js  # 404 error page
├── .gitignore
├── package.json
├── next.config.mjs
├── tailwind.config.js
├── postcss.config.mjs
├── jsconfig.json
├── eslint.config.mjs
└── README.md
```

## 🎨 Design System

### Color Palette

The website features a calming, professional color scheme:

```css
/* Sage Green - Primary Brand Color */
--sage-light: #6b8e61 /* Light accent */ --sage-default: #4a6741
  /* Primary brand */ --sage-dark: #354a2e /* Dark accents */
  /* Sand - Background & Neutral */ --sand-light: #faf9f6
  /* Light backgrounds */ --sand-default: #f5f5f0 /* Main background */
  --sand-dark: #e6e2dd /* Darker neutral areas */;
```

### Typography

- **Sans-serif**: Inter font for body text and UI elements
- **Serif**: Merriweather for headings and editorial content

## 🚦 Getting Started

### Prerequisites

- Node.js 20.9.0 or higher
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd lilac-website44
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

| Command         | Description                 |
| --------------- | --------------------------- |
| `npm run dev`   | Start development server    |
| `npm run build` | Create production build     |
| `npm run start` | Start production server     |
| `npm run lint`  | Run ESLint for code quality |

## 📝 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific settings:

```env
# Optional: Analytics and monitoring
NEXT_PUBLIC_ANALYTICS_ID=

# Optional: CMS or API endpoints
API_URL=
```

### Next.js Configuration

The project includes `next.config.mjs` with:

- Remote image patterns for Unsplash integration
- React compiler configuration

## 🔒 Security & Compliance

This website includes important legal and compliance pages:

- **Privacy Policy**: How patient data is collected and protected
- **Terms of Service**: Website usage terms and conditions
- **Medical Disclaimer**: Important health information disclaimers
- **Good Faith Estimate**: Transparency about service costs

## 📱 Responsive Design

The website is fully responsive with breakpoints at:

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🧪 Code Quality

### ESLint Configuration

The project uses ESLint with:

- Next.js Core Web Vitals configuration
- TypeScript-aware linting (even in JavaScript project)
- Import sorting and organization rules

### Linting Commands

```bash
# Check for issues
npm run lint

# Auto-fix many issues
npx eslint . --fix
```

## 📈 Performance Optimization

- **Static Generation**: Pages are statically generated where possible
- **Image Optimization**: Next.js Image component with proper sizing
- **Code Splitting**: Automatic per-page JavaScript bundles
- **Font Optimization**: Self-hosted Google Fonts via next/font
- **Lazy Loading**: Components load on demand

## 🐛 Troubleshooting

### Common Issues

**Port already in use:**

```bash
# Kill process on port 3000
npx kill-port 3000
# Then try again
npm run dev
```

**Clear cache and reinstall:**

```bash
rm -rf node_modules .next
npm install
npm run dev
```

### Development Tips

- Use React Developer Tools browser extension
- Enable React Strict Mode for additional warnings
- Check browser console for errors during development

## 📄 License

This project is proprietary software. All rights reserved.

## 🤝 Contributing

This is a private project. For inquiries about the mental health practice, please contact through the website's contact page.

## 📞 Support

For technical support or questions about this codebase, please open an issue in the repository.

---

Built with ❤️ using Next.js and Tailwind CSS
