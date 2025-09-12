import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="text-center max-w-6xl mx-auto">
        {/* Profile Image Placeholder */}
        <div className="mb-8">
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto bg-gradient-to-br from-gold-100 to-gold-200 rounded-full flex items-center justify-center mb-6">
            <span className="text-4xl md:text-5xl font-bold text-gold-700">NC</span>
          </div>
        </div>
        
        <h1 className="text-hero gradient-text mb-8 animate-fade-in">
          Nicholas Connelly
        </h1>
        
        <p className="text-display text-gray-700 max-w-4xl mx-auto mb-12 animate-slide-up" style={{animationDelay: '0.2s'}}>
          Dedicated to all forms of creation.<br />
          Powered by coffee...
        </p>
        
        <div className="space-y-8 animate-slide-up" style={{animationDelay: '0.4s'}}>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              I build software to<br />
              <span className="gradient-text">empower others</span>
            </h2>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <a 
              href="https://health.nicholasconnelly.box"
              className="btn-primary text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Health Platform
            </a>
            <a 
              href="https://defi.nicholasconnelly.box"
              className="btn-primary text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6"
              target="_blank"
              rel="noopener noreferrer"
            >
              DeFi Dashboard
            </a>
            <a 
              href="https://nicholasconnelly.substack.com/"
              className="btn-secondary text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Articles
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
