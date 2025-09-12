import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About: React.FC = () => {
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

  const paragraphVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div 
          ref={ref}
          className="card relative overflow-hidden group"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold-100 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold-200 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
          
          <motion.h2 
            className="section-title text-center mb-12 relative z-10"
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            The deeper story behind<br />
            <span className="gradient-text">the creator</span>
          </motion.h2>
          
          <motion.div 
            className="prose prose-lg max-w-none text-gray-700 space-y-6 relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {[
              "As I've made my way through medical school, I've come to realize just how powerful and beautiful creation is. Whether it'd be through building software, writing about health and finance, or coding, creation moves your thoughts in new ways. Building provides satisfaction and learning in a way consumption rarely matches. It's with this understanding that I've focused my attention on a vision of creation.",
              
              "From a professional perspective, I have knowledge in both Medicine and Computer Science. Given that health is fundamental to human flourishing, it's a powerful area to build in. Being involved in healthcare and medical education for several years now, I've come to understand how proper health protocols provide the backbone to innovation and creation. With this understanding, I hope to create new ways of democratizing health knowledge, providing novel ways to empower people.",
              
              "Combining my medical knowledge with a deep interest in computer science and programming gives me the full suite of tools to build impactful technology. I've worked on a number of projects, all built with the purpose of helping others. While I've had success building effective solutions alone, I'm looking to join a company and work on larger scale problems.",
              
              "Though the path forward is variable, my insistence on creation is not. Whatever the future looks like, I'll wake up every day with a desire to build. A desire to make the world a little bit better. A desire to make an impact. A desire to help another.",
              
              "I believe we're on this earth to make, to create, to build. If you feel the same, or you'd like to collaborate on a new project, feel free to contact me. I love taking initiative and I love working with those that do."
            ].map((paragraph, index) => (
              <motion.p
                key={index}
                className="leading-relaxed"
                variants={paragraphVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={index}
                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-12 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="#contact"
              className="btn-primary group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-700 to-gold-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
