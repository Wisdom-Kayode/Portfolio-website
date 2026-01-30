'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function Hero() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)

  return (
    <>
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Full-width background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero_photo-removebg-preview.png"
            alt="Wisdom Femi Kayode - Background"
            fill
            className="object-cover object-[center_30%]"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-neutral-950/70" />
        </div>
        
        <div className="container relative z-10 h-full flex items-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center max-w-6xl mx-auto px-4"
          >
            {/* Name with gradient and better typography */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4">
                <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent drop-shadow-2xl">
                  Wisdom
                </span>
                <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-accent via-blue-400 to-accent bg-clip-text text-transparent drop-shadow-2xl">
                  Femi Kayode
                </span>
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-accent to-transparent mx-auto rounded-full" />
            </motion.div>
            
            {/* Enhanced role with animation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6"
            >
              <h2 className="text-lg md:text-xl lg:text-2xl font-light text-neutral-200 tracking-wide">
                <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  Product Developer & Community Builder
                </span>
              </h2>
            </motion.div>
            
            {/* Enhanced description with better typography */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base md:text-lg lg:text-xl text-neutral-300 mb-10 max-w-4xl leading-relaxed font-light"
            >
              <span className="block mb-2">
                Crafting digital solutions that bridge
                <span className="text-accent font-semibold"> technology</span> and
                <span className="text-accent font-semibold"> community</span>
              </span>
              <span className="text-neutral-400">
                Passionate about building products that empower people and foster meaningful connections
              </span>
            </motion.p>
            
            {/* Enhanced CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.a
                href="#work"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-accent to-blue-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-accent transition-all duration-300 shadow-lg hover:shadow-xl shadow-accent/25"
              >
                <span className="relative z-10 flex items-center">
                  View My Work
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-blue-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity" />
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <span className="flex items-center">
                  Get In Touch
                </span>
                <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            </motion.div>

            {/* Animated decorative elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 2, delay: 1 }}
              className="absolute -top-20 -left-20 w-40 h-40 bg-accent rounded-full blur-3xl"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 2, delay: 1.2 }}
              className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-500 rounded-full blur-3xl"
            />
          </motion.div>
        </div>
        
        {/* Floating Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute top-24 right-8 z-20"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsImageModalOpen(true)}
            className="relative group focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-neutral-950 rounded-full"
            aria-label="View full profile picture"
          >
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-neutral-600 shadow-lg backdrop-blur-sm bg-neutral-900/30 cursor-pointer">
              <Image
                src="/images/hero_photo-removebg-preview.png"
                alt="Wisdom Femi Kayode"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 rounded-full bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
          </motion.button>
        </motion.div>
      </section>

      {/* Image Modal */}
      {isImageModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsImageModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-2xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-accent transition-colors focus:outline-none"
              aria-label="Close image view"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/images/hero_photo-removebg-preview.png"
                alt="Wisdom Femi Kayode - Full Size"
                width={800}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
