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

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8 comfortaa-regular max-w-4xl mx-auto">
          Every donation helps provide scholarships, educational resources, and opportunities for students who need them most.
        </p>

        {/* Impact Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl text-white comfortaa-bold mb-2">$50</div>
            <p className="text-blue-200 comfortaa-regular">Provides school supplies for one student for a semester</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl text-white comfortaa-bold mb-2">$200</div>
            <p className="text-blue-200 comfortaa-regular">Covers textbooks and materials for an entire academic year</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl text-white comfortaa-bold mb-2">$500</div>
            <p className="text-blue-200 comfortaa-regular">Funds a full scholarship for a deserving student</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg text-blue-100 leading-relaxed comfortaa-regular mb-6">
            Education is the most powerful tool to break the cycle of poverty. When you donate to Access to Education, 
            you're not just giving money – you're giving hope, opportunity, and a brighter future to students who dream 
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

        {/* Trust Indicators */}
        <div className="text-center">
          <p className="text-blue-200 text-sm comfortaa-regular mb-4">
            ✓ 100% of your donation goes directly to student scholarships
          </p>
          <p className="text-blue-200 text-sm comfortaa-regular">
            ✓ Tax-deductible • ✓ Secure donation processing • ✓ Monthly impact reports
          </p>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg 
          className="relative block w-full h-16" 
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

export default DonationCTA
