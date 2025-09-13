import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Photos: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const photos = [
    {
      src: "/images/nest-group-1.jpg",
      alt: "The Nest - UGA Run Club group photo at Wander mural",
      title: "The Nest",
      description: "UGA Run Club I founded - Group photo at the Wander mural",
      category: "Leadership"
    },
    {
      src: "/images/nest-niche.jpg", 
      alt: "The Nest - NICHE brand promotion event",
      title: "Community Building",
      description: "Promoting health and fitness through The Nest",
      category: "Community"
    },
    {
      src: "/images/nest-group-2.jpg",
      alt: "The Nest - Large group photo on campus",
      title: "Growing Community",
      description: "The Nest running club community continues to grow",
      category: "Community"
    },
    {
      src: "/images/medlife-cusco.jpg",
      alt: "Medical trip to Cusco, Peru with MEDLIFE",
      title: "Global Health Impact",
      description: "Medical mission trip to Cusco, Peru with MEDLIFE",
      category: "Medicine"
    },
    {
      src: "/images/personal-photo.jpg",
      alt: "Personal photo of Nicholas Connelly",
      title: "About Me",
      description: "Building the future of health and technology",
      category: "Personal"
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
    hover: { y: -8, scale: 1.02 }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-center mb-16">
            Beyond the Code
          </h2>
          <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12">
            Building communities, serving others, and creating impact through leadership and service
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {photos.map((photo, index) => (
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
                {/* Image */}
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img 
                    src={photo.src} 
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  {/* Category badge */}
                  <div className="mb-3">
                    <span className="inline-block bg-gradient-to-r from-gold-500 to-gold-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                      {photo.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300">
                    {photo.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {photo.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Photos
