import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Hero: React.FC = () => {
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

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gold-200 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <motion.div 
        ref={ref}
        className="text-center max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Profile Image with enhanced animation */}
        <motion.div 
          className="mb-8"
          variants={itemVariants}
        >
          <motion.div 
            className="w-32 h-32 md:w-40 md:h-40 mx-auto bg-gradient-to-br from-gold-100 to-gold-200 rounded-full flex items-center justify-center mb-6 relative group"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-4xl md:text-5xl font-bold text-gold-700">NC</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-200 to-gold-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </motion.div>
        </motion.div>
        
        <motion.h1 
          className="text-hero gradient-text mb-8"
          variants={itemVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Nicholas Connelly
        </motion.h1>
        
        <motion.p 
          className="text-display text-gray-700 max-w-4xl mx-auto mb-12"
          variants={itemVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Dedicated to all forms of creation.<br />
          <span className="text-gold-600 font-semibold">Powered by coffee...</span>
        </motion.p>
        
        <motion.div 
          className="space-y-8"
          variants={itemVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              I build software to<br />
              <span className="gradient-text">empower others</span>
            </h2>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a 
              href="https://health.nicholasconnelly.box"
              className="btn-primary text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 group relative overflow-hidden shadow-lg hover:shadow-xl"
              target="_blank"
              rel="noopener noreferrer"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Health Platform
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-700 to-gold-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
            
            <motion.a 
              href="https://muscadine.box"
              className="btn-primary text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 group relative overflow-hidden shadow-lg hover:shadow-xl"
              target="_blank"
              rel="noopener noreferrer"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                DeFi Dashboard
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-700 to-gold-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
            
            <motion.a 
              href="https://nicholasconnelly.substack.com/"
              className="btn-secondary text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 group relative overflow-hidden shadow-md hover:shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Read Articles
              </span>
              <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
