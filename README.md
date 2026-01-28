# Wisdom Femi Kayode - Personal Portfolio

A modern, animated personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, high-taste UI inspired by Apple/Stripe/Linear design principles
- **Smooth Animations**: Subtle, performance-focused animations using Framer Motion
- **Fully Responsive**: Mobile-first design that works seamlessly on all devices
- **TypeScript**: Type-safe development with full TypeScript support
- **Optimized Performance**: Built with Next.js App Router for optimal performance
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel

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

1. **Build for production**:
   ```bash
   npm run build
   ```

2. **Start production server**:
   ```bash
   npm start
   ```

3. **Deploy to Vercel**:
   ```bash
   vercel --prod
   ```

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
- Minimal bundle size

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

- **Email**: wisdom.femi.kayode@example.com
- **GitHub**: https://github.com/wisdomfemikayode
- **LinkedIn**: https://linkedin.com/in/wisdomfemikayode

---

Built with ❤️ and lots of coffee ☕
