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
            Through scholarships and educational programs, we&apos;re making a real difference in communities worldwide. Here&apos;s the impact we&apos;ve achieved together.
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


    </section>
  )
}

export default StatisticsSection
