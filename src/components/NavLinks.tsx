"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
] as const;

function normalizePath(path: string) {
  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1);
  }
  return path || "/";
}

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname.startsWith(href);
}

type NavLinksProps = {
  variant: "desktop" | "mobile";
};

export default function NavLinks({ variant }: NavLinksProps) {
  const pathname = normalizePath(usePathname());

  if (variant === "desktop") {
    return (
      <div className="hidden md:flex space-x-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`nav-link ${isActive(pathname, link.href) ? "nav-link-active" : "text-gray-600"}`}
            aria-current={isActive(pathname, link.href) ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <details className="md:hidden relative group">
      <summary className="list-none p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-colors duration-200 cursor-pointer [&::-webkit-details-marker]:hidden">
        <span className="sr-only">Open menu</span>
        <svg
          className="w-6 h-6 group-open:hidden"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          className="w-6 h-6 hidden group-open:block"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </summary>

      <div className="absolute top-full right-0 mt-2 w-56 bg-white shadow-lg border border-gray-200 rounded-md">
        <div className="px-2 py-2 space-y-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-3 py-2 rounded-md transition-colors duration-200 ${
                isActive(pathname, link.href)
                  ? "text-gray-900 font-semibold bg-gray-50"
                  : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              }`}
              aria-current={isActive(pathname, link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </details>
  );
}
