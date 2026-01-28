'use client'

import { motion } from 'framer-motion'
import { BookOpen, ArrowRight, Calendar, Clock } from 'lucide-react'

const articles = [
  {
    title: 'WHY CAN\'T I HAVE BOTH?',
    excerpt: 'There\'s a quiet belief in our society, one so old that we rarely question it, that you cannot truly have a life of your own while striving to be excellent at what you do. This piece challenges that assumption and explores why balance is no longer optional, but necessary in today\'s world.',
    readTime: '4 min read',
    date: 'January 2026',
    url: 'https://medium.com/@wisdomfemikayode/why-cant-i-have-both',
    featured: true
  },
  {
    title: 'IDEAS ARE NOT RARE. IMPLEMENTATION IS.',
    excerpt: 'Nobody stole your idea. You abandoned it. This article explores the uncomfortable truth about ideas versus execution, using the fascinating example of how needles evolved independently across different continents with the same design.',
    readTime: '3 min read',
    date: 'January 2026',
    url: 'https://medium.com/@wisdomfemikayode/ideas-are-not-rare-implementation-is',
    featured: false
  }
]

export default function Writing() {
  return (
    <section id="writing" className="py-20 bg-neutral-950">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Writing & Thoughts
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Sharing insights on technology, community building, and product development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ x: 5 }}
              className={`mb-8 ${article.featured ? 'bg-neutral-900 rounded-xl p-8 border border-neutral-800' : ''}`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  {article.featured && (
                    <div className="inline-flex items-center px-3 py-1 bg-accent text-white text-sm rounded-full mb-4">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Featured
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-3 hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-neutral-300 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-neutral-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </div>
                    </div>
                    
                    <motion.a
                      href={article.url}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center text-accent hover:text-blue-700 font-medium transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <motion.a
              href="https://medium.com/@wisdomfemikayode"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-neutral-900 text-white font-medium rounded-lg hover:bg-neutral-800 transition-colors"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              View All Articles on Medium
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
