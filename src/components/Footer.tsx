import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Nicholas Connelly</h3>
            <p className="text-gray-300 mb-6">
              Dedicated to all forms of creation. Building software, creating health solutions, and writing to make the world a little better.
            </p>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a></li>
              <li><a href="https://health.nicholasconnelly.box" className="text-gray-300 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Health</a></li>
              <li><a href="https://defi.nicholasconnelly.box" className="text-gray-300 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">DeFi</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              <a 
                href="https://github.com/nickconnelly10" 
                className="block text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a 
                href="https://twitter.com/nicklutk" 
                className="block text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a 
                href="https://nicholasconnelly.substack.com/" 
                className="block text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Substack
              </a>
              <a 
                href="mailto:nickconnelly10@gmail.com" 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Nicholas Connelly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
