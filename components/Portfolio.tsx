'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Enterprise E-Commerce Platform',
    description: 'Architected and developed a scalable e-commerce platform serving 100K+ users with 99.9% uptime. Features include real-time inventory, payment processing, and comprehensive analytics dashboard.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Redis'],
    metrics: '100K+ Users • 99.9% Uptime',
    demo: '#',
    code: '#'
  },
  {
    id: 2,
    title: 'Real-Time Collaboration Suite',
    description: 'Built a comprehensive project management platform with real-time collaboration, video conferencing, and advanced reporting. Reduced project delivery time by 35% for client teams.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
    tags: ['Next.js', 'Socket.io', 'MongoDB', 'WebRTC'],
    metrics: '35% Faster Delivery • 50+ Teams',
    demo: '#',
    code: '#'
  },
  {
    id: 3,
    title: 'AI-Powered Analytics Platform',
    description: 'Developed an intelligent data analytics platform using machine learning to provide predictive insights. Processes 1M+ data points daily with sub-second query response times.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop',
    tags: ['Python', 'TensorFlow', 'FastAPI', 'React', 'BigQuery'],
    metrics: '1M+ Data Points • <1s Response',
    demo: '#',
    code: '#'
  },
  {
    id: 4,
    title: 'Microservices Infrastructure',
    description: 'Designed and implemented a cloud-native microservices architecture on AWS. Achieved 40% cost reduction while improving system reliability and deployment frequency.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop',
    tags: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitLab CI'],
    metrics: '40% Cost Reduction • 10x Deployments',
    demo: '#',
    code: '#'
  }
]

export default function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Featured</span> Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore my latest software engineering projects and technical solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative glass rounded-2xl overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                
                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  className="absolute inset-0 bg-primary/20 flex items-center justify-center"
                >
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-white/20 rounded-full backdrop-blur-sm"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a
                      href={project.code}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-white/20 rounded-full backdrop-blur-sm"
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                {project.metrics && (
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-primary font-semibold text-sm">{project.metrics}</p>
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}