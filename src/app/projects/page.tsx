import Image from 'next/image';

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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-slide-up">
            {/* Muscadine - DeFi */}
            <a
              href="https://muscadine.box"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="card card-hover cursor-pointer">
                <div className="aspect-square mb-6 overflow-hidden rounded-lg">
                  <Image
                    src="/images/muscadine/Bitcoin.svg.png"
                    alt="Muscadine Platform"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Muscadine</h3>
                <p className="text-gray-600 mb-4">
                  Muscadine is a small business focused on Bitcoin, crypto security, and DeFi solutions, helping individuals and communities navigate the digital economy with confidence and resilience.
                </p>
                <span className="text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium">
                  View Platform →
                </span>
              </div>
            </a>

            {/* Health Platform */}
            <a
              href="https://health.nicholasconnelly.box"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="card card-hover cursor-pointer">
                <div className="aspect-square mb-6 overflow-hidden rounded-lg">
                  <Image
                    src="/images/health/health-wellness-platform.jpeg"
                    alt="Health Platform"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Health Platform</h3>
                <p className="text-gray-600 mb-4">
                  This site reflects my journey in health, medicine, and holistic living. I also have a collection of reliable resources and protocols I use for my own health and wellbeing.
                </p>
                <span className="text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium">
                  View Platform →
                </span>
              </div>
            </a>

            {/* NEST Run Club */}
            <a
              href="/nest"
              className="block"
            >
              <div className="card card-hover cursor-pointer">
                <div className="aspect-square mb-6 overflow-hidden rounded-lg">
                  <Image
                    src="/images/nest/nestrunclubgroupphoto.jpeg"
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
                <span className="text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium">
                  Learn More →
                </span>
              </div>
            </a>

            {/* Volunteering */}
            <a
              href="/volunteering"
              className="block"
            >
              <div className="card card-hover cursor-pointer">
                <div className="aspect-square mb-6 overflow-hidden rounded-lg">
                  <Image
                    src="/images/volunteering-community/volunteering-activity-3.jpeg"
                    alt="Volunteering & Community Service"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover object-center"
                    style={{ objectPosition: 'center center' }}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Volunteering & Service</h3>
                <p className="text-gray-600 mb-4">
                  My commitment to service through medical missions, community development, and local volunteer work. Focused on creating sustainable impact through collaborative efforts and compassionate leadership.
                </p>
                <span className="text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium">
                  Learn More →
                </span>
              </div>
            </a>
          </div>


      </div>
    </div>
  );
}
