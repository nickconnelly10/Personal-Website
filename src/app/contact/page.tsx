export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto container-padding section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-light text-gray-800 leading-tight mb-8">
            Contact
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm always excited to collaborate on new projects, discuss health technology,
            or simply connect with like-minded creators.
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
                href="https://linkedin.com/in/nicholasconnelly"
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
      </div>
    </div>
  );
}