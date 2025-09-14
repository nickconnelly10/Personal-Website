import Image from 'next/image';

export default function GalleryPage() {
  const galleryImages = [
    {
      src: '/images/nicholas-connelly-personal-photo.jpeg',
      alt: 'Nicholas Connelly Personal Photo',
      title: 'Personal Portrait',
      description: 'A recent portrait showcasing my professional appearance.'
    },
    {
      src: '/images/the-nest-run-club-group-photo.jpeg',
      alt: 'The Nest Running Club Group Photo',
      title: 'The Nest Running Club',
      description: 'UGA\'s largest running community with 200+ members that I founded and lead.'
    },
    {
      src: '/images/medical-mission-global-health.jpeg',
      alt: 'Medical Mission in Peru',
      title: 'MEDLIFE Medical Mission',
      description: 'Volunteer medical mission in Cusco, Peru providing healthcare to underserved communities.'
    },
    {
      src: '/images/community-building-health-promotion.jpeg',
      alt: 'Community Health Promotion',
      title: 'Health Promotion Initiative',
      description: 'Community health promotion activities focused on preventive care and wellness education.'
    },
    {
      src: '/images/growing-community-leadership.jpeg',
      alt: 'Community Leadership',
      title: 'Community Leadership',
      description: 'Building and growing community initiatives that promote health and wellness.'
    },
    {
      src: '/images/additional-community-service-work.jpeg',
      alt: 'Additional Community Service',
      title: 'Community Service',
      description: 'Additional community service work supporting local health and wellness initiatives.'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-6xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-light text-gray-800 leading-tight mb-8">
            Community &
            <br />
            <span style={{ color: '#10b981' }}>Impact</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A visual journey through my work in community building, healthcare, and creating meaningful impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200 group">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{image.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gray-50 rounded-lg p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Impact by Numbers</h2>
            <p className="text-gray-600">Quantifying the positive change created through community initiatives and healthcare work.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-600 mb-2">200+</div>
              <div className="text-gray-600">Running Club Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-600 mb-2">7+</div>
              <div className="text-gray-600">Years in Healthcare</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-600 mb-2">3</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-600 mb-2">5+</div>
              <div className="text-gray-600">Software Projects</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Interested in collaborating?
          </h2>
          <p className="text-gray-600 mb-8">
            I&apos;m always excited to work on new projects that create positive impact in health and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gold-600 hover:bg-gold-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Get In Touch
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="https://github.com/nickconnelly10"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-lg border border-gray-300 transition-colors duration-200"
            >
              View Projects
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
