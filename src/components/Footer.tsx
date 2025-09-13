import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Footer: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const linkVariants = {
    hover: { x: 5 }
  }

  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-600 rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold-500 rounded-full opacity-5 blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div 
          ref={ref}
          className="grid md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* About Section */}
          <motion.div 
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Nicholas Connelly
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Dedicated to all forms of creation. Building software, creating health solutions, and writing to make the world a little better.
            </p>
            <div className="flex space-x-4">
              {[
                { href: "https://github.com/nickconnelly10", label: "GitHub", icon: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" },
                { href: "https://www.linkedin.com/in/nicholas-connelly-8365722a4/", label: "LinkedIn", icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" },
                { href: "https://www.instagram.com/nickkconnelly/", label: "Instagram", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                { href: "https://twitter.com/nicklutk", label: "Twitter", icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
                { href: "https://nicholasconnelly.substack.com/", label: "Substack", icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" },
                { href: "mailto:nickconnelly10@gmail.com", label: "Email", icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold-600 transition-colors duration-300 group"
                  target={social.href.startsWith('mailto:') ? undefined : "_blank"}
                  rel={social.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                  variants={linkVariants}
                  whileHover="hover"
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Navigation */}
          <motion.div 
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h4 className="text-lg font-semibold mb-4 text-gold-400">Navigation</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "#projects", label: "Projects" },
                { href: "https://health.nicholasconnelly.box", label: "Health", external: true },
                { href: "https://defi.nicholasconnelly.box", label: "DeFi", external: true },
                { href: "#contact", label: "Contact" }
              ].map((link) => (
                <motion.li key={link.label}>
                  <motion.a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-200 relative group block"
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    variants={linkVariants}
                    whileHover="hover"
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  >
                    {link.label}
                    <span className="absolute left-0 top-1/2 w-0 h-0.5 bg-gold-600 group-hover:w-full transition-all duration-300 transform -translate-y-1/2"></span>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Connect */}
          <motion.div 
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h4 className="text-lg font-semibold mb-4 text-gold-400">Quick Links</h4>
            <div className="space-y-3">
              {[
                { href: "https://health.nicholasconnelly.box", label: "Health Platform", description: "Evidence-based health protocols" },
                { href: "https://defi.nicholasconnelly.box", label: "DeFi Dashboard", description: "Decentralized finance tools" },
                { href: "https://defi.muscadine.box", label: "Muscadine Protocol", description: "Open-source platform" },
                { href: "https://nicholasconnelly.substack.com/", label: "Writing", description: "Health & finance articles" }
              ].map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="block p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors duration-300 group"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={linkVariants}
                  whileHover="hover"
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <div className="font-medium text-white group-hover:text-gold-400 transition-colors duration-300">
                    {link.label}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    {link.description}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p>&copy; 2025 Nicholas Connelly. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
