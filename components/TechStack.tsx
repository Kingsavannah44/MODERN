'use client'

import { motion } from 'framer-motion'

const technologies = {
  frontend: [
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Tailwind CSS', icon: '🎨' }
  ],
  backend: [
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'Express', icon: '🚀' },
    { name: 'FastAPI', icon: '⚡' }
  ],
  database: [
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Redis', icon: '🔴' },
    { name: 'Prisma', icon: '💎' }
  ],
  cloud: [
    { name: 'AWS', icon: '☁️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Kubernetes', icon: '⚙️' },
    { name: 'Vercel', icon: '▲' }
  ]
}

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to build modern applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(technologies).map(([category, techs], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 capitalize gradient-text">
                {category}
              </h3>
              <div className="space-y-4">
                {techs.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg cursor-pointer"
                  >
                    <span className="text-2xl">{tech.icon}</span>
                    <span className="font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}