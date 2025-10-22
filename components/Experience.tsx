'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building } from 'lucide-react'

const experiences = [
  {
    title: 'Junior Software Engineer',
    company: 'TechCorp Solutions',
    location: 'Westlands, Kenya',
    period: '2024 - Present',
    description: 'Lead development of scalable microservices architecture serving 1M+ users. Mentored junior developers and implemented CI/CD pipelines.',
    technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL']
  },
  {
    title: 'Full Stack Developer',
    company: 'InnovateLab',
    location: 'Remote',
    period: '2024 - 2025',
    description: 'Built and maintained multiple client applications using modern web technologies. Improved application performance by 40%.',
    technologies: ['Next.js', 'Python', 'MongoDB', 'Redis', 'Kubernetes']
  },
  {
    title: 'Software Developer',
    company: 'BIKS SOFTWARES',
    location: 'Thika, Kenya',
    period: '2025 - Present',
    description: 'Developed MVP for fintech startup from ground up. Implemented secure payment processing and user authentication systems.',
    technologies: ['React', 'Express', 'MySQL', 'Stripe', 'JWT']
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-neutral-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Building innovative solutions across diverse industries and technologies
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl card-hover"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <div className="flex items-center space-x-4 text-gray-400 mb-3">
                    <div className="flex items-center space-x-2">
                      <Building size={16} />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-primary font-semibold">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}