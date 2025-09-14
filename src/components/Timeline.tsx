import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Timeline: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const timelineItems = [
    {
      year: "2025",
      title: "Medical School & Development",
      description: "Continuing medical education while building health and DeFi platforms",
      type: "current"
    },
    {
      year: "2024",
      title: "Founded The Nest Running Club",
      description: "Created UGA's largest running community with 200+ members",
      type: "achievement"
    },
    {
      year: "2023",
      title: "MEDLIFE Medical Mission",
      description: "Volunteered in Cusco, Peru providing healthcare to underserved communities",
      type: "service"
    },
    {
      year: "2022",
      title: "Started Health Platform",
      description: "Began developing evidence-based health protocols and resources",
      type: "project"
    },
    {
      year: "2021",
      title: "University of Georgia",
      description: "Started undergraduate studies in pre-medicine and computer science",
      type: "education"
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
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'current': return 'bg-gold-500'
      case 'achievement': return 'bg-green-500'
      case 'service': return 'bg-blue-500'
      case 'project': return 'bg-purple-500'
      case 'education': return 'bg-indigo-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-center mb-16">
            My Journey
          </h2>
          <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12">
            Key milestones in my path toward creating meaningful impact in health and technology
          </p>
        </motion.div>
        
        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
          
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative flex items-start mb-8"
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <div className={`w-4 h-4 rounded-full ${getTypeColor(item.type)}`}></div>
              </div>
              
              {/* Content */}
              <div className="ml-6 flex-1">
                <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl font-bold text-gold-600 mr-4">
                      {item.year}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium text-white rounded-full ${getTypeColor(item.type)}`}>
                      {item.type.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Timeline
