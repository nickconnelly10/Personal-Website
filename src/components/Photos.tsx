import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import LazyImage from './LazyImage'

const Photos: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const photos = [
    {
      src: "/images/IMG_0456.jpeg",
      alt: "The Nest - UGA Run Club group photo",
      title: "The Nest",
      description: "UGA Run Club I founded - Building community through running",
      category: "Leadership"
    },
    {
      src: "/images/IMG_2406.jpeg", 
      alt: "Community building and health promotion",
      title: "Community Building",
      description: "Promoting health and fitness through community engagement",
      category: "Community"
    },
    {
      src: "/images/IMG_4021.jpeg",
      alt: "Growing community and leadership",
      title: "Growing Community",
      description: "The Nest running club community continues to grow",
      category: "Community"
    },
    {
      src: "/images/IMG_4045.jpeg",
      alt: "Medical mission and global health",
      title: "Global Health Impact",
      description: "Medical mission work and global health initiatives",
      category: "Medicine"
    },
    {
      src: "/images/IMG_6209.jpeg",
      alt: "Personal photo of Nicholas Connelly",
      title: "About Me",
      description: "Building the future of health and technology",
      category: "Personal"
    },
    {
      src: "/images/20250306_162851_3B28E0.jpeg",
      alt: "Additional community work",
      title: "Community Service",
      description: "Additional community service and leadership activities",
      category: "Service"
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
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-center mb-16">
            Gallery
          </h2>
          <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12">
            Building communities, serving others, and creating impact through leadership and service
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {photos.map((photo, index) => (
            <motion.div 
              key={index} 
              className="group relative overflow-hidden rounded-lg"
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div 
                className="relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                variants={cardVariants}
                whileHover="hover"
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <LazyImage 
                  src={photo.src} 
                  alt={photo.alt}
                  className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                  <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-semibold mb-1">{photo.title}</h3>
                    <p className="text-sm opacity-90">{photo.description}</p>
                  </div>
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
