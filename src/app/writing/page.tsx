import Link from 'next/link';

export default function WritingPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto container-padding section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-light text-gray-800 leading-tight mb-8">
            Writing & Thoughts
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Exploring health, finance, and the nature of things through writing and reflection.
          </p>
        </div>
        
        <div className="card text-center animate-slide-up mb-16">
          <div className="mb-8">
            <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Read My Latest Articles</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              I write about health, finance, philosophy, and the intersection of these areas with personal growth and nature.
            </p>
          </div>
          
          <a
            href="https://nicholasconnelly.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
            </svg>
            Read on Substack
          </a>
        </div>


        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="card max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 mb-8">
              Subscribe to my Substack to receive new articles directly in your inbox and join the conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://nicholasconnelly.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
                </svg>
                Subscribe on Substack
              </a>
              <Link
                href="/"
                className="btn-secondary"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
