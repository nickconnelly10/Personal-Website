import Image from 'next/image';

export default function GalleryPage() {
  const galleryImages = [
    {
      src: '/images/nicholas-connelly-personal-photo.jpeg',
      alt: 'Nicholas Connelly',
      title: 'Personal Photo',
      description: 'Professional headshot'
    },
    {
      src: '/images/the-nest-run-club-group-photo.jpeg',
      alt: 'The Nest Running Club',
      title: 'The Nest Running Club',
      description: 'Community building through fitness'
    },
    {
      src: '/images/medical-mission-global-health.jpeg',
      alt: 'Medical Mission',
      title: 'Medical Mission',
      description: 'Global health initiatives'
    },
    {
      src: '/images/community-building-health-promotion.jpeg',
      alt: 'Community Health',
      title: 'Community Health',
      description: 'Health promotion and education'
    },
    {
      src: '/images/growing-community-leadership.jpeg',
      alt: 'Community Leadership',
      title: 'Community Leadership',
      description: 'Building and growing communities'
    },
    {
      src: '/images/additional-community-service-work.jpeg',
      alt: 'Community Service',
      title: 'Community Service',
      description: 'Additional community initiatives'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-6xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-gray-800 leading-tight mb-8">
            Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of moments from my community work and personal journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200 group">
              <div className="aspect-w-4 aspect-h-3 relative overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">{image.title}</h3>
                <p className="text-gray-600 text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-medium text-gray-800 mb-4">
            Interested in collaborating?
          </h2>
          <p className="text-gray-600 mb-8">
            I'm always excited to work on new projects that create positive impact in health and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Get In Touch
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
            <a
              href="https://github.com/nickconnelly10"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-50 text-gray-900 font-medium rounded-lg border border-gray-300 transition-colors duration-200"
            >
              View Projects
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}