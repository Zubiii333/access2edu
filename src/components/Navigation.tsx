'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img 
                src="/a2e.svg" 
                alt="Access to Education Logo" 
                className="w-12 h-12 mr-3"
              />
              <span className="text-xl text-gray-800 comfortaa-bold">Access to Education</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm transition-colors comfortaa-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm transition-colors comfortaa-medium">
                About us
              </Link>
              <Link href="/gallery" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm transition-colors comfortaa-medium">
                Gallery
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm transition-colors comfortaa-medium">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm transition-colors comfortaa-medium">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Donate Button */}
          <div className="hidden md:block">
            <Link href="/donate" className="bg-black text-white px-6 py-2 rounded-md text-sm hover:bg-gray-800 transition-colors comfortaa-medium">
              Donate Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base comfortaa-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base comfortaa-medium">
                About us
              </Link>
              <Link href="/gallery" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base comfortaa-medium">
                Gallery
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base comfortaa-medium">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base comfortaa-medium">
                Contact Us
              </Link>
              <Link href="/donate" className="bg-black text-white block px-3 py-2 text-base rounded-md mt-2 comfortaa-medium">
                Donate Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
