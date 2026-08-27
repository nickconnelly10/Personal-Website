import type { Metadata } from "next";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "NEST Run Club",
  description: "Student-led running community at the University of Georgia founded by Nicholas Connelly.",
  alternates: { canonical: "/nest/" },
};

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
              className="object-cover object-center md:object-[center_60%] lg:object-[center_65%] xl:object-[center_70%]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              priority
            />
          </div>
        </div>

        {/* About NEST */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-in">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">About NEST</h2>
            <div className="max-w-none text-gray-600 leading-relaxed space-y-4">
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
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Follow NEST Run Club</h2>
            <div className="flex flex-col sm:flex-row gap-4">
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
            <p className="text-sm text-gray-500 mt-4">
              Join our community on social media for updates, photos, and running activities!
            </p>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mb-16 animate-slide-up">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">NEST Run Club in Action</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card">
              <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/images/nest/nest-run-club-activity-1.jpeg"
                  alt="NEST Run Club Activity"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Group Activities</h3>
            </div>

            <div className="card">
              <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/images/nest/nest-run-club-activity-2.jpeg"
                  alt="NEST Run Club Huddle"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Team Spirit</h3>
            </div>

            <div className="card">
              <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/images/nest/nest-run-club-activity-3.jpeg"
                  alt="NEST Run Club Running"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Active Running</h3>
            </div>

            <div className="card">
              <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/images/nest/nestrunclubgroupphoto.jpeg"
                  alt="NEST Run Club Group Photo"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Community</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
