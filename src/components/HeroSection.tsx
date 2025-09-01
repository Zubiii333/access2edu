'use client'

import React from 'react'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="relative bg-gray-50 h-[80vh] flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-65 items-center">
          {/* Left Column - Hero Image */}
          <div className="relative order-1 lg:order-1 h-[400px] flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center">
              <img 
                src="/Hero-A2E.svg" 
                alt="Access to Education Hero Image" 
                className="w-full h-full max-w-xl object-contain scale-180"
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
                      <div className="space-y-8 order-2 lg:order-2">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-800 leading-tight comfortaa-light">
                Opening Doors to{' '}
                <span className="text-blue-500 border-b-4 border-blue-500 pb-2 comfortaa-bold">Brighter Futures</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed comfortaa-regular">
              We believe every child deserves the right to learn, grow, and succeed. Access To Education provides scholarships to underprivileged students, giving them the chance to pursue their dreams without financial barriers.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Link href="/contact" className="bg-blue-500 text-white px-10 py-4 rounded-full text-base md:text-lg hover:bg-blue-600 transition-colors inline-flex items-center comfortaa-medium">
                Contact Now
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>



      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-10 -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-10 translate-y-32 -translate-x-32"></div>
      
      {/* Wavy Bottom Transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg 
          className="relative block w-full h-20" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" 
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  )
}

export default HeroSection
