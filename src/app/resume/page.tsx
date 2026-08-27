import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Professional background and experience for Nicholas Connelly.",
  alternates: { canonical: "/resume/" },
};

const RESUME_URL = "/resume/nicholas-connelly-resume.pdf";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto container-padding section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-light text-gray-800 leading-tight mb-8">Resume</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional background and experience.
          </p>
        </div>

        <div className="card card-hover overflow-hidden animate-slide-up">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <h2 className="text-xl font-semibold text-gray-800">Nicholas Connelly - Resume</h2>
              <div className="flex space-x-3">
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                >
                  Open in New Tab
                </a>
                <a href={RESUME_URL} download="nicholas-connelly-resume.pdf" className="btn-secondary text-sm">
                  Download PDF
                </a>
              </div>
            </div>
          </div>
          <iframe
            src={`${RESUME_URL}#toolbar=1&navpanes=1&scrollbar=1`}
            className="w-full h-screen border-0"
            title="Nicholas Connelly Resume"
          />
        </div>
      </div>
    </div>
  );
}
