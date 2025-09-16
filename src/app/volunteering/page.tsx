import Image from 'next/image';

export default function VolunteeringPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-6xl mx-auto container-padding section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-light text-gray-800 leading-tight mb-8">
            Volunteering & Community Development
          </h1>
        </div>

        {/* About */}
        <div className="card mb-16 animate-slide-up">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">About</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              My volunteering and community development journey reflects a commitment to health, service, and growth. From serving on a medical mission in Peru to mentoring local students and organizing service events through NEST Run Club, I've sought to combine meaningful service with long-term impact. For me, giving back is not just about time—it's about building healthier communities and helping others grow.
            </p>
          </div>
        </div>

        {/* Medical & Health Service */}
        <div className="card mb-16 animate-slide-up">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">Medical & Health Service</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">UGA MedLife Peru Mission Trip (2025)</h3>
              <p className="text-gray-600 leading-relaxed">
                Assisted in building community greenhouses, planting crops, and participating in local celebrations. Shadowed dentists, doctors, and nurses while taking vitals, supporting patient care, and educating the community on wellness.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">St. Mary's Hospital Volunteering (2025–present)</h3>
              <p className="text-gray-600 leading-relaxed">
                Supporting patient care through central supply and hospital service.
              </p>
            </div>
          </div>
        </div>

        {/* Local Community Engagement */}
        <div className="card mb-16 animate-slide-up">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">Local Community Engagement</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">NEST Run Club (2024–present)</h3>
              <p className="text-gray-600 leading-relaxed">
                Co-founded and lead service events, including Athens Marathon volunteering and ongoing community wellness activities.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Dawg Day of Service & The Table Backpack Project (2023–2025)</h3>
              <p className="text-gray-600 leading-relaxed">
                Contributed to local initiatives that support education, nutrition, and community development.
              </p>
            </div>
          </div>
        </div>

        {/* Mentorship & Leadership */}
        <div className="card mb-16 animate-slide-up">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">Mentorship & Leadership</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Clarke County Mentorship Program (2025–present)</h3>
              <p className="text-gray-600 leading-relaxed">
                Mentor to a local high school student, providing guidance and support in academics and personal growth.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Leadership Through NEST Run Club</h3>
              <p className="text-gray-600 leading-relaxed">
                Creating an inclusive community that emphasizes health, consistency, and social connection, with regular volunteering tied into wellness.
              </p>
            </div>
          </div>
        </div>

        {/* Core Value */}
        <div className="card mb-16 animate-slide-up">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Core Value</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              At the heart of everything I do is a simple value: helping others grow—physically, financially, and spiritually—while living in harmony with nature and truth.
            </p>
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
                  src="/images/volunteering-community/volunteering-activity-3.jpeg"
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
                  src="/images/volunteering-community/community-service-project-2.jpeg"
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
