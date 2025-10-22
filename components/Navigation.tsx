'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Download, Mail } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#portfolio' },
    { name: 'Experience', href: '#experience' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-800 shadow-2xl' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center space-x-3"
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="relative w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg overflow-hidden"
            >
              <motion.div
                animate={{ 
                  boxShadow: [
                    '0 0 20px rgba(37, 99, 235, 0.3)',
                    '0 0 30px rgba(37, 99, 235, 0.6)',
                    '0 0 20px rgba(37, 99, 235, 0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-xl"
              />
              <div className="relative flex items-center justify-center">
                {/* Replace this img src with your logo path */}
                <img 
                  src="/images/logo.png" 
                  alt="BK Logo" 
                  className="w-8 h-8 object-contain"
                  onError={(e) => {
                    // Fallback to emoji if logo doesn't exist
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextElementSibling.style.display = 'block'
                  }}
                />
                <span className="text-white font-bold text-lg hidden">💻</span>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
                />
              </div>
            </motion.div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-white flex items-center space-x-2">
                <span>Brian Kipkemoi</span>
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="text-yellow-400"
                >
                  ⚡
                </motion.span>
              </div>
              <div className="text-xs text-gray-400 font-medium">Software Engineer</div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-gray-300 hover:text-white font-medium transition-all duration-200 rounded-lg hover:bg-white/5"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              <Mail size={16} />
              <span className="font-medium">Hire Me</span>
            </motion.a>
            
            <motion.a
              href="/brian-kipkemoi-resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg"
            >
              <Download size={16} />
              <span>Resume</span>
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ 
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0
          }}
          className="lg:hidden overflow-hidden border-t border-gray-800"
        >
          <div className="py-6 space-y-1">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ x: 5 }}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gray-300 hover:text-white font-medium transition-all rounded-lg hover:bg-white/5"
              >
                {item.name}
              </motion.a>
            ))}
            <div className="pt-4 space-y-3">
              <motion.a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-2 px-4 py-3 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                <Mail size={16} />
                <span>Hire Me</span>
              </motion.a>
              <motion.a
                href="/brian-kipkemoi-resume.pdf"
                download
                className="flex items-center space-x-2 px-4 py-3 bg-primary text-white font-semibold rounded-lg w-full"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}