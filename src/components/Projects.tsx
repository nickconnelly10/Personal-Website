import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const projects = [
    {
      title: "Health Platform",
      description: "Comprehensive health dashboard providing evidence-based protocols and scientific research for optimizing nutrition, lifestyle, and preventive care.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      category: "Health",
      link: "https://health.nicholasconnelly.box",
      github: "https://github.com/nickconnelly10/Health-protocols",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "DeFi Dashboard", 
      description: "Personal decentralized finance platform helping users navigate DeFi with step-by-step guides, wallet setup, and curated DeFi applications.",
      tech: ["React", "TypeScript", "Web3", "Ethereum"],
      category: "DeFi",
      link: "https://defi.nicholasconnelly.box",
      github: "https://github.com/nickconnelly10/defi.muscadine.box",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Muscadine Protocol",
      description: "Open-source health and financial self-sovereignty platform serving as the central hub connecting specialized health and DeFi services.",
      tech: ["React", "TypeScript", "Vercel", "Bitcoin"],
      category: "Open Source",
      link: "https://muscadine.box",
      github: "https://github.com/nickconnelly10/muscadine.box",
      color: "from-purple-500 to-pink-600"
    }
  ]

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

  const cardVariants = {
    hover: { y: -8 }
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-center mb-16">
            Featured Projects
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="group relative"
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div 
                className="card hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                variants={cardVariants}
                whileHover="hover"
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Category badge with enhanced styling */}
                <div className="mb-4">
                  <span className={`inline-block bg-gradient-to-r ${project.color} text-white text-sm font-medium px-4 py-2 rounded-full mb-4 shadow-lg`}>
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                {/* Tech stack with enhanced styling */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span 
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                {/* Action buttons with enhanced interactions */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.link}
                    className="btn-primary text-sm px-4 py-2 group/btn relative overflow-hidden"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">View Live</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-gold-700 to-gold-800 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </motion.a>
                  <motion.a
                    href={project.github}
                    className="btn-secondary text-sm px-4 py-2 group/btn relative overflow-hidden"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">GitHub</span>
                    <div className="absolute inset-0 bg-gray-200 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="https://github.com/nickconnelly10"
            className="btn-secondary group relative overflow-hidden"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View All Projects on GitHub</span>
            <div className="absolute inset-0 bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
