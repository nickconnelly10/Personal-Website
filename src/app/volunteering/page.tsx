import Image from 'next/image';
import Link from 'next/link';

export default function VolunteeringPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-6xl mx-auto container-padding section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-light text-gray-800 leading-tight mb-8">
            Volunteering & Community Development
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey in service reflects a deep commitment to health, community development, and helping others grow. Through various initiatives, I've worked to create positive impact both locally and globally.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="card mb-16 animate-slide-up">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">My Commitment to Service</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Service is at the core of who I am. Whether through medical missions, community organizing, or local volunteer work, I believe in the power of collective action to create meaningful change. My approach combines hands-on service with strategic community development to address both immediate needs and long-term growth.
            </p>
          </div>
        </div>

        {/* Main Initiatives */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Medical Mission Work */}
          <div className="card card-hover">
            <div className="aspect-video mb-6 overflow-hidden rounded-lg">
              <Image
                src="/images/volunteering-community/medical-mission-global-health.jpeg"
                alt="Medical Mission Work"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Medical Mission Work</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Participating in medical missions and global health initiatives to provide healthcare access to underserved communities. This work combines my passion for medicine with direct service to those who need it most, while learning about healthcare delivery in resource-limited settings.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Global Health</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Medical Service</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Community Outreach</span>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">Key Experiences:</h4>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Providing basic medical care in underserved communities</li>
                <li>• Health education and prevention programs</li>
                <li>• Working with local healthcare providers and organizations</li>
                <li>• Understanding healthcare challenges in different cultural contexts</li>
              </ul>
            </div>
          </div>

          {/* Community Service Initiatives */}
          <div className="card card-hover">
            <div className="aspect-video mb-6 overflow-hidden rounded-lg">
              <Image
                src="/images/volunteering-community/additional-community-service-work.jpeg"
                alt="Community Service Work"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Community Service Initiatives</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Leading and participating in various community service projects that address local needs. From organizing volunteer events to supporting community development programs, I focus on creating sustainable impact through collaborative efforts.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Local Impact</span>
              <span className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">Leadership</span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full">Community Building</span>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">Key Activities:</h4>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Organizing community health and wellness events</li>
                <li>• Coordinating volunteer teams for local projects</li>
                <li>• Supporting food security and housing initiatives</li>
                <li>• Mentoring and educational support programs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Values & Approach */}
        <div className="card mb-16 animate-slide-up">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">My Approach to Service</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Compassionate Service</h3>
              <p className="text-gray-600 text-sm">
                Approaching every interaction with empathy, understanding, and a genuine desire to help others thrive.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Collaborative Leadership</h3>
              <p className="text-gray-600 text-sm">
                Working alongside community members and organizations to create sustainable, locally-driven solutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Growth & Learning</h3>
              <p className="text-gray-600 text-sm">
                Continuously learning from experiences and communities to improve my ability to serve effectively.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Make a Difference Together?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always interested in connecting with others who share a passion for service and community development. Whether you're looking to collaborate on a project or simply want to share ideas about making a positive impact, I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn-primary inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Get In Touch
            </a>
            <a
              href="/projects"
              className="btn-secondary inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              View My Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
