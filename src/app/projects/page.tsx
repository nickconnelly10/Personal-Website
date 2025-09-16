import Image from 'next/image';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-6xl mx-auto container-padding section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-light text-gray-800 leading-tight mb-8">
            Projects & Initiatives
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of my work exploring health, finance, and the nature of things through various projects and initiatives.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {/* Muscadine - DeFi */}
          <div className="card card-hover">
            <div className="aspect-square mb-6 overflow-hidden rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Muscadine</h3>
            <p className="text-gray-600 mb-4">
              Muscadine is a small business focused on Bitcoin, crypto security, and DeFi solutions, helping individuals and communities navigate the digital economy with confidence and resilience.
            </p>
            <a
              href="https://muscadine.box"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
            >
              View Platform →
            </a>
          </div>

          {/* Health Platform */}
          <div className="card card-hover">
            <div className="aspect-square mb-6 overflow-hidden rounded-lg">
              <Image
                src="/images/medical-mission-global-health.jpeg"
                alt="Health Platform"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Health Platform</h3>
            <p className="text-gray-600 mb-4">
              This site reflects my journey in health, medicine, and holistic living, where I share insights on physiology, wellness, and philosophy inspired by Stoicism, Christianity, and nature.
            </p>
            <a
              href="https://health.muscadine.box"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
            >
              View Platform →
            </a>
          </div>

          {/* NEST Run Club */}
          <div className="card card-hover">
            <div className="aspect-square mb-6 overflow-hidden rounded-lg">
              <Image
                src="/images/the-nest-run-club-group-photo.jpeg"
                alt="NEST Run Club"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">NEST Run Club</h3>
            <p className="text-gray-600 mb-4">
              The NEST Run Club is a student-led community at the University of Georgia that brings people together through weekly runs, promoting both the physical benefits of exercise while fostering friendship, consistency, and growth.
            </p>
            <a
              href="/nest"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
            >
              Learn More →
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
