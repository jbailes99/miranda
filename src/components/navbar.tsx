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
    key: 'editor',
    name: 'Editor',
    href: '/editor',
  },
  {
    key: 'creative',
    name: 'Creative Projects',
    href: '/creative',
  },
]

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-50 bg-pink-100 bg-opacity-30 shadow-sm border-b-2 border-black backdrop-blur-xl'>
      <div className='max-w-7xl mx-auto px-4 sm:px-4 lg:px-0'>
        <div className='flex items-center justify-between h-24'>
          <div className=''>
            <h1 className='text-black text-2xl'>Miranda</h1>
          </div>
          {/* Navigation Links */}
          <div className='hidden md:flex space-x-6 ml-auto'>
            {NAV_ITEMS.map(item => (
              <Link key={item.key} href={item.href} className='text-gray-800 text-lg '>
                {item.name}
              </Link>
            ))}
          </div>
          {/* Mobile Menu (Optional) */}
          <div className='md:hidden'>
            <button className='text-gray-700 hover:text-blue-600'>
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
      </div>
    </nav>
  )
}

export default Navbar
