import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Nicholas Connelly</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Dedicated to all forms of creation. Building software, creating health solutions, and writing to make the world a little better.
            </p>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wide">Navigation</h4>
            <nav className="space-y-2">
              <Link href="/" className="block text-sm text-gray-300 hover:text-white transition-colors duration-200">
                Home
              </Link>
              <Link href="/projects" className="block text-sm text-gray-300 hover:text-white transition-colors duration-200">
                Projects
              </Link>
              <Link href="/resume" className="block text-sm text-gray-300 hover:text-white transition-colors duration-200">
                Resume
              </Link>
              <Link href="/writing" className="block text-sm text-gray-300 hover:text-white transition-colors duration-200">
                Writing
              </Link>
              <Link href="/contact" className="block text-sm text-gray-300 hover:text-white transition-colors duration-200">
                Contact
              </Link>
            </nav>
          </div>
          
          {/* Connect */}
          <div>
            <h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wide">Connect</h4>
            <div className="space-y-2">
              <a 
                href="https://github.com/nickconnelly10" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/nicholasconnelly" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a 
                href="https://nicholasconnelly.substack.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Substack
              </a>
              <a 
                href="https://instagram.com/nicholasconnelly" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Instagram
              </a>
              <a 
                href="mailto:nickconnelly10@gmail.com"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Email
              </a>
            </div>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wide">Resources</h4>
            <div className="space-y-2">
              <a 
                href="https://health.nicholasconnelly.box" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Health
              </a>
              <a 
                href="https://muscadine.box" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                DeFi - Muscadine
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Nicholas Connelly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;