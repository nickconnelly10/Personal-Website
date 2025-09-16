'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 bg-white shadow-sm">
      <div className="w-full flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <div className="text-xl font-medium text-gray-800">
          <Link href="/">Nicholas Connelly</Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link 
            href="/" 
            className="nav-link text-gray-600"
          >
            Home
          </Link>
          <Link 
            href="/projects" 
            className="nav-link text-gray-600"
          >
            Projects
          </Link>
          <Link 
            href="/writing" 
            className="nav-link text-gray-600"
          >
            Writing
          </Link>
          <Link 
            href="/resume" 
            className="nav-link text-gray-600"
          >
            Resume
          </Link>
          <Link 
            href="/contact" 
            className="nav-link text-gray-600"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;