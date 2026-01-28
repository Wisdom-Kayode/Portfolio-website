# Wisdom Femi Kayode - Personal Portfolio

A modern, animated personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, high-taste UI inspired by Apple/Stripe/Linear design principles
- **Smooth Animations**: Subtle, performance-focused animations using Framer Motion
- **Fully Responsive**: Mobile-first design that works seamlessly on all devices
- **TypeScript**: Type-safe development with full TypeScript support
- **Optimized Performance**: Built with Next.js App Router for optimal performance
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **GitHub Pages Ready**: Configured for automatic deployment to GitHub Pages

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages with GitHub Actions

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Leadership.tsx
│   ├── Navigation.tsx
│   ├── SelectedWork.tsx
│   └── Writing.tsx
└── ...
.github/
└── workflows/
    └── deploy.yml
```

## 🎨 Sections

1. **Hero**: Name, title, positioning statement, and CTA buttons
2. **Selected Work**: Three featured projects with detailed descriptions
3. **Leadership & Community**: Community involvement and achievements
4. **Writing & Thoughts**: Featured articles and Medium integration
5. **About**: Personal background including KLYES exchange experience
6. **Contact**: Contact information and social links

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## 📦 Build & Deploy

### Local Development

1. **Build for production**:
   ```bash
   npm run build
   ```

2. **Start production server**:
   ```bash
   npm start
   ```

### GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

#### Automatic Deployment (Recommended)

1. **Fork this repository** to your GitHub account
2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Build and deployment", select "GitHub Actions" as the source
3. **Push changes** to the main branch - the site will automatically deploy

#### Manual Deployment

1. **Install gh-pages** (if not already installed):
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Build and deploy**:
   ```bash
   npm run deploy
   ```

#### Deployment Configuration

The deployment is configured in:
- `next.config.js` - Static export configuration
- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `package.json` - Deployment scripts

**Note**: Update the repository URL in `package.json` deploy script to match your GitHub repository.

## 🎯 Customization

### Updating Personal Information

Edit the following files to personalize the portfolio:

- **Hero section**: `src/components/Hero.tsx`
- **Projects**: `src/components/SelectedWork.tsx`
- **About section**: `src/components/About.tsx`
- **Contact info**: `src/components/Contact.tsx`
- **Social links**: Update URLs in relevant components

### Modifying Colors

Update the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      accent: '#2563eb', // Change your accent color
      neutral: { ... }   // Adjust neutral palette
    }
  }
}
```

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/app/page.tsx`
3. Add navigation link in `src/components/Navigation.tsx`

## 🌟 Features Implemented

### Animations
- Page load fade and upward motion
- Scroll-based section reveals with `whileInView`
- Hover animations on cards and buttons
- Smooth scroll behavior
- Mobile menu animations

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Responsive typography
- Touch-friendly interactions

### Performance
- Next.js App Router for optimal loading
- Framer Motion for hardware-accelerated animations
- Optimized images and assets
- Static export for GitHub Pages

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize it for your own use!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: wisewisdom832@gmail.com
- **GitHub**: https://github.com/Wisdom-Kayode
- **LinkedIn**: https://www.linkedin.com/in/wisdom-femi-kayode-57bbb1380/

## 🌐 Live Demo

View the live portfolio at: https://wisdom-kayode.github.io/wisdom-portfolio/

---

Built with ❤️ and lots of coffee ☕
