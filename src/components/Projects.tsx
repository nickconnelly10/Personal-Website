import React from 'react'

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Health Platform",
      description: "Comprehensive health dashboard providing evidence-based protocols and scientific research for optimizing nutrition, lifestyle, and preventive care.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      category: "Health",
      link: "https://health.nicholasconnelly.box",
      github: "https://github.com/nickconnelly10/Health-protocols"
    },
    {
      title: "DeFi Dashboard", 
      description: "Personal decentralized finance platform helping users navigate DeFi with step-by-step guides, wallet setup, and curated DeFi applications.",
      tech: ["React", "TypeScript", "Web3", "Ethereum"],
      category: "DeFi",
      link: "https://defi.nicholasconnelly.box",
      github: "https://github.com/nickconnelly10/defi.muscadine.box"
    },
    {
      title: "Muscadine Protocol",
      description: "Open-source health and financial self-sovereignty platform serving as the central hub connecting specialized health and DeFi services.",
      tech: ["React", "TypeScript", "Vercel", "Bitcoin"],
      category: "Open Source",
      link: "https://muscadine.box",
      github: "https://github.com/nickconnelly10/muscadine.box"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title text-center mb-16">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">
                <span className="inline-block bg-gold-100 text-gold-800 text-sm font-medium px-3 py-1 rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
              </div>
              
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3">
                <a
                  href={project.link}
                  className="btn-primary text-sm px-4 py-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live
                </a>
                <a
                  href={project.github}
                  className="btn-secondary text-sm px-4 py-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="https://github.com/nickconnelly10"
            className="btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
