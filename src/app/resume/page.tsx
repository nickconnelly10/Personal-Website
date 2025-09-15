export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-gray-800 leading-tight mb-8">
            Resume
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional background and experience in health technology and software development.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-800">Nicholas Connelly - Resume</h2>
              <a
                href="/resume/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
              </a>
            </div>
          </div>
          <div className="p-0">
            <iframe
              src="/resume/resume.pdf"
              className="w-full h-screen border-0"
              title="Nicholas Connelly Resume"
            />
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-medium text-gray-800 mb-4">
            Ready to work together?
          </h2>
          <p className="text-gray-600 mb-8">
            I'm always excited to discuss new opportunities and collaborations.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors duration-200"
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