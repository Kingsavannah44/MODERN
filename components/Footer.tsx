'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Heart } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Kingsavannah44', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/Brian Kipkemoi', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/@kingsavannah44', label: 'Twitter' },
  ]

  return (
    <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">Brian</span>
              <span className="gradient-text ml-2">Kipkemoi</span>
            </h3>
            <p className="text-gray-400">
              Senior Software Engineer specializing in full-stack development, 
              cloud architecture, and scalable system design.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Projects', href: '#portfolio' },
                { name: 'Tech Stack', href: '#tech-stack' },
                { name: 'About', href: '#about' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 glass rounded-full hover:bg-primary/20 transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            © 2025 Brian Kipkemoi. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-gray-400 text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>and Next.js</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}