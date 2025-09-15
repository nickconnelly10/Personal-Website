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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
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
              onClick={() => scrollToSection('about')}
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

      {/* About Section */}
      <section id="about" className='section-padding bg-white'>
        <div className='max-w-4xl mx-auto container-padding'>
          <div className='text-center mb-16 animate-fade-in'>
            <h2 className='font-light text-gray-800 leading-tight mb-8'>
              About Me
            </h2>
          </div>
          
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
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className='section-padding bg-gray-50'>
        <div className='max-w-6xl mx-auto container-padding'>
          <div className='text-center mb-16 animate-fade-in'>
            <h2 className='font-light text-gray-800 leading-tight mb-8'>
              Projects & Initiatives
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              A collection of my work in health technology, community building, and global health initiatives.
            </p>
          </div>
          
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up'>
            {/* Muscadine - DeFi */}
            <div className='card card-hover'>
              <div className='aspect-square mb-6 overflow-hidden rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center'>
                <svg className='w-16 h-16 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' />
                </svg>
              </div>
              <h3 className='text-xl font-semibold text-gray-800 mb-3'>Muscadine</h3>
              <p className='text-gray-600 mb-4'>
                DeFi analytics platform helping users navigate the decentralized finance ecosystem with data-driven insights.
              </p>
              <a
                href='https://muscadine.box'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium'
              >
                View Platform →
              </a>
            </div>

            {/* Health Platform */}
            <div className='card card-hover'>
              <div className='aspect-square mb-6 overflow-hidden rounded-lg'>
                <Image
                  src='/images/medical-mission-global-health.jpeg'
                  alt='Health Platform'
                  width={400}
                  height={400}
                  className='w-full h-full object-cover'
                />
              </div>
              <h3 className='text-xl font-semibold text-gray-800 mb-3'>Health Platform</h3>
              <p className='text-gray-600 mb-4'>
                Building technology solutions for health and wellness, leading medical missions, and personal health initiatives that empower individuals and communities.
              </p>
              <a
                href='https://health.muscadine.box'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium'
              >
                View Platform →
              </a>
            </div>

            {/* NEST Run Club */}
            <div className='card card-hover'>
              <div className='aspect-square mb-6 overflow-hidden rounded-lg'>
                <Image
                  src='/images/the-nest-run-club-group-photo.jpeg'
                  alt='NEST Run Club'
                  width={400}
                  height={400}
                  className='w-full h-full object-cover'
                />
              </div>
              <h3 className='text-xl font-semibold text-gray-800 mb-3'>NEST Run Club</h3>
              <p className='text-gray-600 mb-4'>
                Community building through running and wellness, creating spaces for people to grow, connect, and achieve their goals.
              </p>
              <a
                href='/nest'
                className='text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium'
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Substack Section */}
      <section id="substack" className='section-padding bg-white'>
        <div className='max-w-2xl mx-auto container-padding text-center'>
          <div className='mb-8 animate-fade-in'>
            <h2 className='font-light text-gray-800 leading-tight mb-4'>
              Read My Substack
            </h2>
          </div>
          
          <div className='animate-slide-up'>
            <a
              href='https://nicholasconnelly.substack.com'
              target='_blank'
              rel='noopener noreferrer'
              className='btn-primary inline-flex items-center'
            >
              <svg className='w-5 h-5 mr-2' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z'/>
              </svg>
              Read on Substack
            </a>
          </div>
        </div>
      </section>

      {/* Resume & Connect Section */}
      <section className='section-padding bg-gray-50'>
        <div className='max-w-4xl mx-auto container-padding'>
          <div className='grid md:grid-cols-2 gap-8 animate-slide-up'>
            {/* Resume */}
            <div className='card text-center'>
              <div className='mb-6'>
                <svg className='w-12 h-12 text-gray-600 mx-auto mb-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                </svg>
                <h3 className='text-xl font-semibold text-gray-800 mb-3'>Resume</h3>
                <p className='text-gray-600 mb-6'>
                  View my professional background and experience in health technology and software development.
                </p>
              </div>
              
              <a
                href='/resume'
                className='btn-primary'
              >
                <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                </svg>
                View Resume
              </a>
            </div>

            {/* Connect */}
            <div className='card text-center'>
              <div className='mb-6'>
                <svg className='w-12 h-12 text-gray-600 mx-auto mb-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' />
                </svg>
                <h3 className='text-xl font-semibold text-gray-800 mb-3'>Connect</h3>
                <p className='text-gray-600 mb-6'>
                  Ready to collaborate on new projects or discuss opportunities? Let's connect.
                </p>
              </div>
              
              <a
                href='/contact'
                className='btn-primary'
              >
                <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' />
                </svg>
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}