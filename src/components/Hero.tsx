'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
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
      
      <div className="container relative z-10 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center max-w-5xl mx-auto px-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Wisdom Femi Kayode
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl md:text-3xl text-neutral-200 mb-8 font-medium leading-tight"
          >
            Product Developer & Community Builder
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-neutral-300 mb-12 max-w-3xl leading-relaxed mx-auto"
          >
            Crafting digital solutions that bridge technology and community. 
            Passionate about building products that empower people and foster meaningful connections.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#work"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 bg-neutral-800 text-white font-medium rounded-lg hover:bg-neutral-700 transition-colors border border-neutral-700"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Floating Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute top-8 right-8 z-20"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="relative group"
        >
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-neutral-600 shadow-lg backdrop-blur-sm bg-neutral-900/30">
            <Image
              src="/images/hero_photo-removebg-preview.png"
              alt="Wisdom Femi Kayode"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 rounded-full border-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      </motion.div>
    </section>
  )
}
