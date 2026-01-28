'use client'

import { motion } from 'framer-motion'
import { Trophy, Users, Calendar, Award } from 'lucide-react'

const achievements = [
  {
    icon: <Trophy className="w-6 h-6" />,
    title: 'TechInspireSL',
    role: 'Community Lead',
    description: 'Leading a vibrant tech community that has reached almost 1,000 students through workshops, training sessions, and community events. Introducing students to technology and shifting their mindset from classroom grades to building actual ideas and products.',
    impact: '1,000+ students reached, 50+ mentors involved'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Code & Coffee',
    role: 'Founder & Organizer',
    description: 'Created a relaxed learning environment where developers gather to share knowledge, collaborate on projects, and build meaningful professional connections. Helping students build ideas by providing teams to turn concepts into actual products.',
    impact: '10+ businesses launched, weekly collaborative sessions'
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: 'Question Bank Initiative',
    role: 'Founder & Lead Developer',
    description: 'Student-led academic support and mentorship initiative helping mainly first-year students understand courses better and adjust to university life. Currently covering 200+ students through 50+ dedicated mentors.',
    impact: '200+ students supported, 50+ active mentors'
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Workshop & Summit Organizer',
    role: 'Event Coordinator',
    description: 'Organizing workshops, ideathons, and summits to foster innovation and entrepreneurship. Currently planning hackathons to expand the tech ecosystem and provide hands-on experience.',
    impact: '20+ workshops organized, planning first hackathon'
  }
]

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 bg-neutral-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Leadership & Community
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Building inclusive tech communities and fostering the next generation of developers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-neutral-800 rounded-xl p-8 border border-neutral-700 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">
                      {achievement.title}
                    </h3>
                    <span className="text-sm text-neutral-400 font-medium">
                      {achievement.role}
                    </span>
                  </div>
                  
                  <p className="text-neutral-300 mb-4 leading-relaxed">
                    {achievement.description}
                  </p>
                  
                  <div className="inline-flex items-center px-3 py-1 bg-neutral-800 text-neutral-300 text-sm rounded-full mb-6">
                    {achievement.impact}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-xl p-8 border border-neutral-200">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Community Impact
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">500+</div>
                <div className="text-neutral-600">Community Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">25+</div>
                <div className="text-neutral-600">Events Organized</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">30+</div>
                <div className="text-neutral-600">Mentorship Pairs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">1000+</div>
                <div className="text-neutral-600">Hours of Learning</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
