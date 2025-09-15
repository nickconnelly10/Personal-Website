'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [showScrollArrow, setShowScrollArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setShowScrollArrow(scrollTop === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <div className='relative min-h-screen overflow-hidden'>
        <Image
          src='/images/nicholas-connelly-personal-photo.jpeg'
          alt='Nicholas Connelly'
          fill
          priority
          className='object-cover'
          sizes='100vw'
          quality={85}
        />
        
        <div className='absolute inset-0 bg-black bg-opacity-40'></div>
        
        <div className='flex flex-col justify-center min-h-screen relative w-full pt-20'>
          <div className='relative z-10 max-w-4xl mx-auto px-8 w-full'>
            <h1 className='text-4xl md:text-6xl font-light text-white leading-tight mb-8'>
              Nicholas Connelly
            </h1>
            <p className='text-xl text-gray-200 leading-relaxed max-w-2xl'>
              Building software to empower others and creating communities that inspire growth.
            </p>
          </div>
        </div>
        
        {showScrollArrow && (
          <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10'>
            <button
              onClick={scrollToProjects}
              className='text-white hover:text-gray-200 transition-colors duration-200'
            >
              <svg 
                className='w-6 h-6' 
                fill='none' 
                stroke='currentColor' 
                viewBox='0 0 24 24'
              >
                <path 
                  strokeLinecap='round' 
                  strokeLinejoin='round' 
                  strokeWidth={2} 
                  d='M19 14l-7 7m0 0l-7-7m7 7V3' 
                />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Projects Section */}
      <section id="projects" className='py-20 bg-white'>
        <div className='max-w-6xl mx-auto px-8'>
          <h2 className='text-3xl md:text-4xl font-light text-gray-800 mb-16 text-center'>
            Projects
          </h2>
          
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Health Platform */}
            <div className='bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200'>
              <h3 className='text-xl font-medium text-gray-800 mb-3'>Health Platform</h3>
              <p className='text-gray-600 text-sm leading-relaxed mb-4'>
                Evidence-based health protocols and resources designed to democratize health knowledge.
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                <span className='text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full'>React</span>
                <span className='text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full'>TypeScript</span>
                <span className='text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full'>Vite</span>
              </div>
              <a 
                href="https://health.nicholasconnelly.box" 
                target="_blank" 
                rel="noopener noreferrer"
                className='text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200 underline'
              >
                View Live →
              </a>
            </div>

            {/* DeFi Dashboard */}
            <div className='bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200'>
              <h3 className='text-xl font-medium text-gray-800 mb-3'>DeFi Dashboard</h3>
              <p className='text-gray-600 text-sm leading-relaxed mb-4'>
                Comprehensive DeFi analytics platform providing insights into yield farming and liquidity pools.
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                <span className='text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full'>React</span>
                <span className='text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full'>TypeScript</span>
                <span className='text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full'>Chart.js</span>
              </div>
              <a 
                href="https://muscadine.box" 
                target="_blank" 
                rel="noopener noreferrer"
                className='text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200 underline'
              >
                View Live →
              </a>
            </div>

            {/* Portfolio Site */}
            <div className='bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200'>
              <h3 className='text-xl font-medium text-gray-800 mb-3'>Portfolio Site</h3>
              <p className='text-gray-600 text-sm leading-relaxed mb-4'>
                Personal website showcasing projects, writing, and community involvement.
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                <span className='text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full'>Next.js</span>
                <span className='text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full'>TypeScript</span>
                <span className='text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full'>Tailwind</span>
              </div>
              <a 
                href="https://github.com/nickconnelly10" 
                target="_blank" 
                rel="noopener noreferrer"
                className='text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200 underline'
              >
                View Code →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-4xl mx-auto px-8'>
          <h2 className='text-3xl md:text-4xl font-light text-gray-800 mb-12 text-center'>
            About
          </h2>
          <div className='prose prose-lg max-w-none text-gray-600 leading-relaxed'>
            <p className='text-lg mb-6'>
              I'm a software developer passionate about creating technology that empowers people to take control of their health and financial well-being.
            </p>
            <p className='text-lg mb-6'>
              Through my work, I focus on building tools that make complex information accessible and actionable. I believe technology should serve humanity, not the other way around.
            </p>
            <p className='text-lg'>
              When I'm not coding, you'll find me running with The Nest Running Club or writing about health, technology, and personal development on my Substack.
            </p>
          </div>
          
          <div className='text-center mt-12'>
            <a
              href='/contact'
              className='inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 font-medium'
            >
              Get In Touch
              <svg className='ml-2 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}