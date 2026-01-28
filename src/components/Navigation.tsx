'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Writing', href: '#writing' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/Wisdom-Kayode' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/wisdom-femi-kayode-57bbb1380/' },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:wisewisdom832@gmail.com" }
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-neutral-900/95 backdrop-blur-sm shadow-sm border-b border-neutral-800' : 'bg-transparent'
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold text-white"
            >
              WFK
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  className={`text-neutral-300 hover:text-white transition-colors font-medium ${
                    scrolled ? 'text-neutral-300' : 'text-neutral-300'
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
              
              <div className="flex items-center gap-4 ml-8 pl-8 border-l border-neutral-700">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`text-neutral-400 hover:text-white transition-colors ${
                      scrolled ? 'text-neutral-400' : 'text-neutral-400'
                    }`}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg ${
                scrolled ? 'text-neutral-300' : 'text-neutral-300'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-16 left-0 right-0 z-40 bg-neutral-900 border-b border-neutral-800 md:hidden"
        >
          <div className="container py-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{ x: 5 }}
                  onClick={() => setIsOpen(false)}
                  className="text-neutral-300 hover:text-white transition-colors font-medium py-2"
                >
                  {item.label}
                </motion.a>
              ))}
              
              <div className="flex items-center gap-4 pt-4 border-t border-neutral-700">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.1 }}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}
