import Image from 'next/image';
import Link from 'next/link';

export default function NestPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-6xl mx-auto container-padding section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-light text-gray-800 leading-tight mb-8">
            NEST Run Club
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The NEST Run Club is a student-led community at the University of Georgia that brings people together through weekly runs, promoting both the physical benefits of exercise while fostering friendship, consistency, and growth.
          </p>
        </div>
        
        {/* Main Image */}
        <div className="mb-16 animate-slide-up">
          <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg">
            <Image
              src="/images/nest/nestrunclubgroupphoto.jpeg"
              alt="NEST Run Club Group Photo"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              priority
            />
          </div>
        </div>

        {/* About NEST */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-in">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">About NEST</h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                NEST Run Club is more than just a running group—it's a social club built on growth, connection, and wellness. We believe physical activity is the foundation for personal development and meaningful relationships, and we pair every run with 30 minutes of pre-run chat time to strengthen community bonds.
              </p>
              <p>
                Through weekly runs, wellness activities, monthly community volunteering events, and social gatherings, NEST creates an environment where individuals can challenge themselves, support one another, and make a positive impact both personally and locally.
              </p>
              <p>
                Whether you're a seasoned runner or just beginning your fitness journey, NEST welcomes everyone who shares our commitment to health, service, and community.
              </p>
            </div>
          </div>

          <div className="animate-slide-up">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Mission</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Promote Health & Growth</h3>
                  <p className="text-gray-600">Empower members to improve their physical and mental well-being through consistent running, wellness activities, and personal development.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Foster Connection & Community</h3>
                  <p className="text-gray-600">Build meaningful relationships through shared experiences, social gatherings, and pre-run chat time that strengthens bonds.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Serve & Give Back</h3>
                  <p className="text-gray-600">Create impact beyond the track with monthly community volunteering events that embody our commitment to service and collective growth.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Photos */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="animate-fade-in">
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image
                src="/images/nest/growing-community-leadership.jpeg"
                alt="NEST Community Leadership"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Community Leadership</h3>
            <p className="text-gray-600">Building leadership skills and fostering mentorship within our community.</p>
          </div>

          <div className="animate-slide-up">
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image
                src="/images/nest/nest-run-club-activity-1.jpeg"
                alt="NEST Health Promotion"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Health Promotion</h3>
            <p className="text-gray-600">Advocating for wellness and healthy living in our broader community.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in">
          <div className="card max-w-2xl mx-auto">
            
            {/* Social Media Links */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow NEST Run Club</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://linktr.ee/nestrun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.829 12.5l-.01.01L12 14.329l-1.819-1.819-.01-.01L9.171 12.5l.01-.01L12 9.671l2.819 2.819.01.01zm-1.819-8.829L12 3.671l1.819 1.819.01.01L15.829 6.5l-.01.01L12 10.171 8.171 6.5l-.01-.01L9.171 5.5l.01-.01L12 3.671zm0 14.329l1.819-1.819.01-.01L15.829 17.5l-.01.01L12 21.171 8.171 17.5l-.01-.01L9.171 16.5l.01.01L12 18.329z"/>
                  </svg>
                  Linktree
                </a>
                <a
                  href="https://www.instagram.com/nestrunclub/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                </a>
                <a
                  href="https://www.strava.com/clubs/nestrunclub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.599h4.172L10.463 0l-7.13 14.172h4.169"/>
                  </svg>
                  Strava
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-4 text-center">
                Join our community on social media for updates, photos, and running activities!
              </p>
              
              {/* Strava Activity Feed */}
              <div className="mt-8 flex justify-center">
                <iframe 
                  allowTransparency={true} 
                  frameBorder="0" 
                  height="160" 
                  scrolling="no" 
                  src="https://www.strava.com/clubs/1284036/latest-rides/d1fef7f441c5fc4894f0308226fa46da1465ff16?show_rides=false" 
                  width="300"
                  className="rounded-lg shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
