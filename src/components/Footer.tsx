'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, Instagram } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2024)

  useEffect(() => {
    // Function to get current year from system date
    const getCurrentYear = () => {
      const now = new Date()
      return now.getFullYear()
    }

    // Set the year when component mounts
    setCurrentYear(getCurrentYear())

    // Optional: Update year every minute to handle edge cases
    const interval = setInterval(() => {
      setCurrentYear(getCurrentYear())
    }, 60000) // Check every minute

    return () => clearInterval(interval)
  }, [])

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/Wisdom-Kayode' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/wisdom-femi-kayode-57bbb1380/' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/vdark_kay?igsh=MW95aWYwdjdrMDJtMA%3D%3D&utm_source=qr' }
  ]

  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold mb-2">Wisdom Femi Kayode</h3>
            <p className="text-neutral-400 mb-4">
              Product Developer & Community Builder
            </p>
            <p className="text-neutral-500 text-sm">
              Building bridges between technology and community
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-neutral-400 hover:text-white transition-colors"
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-neutral-800 mt-8 pt-8 text-center"
        >
          <p className="text-neutral-500 text-sm flex items-center justify-center gap-2">
            © {currentYear} Wisdom Femi Kayode. Built with 
            <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
            and lots of coffee.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
