'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, MapPin, Instagram } from 'lucide-react'

const contactInfo = [
  {
    icon: <Instagram className="w-6 h-6" />,
    label: 'Instagram',
    value: 'instagram.com/vdark_kay',
    href: 'https://www.instagram.com/vdark_kay?igsh=MW95aWYwdjdrMDJtMA%3D%3D&utm_source=qr'
  },
  {
    icon: <Github className="w-6 h-6" />,
    label: 'GitHub',
    value: 'github.com/Wisdom-Kayode',
    href: 'https://github.com/Wisdom-Kayode'
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/wisdom-femi-kayode-57bbb1380',
    href: 'https://www.linkedin.com/in/wisdom-femi-kayode-57bbb1380/'
  }
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-neutral-950">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            I'm always excited to collaborate on meaningful projects, share knowledge, 
            or discuss opportunities in product development and community building.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target={contact.label !== 'Email' ? '_blank' : undefined}
                    rel={contact.label !== 'Email' ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-4 p-4 bg-neutral-800 rounded-lg border border-neutral-700 hover:border-neutral-600 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-accent text-white rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                      {contact.icon}
                    </div>
                    <div>
                      <div className="text-sm text-neutral-400 mb-1">
                        {contact.label}
                      </div>
                      <div className="text-white font-medium group-hover:text-accent transition-colors">
                        {contact.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 p-6 bg-neutral-800 rounded-lg border border-neutral-700"
              >
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="font-medium text-white">Location</span>
                </div>
                <p className="text-neutral-300">
                  Based in Sierra Leone with global connections through the KLYES program. 
                  Open to remote collaborations and opportunities worldwide.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Build Something Together
              </h3>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-neutral-800 rounded-xl p-8 border border-neutral-700"
              >
                <h4 className="text-lg font-bold text-white mb-4">
                  I'm interested in:
                </h4>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-neutral-300">
                      Product development opportunities that solve real problems
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-neutral-300">
                      Community building and tech education initiatives
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-neutral-300">
                      Open source collaborations and knowledge sharing
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-neutral-300">
                      Speaking engagements and workshop opportunities
                    </span>
                  </li>
                </ul>

                <motion.a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=wisewisdom832@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center w-full justify-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Me a Message
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-6 text-center"
              >
                <p className="text-neutral-400 text-sm">
                  Response time: Usually within 24-48 hours
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
