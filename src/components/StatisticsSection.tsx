'use client'

import React from 'react'

const StatisticsSection = () => {
  const statistics = [
    {
      number: "500+",
      label: "Volunteers Worldwide",
      bgColor: "bg-gradient-to-br from-yellow-400 to-yellow-500"
    },
    {
      number: "200+",
      label: "Community Projects",
      bgColor: "bg-gradient-to-br from-yellow-400 to-yellow-500"
    },
    {
      number: "100K+",
      label: "Trees Planted",
      bgColor: "bg-gradient-to-br from-green-700 to-green-800"
    },
    {
      number: "300+",
      label: "Educational Programs",
      bgColor: "bg-gradient-to-br from-green-500 to-green-600"
    }
  ]

  return (
    <section className="relative pt-20 pb-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-800 leading-tight mb-6 comfortaa-light">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed comfortaa-regular max-w-3xl mx-auto">
            Through scholarships and educational programs, we're making a real difference in communities worldwide. Here's the impact we've achieved together.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {statistics.map((stat, index) => (
            <div key={index} className="relative group">
              {/* Main Statistic Card */}
              <div className={`${stat.bgColor} rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden min-h-[200px] flex flex-col justify-center`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-32 h-32 bg-white rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-20 h-20 bg-white rounded-full"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-4xl md:text-5xl lg:text-6xl comfortaa-bold mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-lg md:text-xl comfortaa-medium opacity-90">
                    {stat.label}
                  </p>
                </div>


              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 comfortaa-regular mb-6">
            Ready to be part of our mission?
          </p>
          <button className="bg-blue-500 text-white px-8 py-4 rounded-full text-lg hover:bg-blue-600 transition-colors comfortaa-medium">
            Join Our Community
          </button>
        </div>
      </div>

      {/* Wavy Bottom Divider */}
      <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-none">
        <svg 
          className="relative block w-full h-20" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" 
            fill="#f8fafc"
          />
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity="0.5" 
            fill="#f1f5f9"
          />
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity="0.25" 
            fill="#e2e8f0"
          />
        </svg>
      </div>
    </section>
  )
}

export default StatisticsSection
