'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Users, Cpu, MessageSquare, BookOpen, Building } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: 'Question Bank',
    role: 'Founder & Lead Developer — Question Bank Platform',
    description: 'A student-led academic support and mentorship initiative helping mainly first-year students understand their courses better and adjust smoothly to university life. Question Bank exists to help students grasp concepts, not just pass exams; provide a safe space where questions can be asked freely; offer clear explanations, examples, and guided practice; and reduce confusion and academic pressure in difficult modules. Beyond academics, it aims to shift students\' mindset from focusing only on grades to thinking about problem-solving, innovation, and entrepreneurship from an early stage. Currently serving 200+ students through 50+ mentors.',
    tech: ['Community Management', 'Mentorship', 'Academic Support', 'Student Development'],
    icon: <Cpu className="w-6 h-6" />,
    image: '/images/QuestionBank.jfif',
    links: {
      demo: '#',
      github: '#'
    }
  },
  {
    title: 'Digital Public Goods Initiative',
    role: 'Key Advocate & Workshop Facilitator — University Partnership',
    description: 'Leading advocate for Digital Public Goods (DPG) awareness and adoption through strategic university partnerships. Collaborated with government to organize and facilitate comprehensive workshops for university students, focusing on digital transformation, open-source solutions, and sustainable technology infrastructure. Played a pivotal role in bridging the gap between academic learning and real-world digital solutions, empowering the next generation of tech leaders with knowledge about inclusive and accessible technology for national development.',
    tech: ['Digital Advocacy', 'University Partnership', 'Workshop Facilitation', 'Student Development'],
    icon: <MessageSquare className="w-6 h-6" />,
    image: '/images/DPG.jpg',
    links: {
      demo: '#',
      github: '#'
    }
  },
  {
    title: 'TechInspire SL Leadership',
    role: 'Community Leader & Developer — Tech Organization',
    description: 'Active leader and developer at TechInspire SL, a pioneering technology organization dedicated to introducing technology to secondary school students, particularly in provincial areas of Sierra Leone. Contributing to community building, technical mentorship, and the development of educational tools and platforms like UniGuide to achieve organizational goals. Playing a key role in organizing school outreaches, workshops, computer classes, and creating tech opportunities for young students to discover and excel in technology.',
    tech: ['Community Leadership', 'Technical Mentorship', 'School Outreach', 'Educational Tools'],
    icon: <Building className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop&auto=format&q=80',
    links: {
      demo: '#',
      github: '#',
      company: 'https://www.linkedin.com/company/tech-inspire-sl/?originalSubdomain=sl'
    }
  },
  {
    title: 'Medium Writing & Thought Leadership',
    role: 'Writer & Content Creator — Digital Publication',
    description: 'Regular contributor on Medium, sharing insights on technology, personal development, work-life balance, and digital innovation. Writing articles that explore the intersection of technology and human experience, including topics like "Why Can\'t I Have Both?" (work-life balance) and "Ideas Are Not Rare. Implementation Is." (execution over ideation). Building a community of readers through thoughtful, actionable content that inspires and educates.',
    tech: ['Technical Writing', 'Content Strategy', 'Digital Publishing', 'Thought Leadership'],
    icon: <BookOpen className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop&auto=format&q=80',
    links: {
      demo: '#',
      github: '#'
    }
  },
  {
    title: 'MeLens',
    role: 'Founder & Lead Developer — MeLens Platform',
    description: 'A self-audit platform that helps individuals understand how their public digital footprint is perceived by real-world opportunities such as jobs, scholarships, fellowships, and summits. Instead of relying on questionnaires, MeLens allows users to submit their own social media handles—Instagram, LinkedIn, TikTok, Facebook, or WhatsApp—after explicitly consenting that the accounts belong to them. The platform analyzes publicly available profile signals to assess professionalism, consistency, tone, and potential risk factors, producing a clear, structured report on the impression their online presence creates.',
    tech: ['React', 'Node.js', 'MongoDB', 'Social Media Analysis'],
    icon: <Users className="w-6 h-6" />,
    image: '/images/melens.jpg',
    links: {
      demo: '#',
      github: '#'
    }
  },
  {
    title: 'TreeventX',
    role: 'Developer & Head of Communications — TreeventX Platform',
    description: 'An independent event management platform built primarily for Sierra Leone, designed as an all-in-one tools suite for creating, managing, promoting, and executing events digitally. Features include event creation & management, ticketing system with QR code generation, real-time data sync, AI-powered event promotions, and transparent pricing model. The platform offers a free forever plan for up to a set number of free events, bridging technology with local community engagement as a standalone solution.',
    tech: ['Next.js', 'TypeScript', 'AI Integration', 'Ticketing System'],
    icon: <MessageSquare className="w-6 h-6" />,
    image: '/images/Code & Coffee.jfif',
    links: {
      demo: '#',
      github: '#'
    }
  }
]

export default function SelectedWork() {
  return (
    <section id="work" className="py-20 bg-neutral-950">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Selected Work
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Projects that showcase my journey in product development and community building
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="h-full bg-neutral-900 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-all duration-300 hover:shadow-lg overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/10 to-transparent" />
                  </motion.div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-accent text-white rounded-lg flex items-center justify-center">
                      {project.icon}
                    </div>
                    <span className="text-sm text-neutral-400 font-medium">
                      {project.role}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-neutral-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-neutral-700 text-neutral-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.links.demo && project.links.demo !== '#' && (
                      <motion.a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center px-4 py-2 bg-accent text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </motion.a>
                    )}
                    {project.links.github && project.links.github !== '#' && (
                      <motion.a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center px-4 py-2 bg-neutral-700 text-white text-sm font-medium rounded-lg hover:bg-neutral-600 transition-colors"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </motion.a>
                    )}
                    {project.links.company && (
                      <motion.a
                        href={project.links.company}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center px-4 py-2 bg-neutral-700 text-white text-sm font-medium rounded-lg hover:bg-neutral-600 transition-colors"
                      >
                        <Building className="w-4 h-4 mr-2" />
                        Company
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
