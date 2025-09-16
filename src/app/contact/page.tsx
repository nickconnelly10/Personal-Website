export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto container-padding section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-light text-gray-800 leading-tight mb-8">
            Contact
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether it's health, finance, or philosophy, I enjoy connecting with others who share a passion for growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 animate-slide-up">
          <div className="card">
            <h2 className="text-gray-800 mb-6">Get in touch</h2>
            <div className="space-y-4">
              <a 
                href="mailto:nickconnelly10@gmail.com"
                className="block text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                nickconnelly10@gmail.com
              </a>
              <a 
                href="https://www.linkedin.com/in/nicholas-connelly"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/nickconnelly10"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                GitHub
              </a>
              <a 
                href="https://nicholasconnelly.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                Substack
              </a>
              <a 
                href="https://instagram.com/nicholasconnelly"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                Instagram
              </a>
            </div>
          </div>
          
          <div className="card">
            <h2 className="text-gray-800 mb-6">What I'm working on</h2>
            <div className="space-y-4 text-gray-600">
              <p>• Building health technology platforms</p>
              <p>• Creating DeFi analytics tools</p>
              <p>• Leading community initiatives</p>
              <p>• Writing about health and technology</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 animate-slide-up">
          <div className="card">
            <h2 className="text-gray-800 mb-6">My Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Health & Wellness</h3>
                <a 
                  href="https://health.nicholasconnelly.box" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-gray-800 transition-colors duration-200 mb-2"
                >
                  Health Dashboard
                </a>
                <p className="text-sm text-gray-500">Personal health tracking and wellness resources</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">DeFi & Analytics</h3>
                <a 
                  href="https://muscadine.box" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-gray-800 transition-colors duration-200 mb-2"
                >
                  Muscadine DeFi
                </a>
                <p className="text-sm text-gray-500">Decentralized finance analytics and tools</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}