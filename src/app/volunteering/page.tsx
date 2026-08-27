import type { Metadata } from "next";
import Image from 'next/image';
import { pageMetadata } from "../../lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Volunteering",
  description: "Medical missions, community service, and local volunteer work by Nicholas Connelly.",
  path: "/volunteering/",
});

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
              My volunteering and community development journey reflects a commitment to health, service, and growth. From serving on a medical mission in Peru to mentoring local students and organizing service events through NEST Run Club, I&apos;ve sought to combine meaningful service with long-term impact.
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
                Mobile clinics in Cusco villages—assisted dentists and physicians, took vitals, and taught preventive health and hygiene. Assisted in building community greenhouses, planting crops, and participating in local celebrations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">St. Mary&apos;s Hospital Volunteering (2025)</h3>
              <p className="text-gray-600 leading-relaxed">
                Central supply volunteer—restocked medical supplies across hospital floors to support patient care behind the scenes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Care Assistant (2024–present)</h3>
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
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/images/volunteering-community/community-service-project-1.jpeg"
                  alt="Medical Service Project"
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Youth & Camp Service */}
        <div className="card mb-16 animate-slide-up">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">Youth & Camp Service</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Lifeguard (2020–2022)</h3>
              <p className="text-gray-600 leading-relaxed">
                Pool lifeguard at a neighborhood pool. As my first job at 15 years old, I learned responsibility, safety, and supervision. Learned the basics of first aid and CPR, while being adaptive for emergencies.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Kesem UGA (2026–present)</h3>
              <p className="text-gray-600 leading-relaxed">
                Support for children whose parents have cancer—outings, birthday letters, fundraising ($1,000+), and counseling 17-year-olds at week-long camp.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Cannon Church Summer Camp (2023–2025)</h3>
              <p className="text-gray-600 leading-relaxed">
                Rec counselor for three summers—planned outdoor activities and led groups of 200+ children through games, competitions, and daily programming.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Frais Church Volunteering (2024)</h3>
              <p className="text-gray-600 leading-relaxed">
                Church setup and teardown, plus children&apos;s ministry during services—Bible stories and activities for younger kids.
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
                Co-founded the club and lead monthly service—food drives, meal prep with local churches, Athens Marathon volunteering, and community wellness events.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Dawg Day of Service & The Table Backpack Project (2023–present)</h3>
              <p className="text-gray-600 leading-relaxed">
                Semester service days—book donations for schools, children&apos;s science demos, cemetery restoration, and campus ministry outreach serving food and supplies in Athens.
              </p>
            </div>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/images/volunteering-community/marathon-volunteering.jpeg"
                  alt="Marathon Volunteering"
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/images/volunteering-community/community-service-project-2.jpeg"
                  alt="Community Service Project"
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 50vw"
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
                Mentor for a local high school student—academic guidance, accountability, and encouragement toward positive outlets like athletics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
