import React from 'react'
import { motion } from 'framer-motion'

interface SkeletonLoaderProps {
  className?: string
  lines?: number
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ className = '', lines = 1 }) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <motion.div
          key={index}
          className="bg-gray-200 rounded h-4 mb-2"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  )
}

export default SkeletonLoader
