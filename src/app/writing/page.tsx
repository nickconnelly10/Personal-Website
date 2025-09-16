import Link from 'next/link';
import SubstackArticles from '@/components/SubstackArticles';

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
        
        <div className="card animate-slide-up mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Latest Articles</h2>
          </div>
          
          <SubstackArticles />
          
          <div className="text-center mt-8">
            <a
              href="https://nicholasconnelly.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
              </svg>
              Read/Subscribe on Substack
            </a>
          </div>
        </div>


      </div>
    </div>
  );
}
