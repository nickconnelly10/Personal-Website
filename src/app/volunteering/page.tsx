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
                src="/images/volunteering-community/volunteering-activity-3.jpeg"
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
                src="/images/volunteering-community/volunteer-group-photo.jpeg"
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

        {/* Photo Gallery */}
        <div className="mb-16 animate-slide-up">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Volunteer Work in Action</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card">
              <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/images/volunteering-community/community-outreach-event-1.jpeg"
                  alt="Community Outreach Event"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Community Outreach</h3>
              <p className="text-gray-600 text-sm">Engaging with local communities through various outreach programs and events.</p>
            </div>

            <div className="card">
              <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/images/volunteering-community/volunteer-team-work.jpeg"
                  alt="Volunteer Team Collaboration"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Team Collaboration</h3>
              <p className="text-gray-600 text-sm">Working alongside dedicated volunteers to make a collective impact in our communities.</p>
            </div>

            <div className="card">
              <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/images/volunteering-community/community-service-project-1.jpeg"
                  alt="Community Service Project"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Service Projects</h3>
              <p className="text-gray-600 text-sm">Hands-on work on various community development and service initiatives.</p>
            </div>

            <div className="card">
              <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/images/volunteering-community/community-service-project-2.jpeg"
                  alt="Community Development Work"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Community Development</h3>
              <p className="text-gray-600 text-sm">Building sustainable solutions and supporting long-term community growth.</p>
            </div>

            <div className="card">
              <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/images/volunteering-community/volunteer-group-photo.jpeg"
                  alt="Volunteer Group"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Volunteer Community</h3>
              <p className="text-gray-600 text-sm">Building connections and fostering a strong sense of community among volunteers.</p>
            </div>

            <div className="card">
              <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/images/volunteering-community/volunteer-group-photo.jpeg"
                  alt="Additional Community Service"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Ongoing Impact</h3>
              <p className="text-gray-600 text-sm">Continuing to serve and make a positive difference in the lives of others.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
