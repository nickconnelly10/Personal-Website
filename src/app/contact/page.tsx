export default function ConnectPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-gray-800 leading-tight mb-8">
            Let's connect
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm always excited to collaborate on new projects, discuss health technology,
            or simply connect with like-minded creators.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-medium text-gray-800 mb-6">Get in touch</h2>
            <div className="space-y-4">
              <a 
                href="mailto:nicholas@nicholasconnelly.box"
                className="block text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                nicholas@nicholasconnelly.box
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
          
          <div>
            <h2 className="text-2xl font-medium text-gray-800 mb-6">What I'm working on</h2>
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