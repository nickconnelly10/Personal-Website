import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you are looking for does not exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white pt-28 container-padding">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="font-light text-gray-800 mb-4">Page not found</h1>
        <p className="text-gray-600 mb-8">That page does not exist. Return home or browse projects.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary text-sm">
            Home
          </Link>
          <Link href="/projects" className="btn-secondary text-sm">
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
