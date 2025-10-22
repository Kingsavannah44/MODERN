'use client'

import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'

const certifications = [
  {
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2025',
    credentialId: 'AWS-SAA-2023-001',
    link: '#'
  },
  {
    name: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    date: '2025',
    credentialId: 'GCP-PD-2023-002',
    link: '#'
  },
  {
    name: 'Certified Kubernetes Administrator',
    issuer: 'Cloud Native Computing Foundation',
    date: '2024',
    credentialId: 'CKA-2022-003',
    link: '#'
  },
  {
    name: 'MongoDB Certified Developer',
    issuer: 'MongoDB University',
    date: '2024',
    credentialId: 'MDB-DEV-2022-004',
    link: '#'
  }
]

export default function Certifications() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional certifications validating expertise in cloud technologies and development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-xl card-hover group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Award className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white group-hover:text-primary transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{cert.issuer}</p>
                  </div>
                </div>
                <motion.a
                  href={cert.link}
                  whileHover={{ scale: 1.1 }}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <ExternalLink size={16} className="text-gray-400 hover:text-primary" />
                </motion.a>
              </div>
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">ID: {cert.credentialId}</span>
                <span className="text-primary font-medium">{cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}