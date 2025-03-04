'use client'
import { useState } from 'react'
import Link from 'next/link'

const NAV_ITEMS = [
  {
    key: 'home',
    name: 'Home',
    href: '/',
  },
  {
    key: 'director',
    name: 'Director',
    href: '/director',
  },
  {
    key: 'writing',
    name: 'Writing',
    href: '/writing',
  },
  {
    key: 'creative',
    name: 'Creative Arts',
    href: '/creative',
  },
  {
    key: 'photography',
    name: 'Photography',
    href: '/photography',
  },
]

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className='sticky top-0 z-50 bg-pink-100 bg-opacity-30 shadow-sm border-b-2 border-black backdrop-blur-xl'>
      <div className='max-w-7xl mx-auto px-4 sm:px-4 lg:px-0'>
        <div className='flex items-center justify-center h-24 w-full'>
          {/* Navigation Links */}
          <div className='hidden md:flex space-x-6 text-center'>
            {NAV_ITEMS.map(item => (
              <Link key={item.key} href={item.href} className='text-gray-800 text-lg'>
                {item.name}
              </Link>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button className='text-gray-700 hover:text-blue-600' onClick={toggleMobileMenu}>
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu Links */}
        <div
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } md:hidden absolute left-0 right-0 top-24 bg-pink-100 p-4 space-y-4 shadow-md`}
        >
          {NAV_ITEMS.map(item => (
            <Link
              key={item.key}
              href={item.href}
              className='block text-gray-800 text-lg'
              onClick={() => setIsMobileMenuOpen(false)} // Close menu after item click
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
