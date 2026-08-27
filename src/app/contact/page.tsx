import type { Metadata } from "next";
import { pageMetadata } from "../../lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Get in touch with Nicholas Connelly.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto container-padding section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-light text-gray-800 leading-tight mb-8">
            Contact
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether it&apos;s health, finance, or anything else in between, I enjoy connecting with others.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto animate-slide-up">
          <div className="card">
            <h2 className="text-gray-800 mb-6">Get in touch</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href="mailto:nickconnelly10@gmail.com"
                className="flex items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200 group"
              >
                <svg className="w-5 h-5 text-gray-600 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-800 group-hover:text-blue-600 transition-colors duration-200 font-medium text-sm truncate">nickconnelly10@gmail.com</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/nicholas-connelly"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200 group"
                aria-label="LinkedIn (opens in new tab)"
              >
                <svg className="w-5 h-5 text-blue-600 mr-3 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-gray-800 group-hover:text-blue-600 transition-colors duration-200 font-medium">LinkedIn</span>
              </a>
              
              <a 
                href="https://nicholasconnelly.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors duration-200 group"
                aria-label="Substack (opens in new tab)"
              >
                <svg className="w-5 h-5 text-orange-600 mr-3 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
                </svg>
                <span className="text-gray-800 group-hover:text-orange-600 transition-colors duration-200 font-medium">Substack</span>
              </a>
              
              <a 
                href="https://github.com/nickconnelly10"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200 group"
                aria-label="GitHub (opens in new tab)"
              >
                <svg className="w-5 h-5 text-gray-800 mr-3 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-gray-800 group-hover:text-gray-600 transition-colors duration-200 font-medium">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
