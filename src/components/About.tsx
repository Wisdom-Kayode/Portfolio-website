'use client'

import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Globe, Users, Code, Heart } from 'lucide-react'

const experiences = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'KL-YES Exchange Program',
    role: 'Cultural Exchange Student',
    location: 'Texas, USA',
    period: '2021 - 2022',
    description: 'Selected for the prestigious Kennedy-Lugar Youth Exchange and Study (KL-YES) program. Lived with a host family in Texas, attended American high school, and served as a cultural ambassador, sharing Sierra Leonean culture while embracing American values and educational systems.',
    highlights: [
      'Cultural ambassadorship and cross-cultural communication',
      'Academic excellence in American education system',
      'Community service and leadership development',
      'Building international networks and friendships'
    ]
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: 'AI Prompt Engineering',
    role: 'Certified Professional',
    location: 'ALx Africa',
    period: '2024',
    description: 'Completed comprehensive training in AI prompt engineering, learning advanced techniques for crafting effective prompts, understanding AI model capabilities, and implementing AI solutions in real-world applications.',
    highlights: [
      'Advanced prompt engineering techniques',
      'AI model understanding and optimization',
      'Practical AI implementation strategies',
      'Ethical AI usage and best practices'
    ]
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Computer Science Education',
    role: 'Student Developer',
    location: 'Current',
    period: '2024 - Present',
    description: 'Pursuing comprehensive education in computer science with focus on software development, product management, and community building. Combining technical expertise with leadership skills to create impactful digital solutions.',
    highlights: [
      'Full-stack web development with modern frameworks',
      'Product development and user experience design',
      'Community organizing and mentorship',
      'Technical writing and knowledge sharing'
    ]
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: 'Cybersecurity Fundamentals',
    role: 'Student',
    location: 'ALx Africa',
    period: '2024',
    description: 'Currently studying cybersecurity fundamentals, covering network security, ethical hacking, cryptography, and security best practices. Learning to identify vulnerabilities and implement robust security measures.',
    highlights: [
      'Network security and protocols',
      'Ethical hacking and penetration testing',
      'Cryptography and data protection',
      'Security best practices and compliance'
    ]
  }
]

const values = [
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Technical Excellence',
    description: 'Committed to writing clean, efficient code and staying current with emerging technologies.'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Community First',
    description: 'Believing in the power of collaborative learning and knowledge sharing within tech communities.'
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Purpose-Driven',
    description: 'Focused on building products and communities that create meaningful impact and solve real problems.'
  }
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-neutral-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            A journey spanning continents, cultures, and code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-neutral-800 rounded-xl p-8 border border-neutral-700"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-accent text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  {experience.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {experience.title}
                    </h3>
                    <span className="text-sm text-neutral-400 font-medium">
                      {experience.role}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-neutral-400 mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {experience.location}
                    </span>
                    <span>{experience.period}</span>
                  </div>
                </div>
              </div>

              <p className="text-neutral-300 mb-6 leading-relaxed">
                {experience.description}
              </p>

              <div className="space-y-2">
                {experience.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-neutral-300 text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Core Values
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-neutral-800 rounded-xl p-6 border border-neutral-700 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-xl p-8 border border-neutral-200 text-center"
        >
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">
            My Mission
          </h3>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            To bridge technology and community by creating products that empower people and fostering 
            environments where knowledge flows freely. I believe that the best solutions emerge when 
            diverse perspectives collaborate, and I'm committed to building both the tools and the 
            communities that enable this collaboration.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
