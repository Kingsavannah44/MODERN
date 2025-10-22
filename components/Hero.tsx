'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Suspense, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import SimpleScene3D from './SimpleScene3D'

const Scene3D = dynamic(() => import('./Scene3D'), {
  ssr: false,
  loading: () => <SimpleScene3D />
})

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <SimpleScene3D />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-white">Brian</span>{' '}
            <span className="gradient-text">Kipkemoi</span>
          </h1>
          <div className="text-2xl md:text-3xl font-semibold text-gray-300">
            Senior Software Engineer
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Passionate about building scalable, high-performance applications that solve real-world problems. 
          Experienced in full-stack development, cloud architecture, and leading engineering teams.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-block"
          >
            View Projects
          </motion.a>
          
          <motion.a
            href="/brian-kipkemoi-resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary inline-block"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}