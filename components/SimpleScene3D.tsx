'use client'

import { motion } from 'framer-motion'

export default function SimpleScene3D() {
  return (
    <div className="w-full h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        {/* Floating Elements */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-16 h-16 bg-primary/30 rounded-lg backdrop-blur-sm"
        />
        
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/2 right-1/3 w-12 h-12 bg-secondary/40 rounded-full backdrop-blur-sm"
        />
        
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/3 left-1/2 w-20 h-8 bg-primary/20 rounded-full backdrop-blur-sm"
        />
      </div>
      
      {/* Particle Effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeOut"
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: '100%',
            }}
          />
        ))}
      </div>
    </div>
  )
}