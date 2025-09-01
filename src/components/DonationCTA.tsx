'use client'

import React from 'react'

const DonationCTA = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-600 to-blue-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute bottom-20 left-32 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-white rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 comfortaa-light">
          Your Support Changes Lives
        </h2>


        {/* Main Content */}
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg text-blue-100 leading-relaxed comfortaa-regular mb-6">
            Education is the most powerful tool to break the cycle of poverty. When you donate to Access to Education, 
            you&apos;re not just giving money – you&apos;re giving hope, opportunity, and a brighter future to students who dream 
            of something better.
          </p>
          
          <p className="text-lg text-blue-100 leading-relaxed comfortaa-regular">
            Join thousands of supporters who believe that every child deserves access to quality education, 
            regardless of their economic background.
          </p>
        </div>

        {/* Donation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          {/* Primary Donation Button */}
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 comfortaa-bold inline-flex items-center group shadow-lg">
            Donate Now
            <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>

          {/* Secondary Button */}
          <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 comfortaa-medium">
            Learn More About Our Impact
          </button>
        </div>
      </div>


    </section>
  )
}

export default DonationCTA
