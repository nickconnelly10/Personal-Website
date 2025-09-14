import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  const linkVariants = {
    hover: { scale: 1.05 }
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" }
  }

  const mobileLinkVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  }

  return (
    <motion.nav 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm' 
          : 'bg-white/90 backdrop-blur-md border-b border-gray-200'
      }`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 md:py-6 flex justify-between items-center">
        <motion.div 
          className="font-serif text-xl md:text-2xl font-bold text-gray-900"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <a
            href="/"
            className="hover:underline relative group"
          >
            Nicholas Connelly
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-600 group-hover:w-full transition-all duration-300"></span>
          </a>
        </motion.div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-8">
          {[
            { href: "/resume", label: "Resume" },
            { href: "https://health.nicholasconnelly.box", label: "Health", external: true },
            { href: "https://defi.nicholasconnelly.box", label: "DeFi", external: true },
            { href: "https://nicholasconnelly.substack.com/", label: "Writing", external: true },
            { href: "#contact", label: "Contact" }
          ].map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="text-gray-700 hover:text-gold-600 transition-colors duration-200 relative group"
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              variants={linkVariants}
              whileHover="hover"
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-600 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </div>

        {/* Mobile menu button */}
        <motion.button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
          onClick={() => setIsOpen((v) => !v)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.svg 
            className="h-6 w-6" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </motion.svg>
        </motion.button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur overflow-hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="max-w-6xl mx-auto px-4 py-3 space-y-3">
              {[
                { href: "/resume", label: "Resume" },
                { href: "https://health.nicholasconnelly.box", label: "Health", external: true },
                { href: "https://defi.nicholasconnelly.box", label: "DeFi", external: true },
                { href: "https://nicholasconnelly.substack.com/", label: "Writing", external: true },
                { href: "#contact", label: "Contact" }
              ].map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="block text-gray-700 hover:text-gold-600 transition-colors duration-200 py-2 relative group"
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  onClick={() => setIsOpen(false)}
                  variants={mobileLinkVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  whileHover={{ x: 5 }}
                  transition={{ delay: index * 0.1, duration: 0.3, ease: "easeOut" }}
                >
                  {link.label}
                  <span className="absolute left-0 top-1/2 w-0 h-0.5 bg-gold-600 group-hover:w-full transition-all duration-300 transform -translate-y-1/2"></span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation
