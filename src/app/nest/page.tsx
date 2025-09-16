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
              src="/images/nestrunclubgroupphoto.jpeg"
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
                NEST Run Club is more than just a running group—it's a community dedicated to fostering growth, 
                connection, and wellness. We believe that physical activity is the foundation for personal 
                development and meaningful relationships.
              </p>
              <p>
                Through regular runs, wellness activities, and community events, NEST creates an environment 
                where individuals can push their limits, support each other, and achieve goals they never 
                thought possible.
              </p>
              <p>
                Whether you're a seasoned runner or just starting your fitness journey, NEST welcomes everyone 
                who shares our commitment to growth, health, and community.
              </p>
            </div>
          </div>

          <div className="animate-slide-up">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Mission</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Community Building</h3>
                  <p className="text-gray-600">Creating lasting friendships and support networks through shared experiences.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Wellness Focus</h3>
                  <p className="text-gray-600">Promoting holistic health through running, nutrition, and mental well-being.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Inclusive Environment</h3>
                  <p className="text-gray-600">Welcoming runners of all levels and backgrounds to join our community.</p>
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
                src="/images/growing-community-leadership.jpeg"
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
                src="/images/community-building-health-promotion.jpeg"
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
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Ready to Join NEST?
            </h2>
            <p className="text-gray-600 mb-8">
              Whether you're looking to start your running journey or take your fitness to the next level, 
              NEST Run Club is here to support you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="/contact"
                className="btn-primary"
              >
                Get In Touch
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
              <Link
                href="/"
                className="btn-secondary"
              >
                Back to Home
              </Link>
            </div>
            
            {/* Social Media Links */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow NEST Run Club</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.instagram.com/nestrunclub/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
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
