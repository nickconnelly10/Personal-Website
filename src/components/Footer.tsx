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
              Exploring health, finance, and the nature of things
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
              <Link href="/writing" className="block text-sm text-gray-300 hover:text-white transition-colors duration-200">
                Writing
              </Link>
              <Link href="/resume" className="block text-sm text-gray-300 hover:text-white transition-colors duration-200">
                Resume
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
                href="/contact"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Contact Me
              </a>
              <a 
                href="https://www.linkedin.com/in/nicholas-connelly" 
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
            </div>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wide">Resources</h4>
            <div className="space-y-2">
              <a 
                href="https://muscadine.box" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Muscadine
              </a>
              <a 
                href="https://health.nicholasconnelly.box" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Health & Wellness
              </a>
              <a 
                href="/nest" 
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                NEST Run Club
              </a>
              <a 
                href="/volunteering" 
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Volunteering & Community
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