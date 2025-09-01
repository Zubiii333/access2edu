'use client'

import React from 'react'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden pt-24 lg:pt-32">
      {/* Mobile Background Image */}
      <div 
        className="absolute inset-0 lg:hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Hero-A2E.svg')",
        }}
      >
        <div className="absolute inset-0 bg-gray-50 bg-opacity-90"></div>
      </div>

      {/* Desktop Background */}
      <div className="absolute inset-0 hidden lg:block bg-gray-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-65 items-center">
          {/* Left Column - Hero Image (Desktop Only) */}
          <div className="relative order-1 lg:order-1 h-[400px] hidden lg:flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center">
              <img 
                src="/Hero-A2E.svg" 
                alt="Access to Education Hero Image" 
                className="w-full h-full max-w-xl object-contain scale-180"
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-8 order-2 lg:order-2 text-center lg:text-left">
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
    </section>
  )
}

export default HeroSection
