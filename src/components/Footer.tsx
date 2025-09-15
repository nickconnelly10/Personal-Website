import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">Nicholas Connelly</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Building software to empower others and creating communities that inspire growth.
            </p>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium text-gray-800 mb-4 uppercase tracking-wide">Navigation</h4>
            <nav className="space-y-2">
              <Link href="/#projects" className="block text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200">
                Projects
              </Link>
              <Link href="/resume" className="block text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200">
                Resume
              </Link>
              <Link href="/contact" className="block text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200">
                Connect
              </Link>
            </nav>
          </div>
          
          {/* Social */}
          <div>
            <h4 className="text-sm font-medium text-gray-800 mb-4 uppercase tracking-wide">Connect</h4>
            <div className="space-y-2">
              <a 
                href="https://linkedin.com/in/nicholasconnelly" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/nickconnelly10" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                GitHub
              </a>
              <a 
                href="https://instagram.com/nicholasconnelly" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                Instagram
              </a>
              <a 
                href="mailto:nicholas@nicholasconnelly.box"
                className="block text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                Email
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Nicholas Connelly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;