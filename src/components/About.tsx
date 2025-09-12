import React from 'react'

const About: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="card">
          <h2 className="section-title text-center mb-12">
            The deeper story behind<br />
            the creator
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              As I've made my way through medical school, I've come to realize just how powerful and beautiful creation is. Whether it'd be through building software, writing about health and finance, or coding, creation moves your thoughts in new ways. Building provides satisfaction and learning in a way consumption rarely matches. It's with this understanding that I've focused my attention on a vision of creation.
            </p>
            
            <p>
              From a professional perspective, I have knowledge in both Medicine and Computer Science. Given that health is fundamental to human flourishing, it's a powerful area to build in. Being involved in healthcare and medical education for several years now, I've come to understand how proper health protocols provide the backbone to innovation and creation. With this understanding, I hope to create new ways of democratizing health knowledge, providing novel ways to empower people.
            </p>
            
            <p>
              Combining my medical knowledge with a deep interest in computer science and programming gives me the full suite of tools to build impactful technology. I've worked on a number of projects, all built with the purpose of helping others. While I've had success building effective solutions alone, I'm looking to join a company and work on larger scale problems.
            </p>
            
            <p>
              Though the path forward is variable, my insistence on creation is not. Whatever the future looks like, I'll wake up every day with a desire to build. A desire to make the world a little bit better. A desire to make an impact. A desire to help another.
            </p>
            
            <p>
              I believe we're on this earth to make, to create, to build. If you feel the same, or you'd like to collaborate on a new project, feel free to contact me. I love taking initiative and I love working with those that do.
            </p>
          </div>
          
          <div className="text-center mt-12">
            <a
              href="#contact"
              className="btn-primary"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
