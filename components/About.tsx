'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Zap, Users } from 'lucide-react'

const skills = [
  { name: 'JavaScript/TypeScript', level: 95 },
  { name: 'React/Next.js', level: 92 },
  { name: 'Node.js/Express', level: 88 },
  { name: 'Python/Django', level: 85 },
  { name: 'AWS/Cloud', level: 80 },
  { name: 'PostgreSQL/MongoDB', level: 87 }
]

const features = [
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'Building end-to-end applications with modern frameworks and technologies'
  },
  {
    icon: Palette,
    title: 'System Architecture',
    description: 'Designing scalable and maintainable software architectures'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Optimizing applications for speed, scalability, and efficiency'
  },
  {
    icon: Users,
    title: 'Team Leadership',
    description: 'Leading development teams and mentoring junior developers'
  }
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm a passionate software engineer who loves building scalable applications 
            and solving complex technical challenges with innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start -mt-8"
          >
            <div className="relative -mt-4">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src="/images/About.jpg"
                  alt="Brian Kipkemoi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">👨‍💻</span>
              </div>
            </div>
          </motion.div>
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-3xl font-bold mb-8">Skills & Expertise</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-lg font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:col-span-1"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="glass p-6 rounded-2xl text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                  <feature.icon size={32} className="text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Personal Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass p-8 rounded-2xl max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed">
              "I'm passionate about building robust, scalable software solutions that solve real-world problems. 
              My expertise spans full-stack development, cloud architecture, and team leadership. 
              I believe in writing clean, maintainable code and creating systems that can grow with business needs."
            </p>
            <div className="mt-6">
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}