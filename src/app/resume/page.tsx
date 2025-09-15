'use client';
import { useState } from 'react';

export default function ResumePage() {
  const [iframeError, setIframeError] = useState(false);

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto container-padding section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-light text-gray-800 leading-tight mb-8">
            Resume
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional background and experience in health technology and software development.
          </p>
        </div>
        
        <div className="card card-hover overflow-hidden animate-slide-up">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-800">Nicholas Connelly - Resume</h2>
              <div className="flex space-x-3">
                <a
                  href="/resume/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Open in New Tab
                </a>
                <a
                  href="/resume/resume.pdf"
                  download="Nicholas-Connelly-Resume.pdf"
                  className="btn-secondary text-sm"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download PDF
                </a>
              </div>
            </div>
          </div>
          <div className="p-0">
            {!iframeError ? (
              <iframe
                src="/resume/resume.pdf#toolbar=1&navpanes=1&scrollbar=1"
                className="w-full h-screen border-0"
                title="Nicholas Connelly Resume"
                onError={() => setIframeError(true)}
                onLoad={(e) => {
                  // Check if iframe failed to load
                  try {
                    const iframe = e.target as HTMLIFrameElement;
                    if (!iframe.contentDocument || iframe.contentDocument.location.href === 'about:blank') {
                      setIframeError(true);
                    }
                  } catch (error) {
                    setIframeError(true);
                  }
                }}
              />
            ) : (
              <div className="h-screen flex flex-col items-center justify-center bg-gray-50 text-center p-8">
                <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Unable to display PDF inline</h3>
                <p className="text-gray-600 mb-6 max-w-md">
                  Your browser doesn't support inline PDF viewing. Please use the buttons above to open or download the resume.
                </p>
                <a
                  href="/resume/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Open Resume in New Tab
                </a>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-16 text-center animate-fade-in">
          <h2 className="text-gray-800 mb-4">
            Ready to work together?
          </h2>
          <p className="text-gray-600 mb-8">
            I'm always excited to discuss new opportunities and collaborations.
          </p>
          <a
            href="/contact"
            className="btn-primary"
          >
            Get In Touch
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}