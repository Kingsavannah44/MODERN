'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'shadsbrian@gmail.com',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      alert('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Error sending message:', error)
      alert('Failed to send message. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'shadsbrian@gmail.com',
      href: 'mailto:shadsbrian@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+254 715 970-249',
      href: 'tel:715 970-249'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'THIKA, KENYA',
      href: '#'
    }
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to build your next software solution? Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6">Let's Connect</h3>
              <p className="text-gray-400 text-lg mb-8">
                I'm always excited to work on challenging projects and collaborate with 
                innovative teams. Drop me a message and let's discuss your technical needs.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 glass p-4 rounded-xl"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <info.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{info.title}</h4>
                    <p className="text-gray-400">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your technical requirements..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary hover:bg-primary/80 text-white font-semibold py-3 px-6 rounded-lg transition-all flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}