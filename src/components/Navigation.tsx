import React, { useState } from 'react'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 md:py-6 flex justify-between items-center">
        <div className="font-serif text-xl md:text-2xl font-bold text-gray-900">
          <a
            href="/"
            className="hover:underline"
          >
            Nicholas Connelly
          </a>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#projects"
            className="text-gray-700 hover:text-gold-600 transition-colors duration-200"
          >
            Projects
          </a>
          <a
            href="https://health.nicholasconnelly.box"
            className="text-gray-700 hover:text-gold-600 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Health
          </a>
          <a
            href="https://defi.nicholasconnelly.box"
            className="text-gray-700 hover:text-gold-600 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            DeFi
          </a>
          <a
            href="https://nicholasconnelly.substack.com/"
            className="text-gray-700 hover:text-gold-600 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Writing
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-gold-600 transition-colors duration-200"
          >
            Contact
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
          onClick={() => setIsOpen((v) => !v)}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-3 space-y-3">
            <a
              href="#projects"
              className="block text-gray-700 hover:text-gold-600 transition-colors duration-200 py-2"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="https://health.nicholasconnelly.box"
              className="block text-gray-700 hover:text-gold-600 transition-colors duration-200 py-2"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Health
            </a>
            <a
              href="https://defi.nicholasconnelly.box"
              className="block text-gray-700 hover:text-gold-600 transition-colors duration-200 py-2"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              DeFi
            </a>
            <a
              href="https://nicholasconnelly.substack.com/"
              className="block text-gray-700 hover:text-gold-600 transition-colors duration-200 py-2"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Writing
            </a>
            <a
              href="#contact"
              className="block text-gray-700 hover:text-gold-600 transition-colors duration-200 py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
