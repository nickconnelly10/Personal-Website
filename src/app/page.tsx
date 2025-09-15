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

  const scrollToAbout = () => {
    const element = document.getElementById('about');
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
          <div className='relative z-10 max-w-4xl mx-auto container-padding w-full'>
            <h1 className='font-light text-white leading-tight mb-8 animate-fade-in'>
              Nicholas Connelly
            </h1>
            <p className='text-xl text-gray-200 leading-relaxed max-w-2xl animate-slide-up'>
              Building software to empower others and creating communities that inspire growth.
            </p>
          </div>
        </div>
        
        {showScrollArrow && (
          <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10'>
            <button
              onClick={scrollToAbout}
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

      {/* About Section - Matching Ignas's exact structure */}
      <section id="about" className='section-padding bg-white'>
        <div className='max-w-4xl mx-auto container-padding'>
          <div className='prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-6 animate-fade-in'>
            <p className='text-lg'>
              Combining my passion for health technology with a deep interest in software development gives me the full suite of tools to build impactful solutions. I've worked on a number of projects, all built with the purpose of helping others take control of their health and financial well-being.
            </p>
            
            <p className='text-lg'>
              Though the path forward is variable, my insistence on creation is not. Whatever the future looks like, I'll wake up every day with a desire to build. A desire to make the world a little bit better. A desire to make an impact. A desire to help another.
            </p>
            
            <p className='text-lg'>
              I believe we're on this earth to make, to create, to build. If you feel the same, or you'd like to collaborate on a new project, feel free to contact me. I love taking initiative and I love working with those that do.
            </p>
          </div>
          
          <div className='text-center mt-12 animate-slide-up'>
            <a
              href='/contact'
              className='btn-primary'
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