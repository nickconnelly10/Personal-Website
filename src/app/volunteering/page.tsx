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
              My volunteering and community development journey reflects a commitment to health, service, and growth. From serving on a medical mission in Peru to mentoring local students and organizing service events through NEST Run Club, I've sought to combine meaningful service with long-term impact.
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
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Caretaking (2025–present)</h3>
              <p className="text-gray-600 leading-relaxed">
                Providing direct patient care for a physically disabled individual, including assistance with mobility, personal hygiene, meal preparation, and daily health needs. This experience has strengthened my compassion, attention to detail, and dedication to supporting quality of life through hands-on care.
              </p>
            </div>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/images/volunteering-community/community-outreach-event-1.jpeg"
                  alt="Medical Mission Work"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/images/volunteering-community/community-service-project-1.jpeg"
                  alt="Medical Service Project"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
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
                Co-founded and lead service events, including Athens Marathon volunteering and ongoing community wellness activities. NEST has monthly community service events to contribute to local initiatives that support education, nutrition, and community development.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Dawg Day of Service & The Table Backpack Project (2023–2025)</h3>
              <p className="text-gray-600 leading-relaxed">
                I volunteer locally at UGA and oncampus ministry events to serve food and provide books for children and homeless in need in the Athens community.
              </p>
            </div>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/images/volunteering-community/marathon-volunteering.jpeg"
                  alt="Marathon Volunteering"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/images/volunteering-community/community-service-project-2.jpeg"
                  alt="Community Service Project"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
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



      </div>
    </div>
  );
}
