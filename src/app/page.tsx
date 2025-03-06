import { Button } from '@material-tailwind/react'
import Link from 'next/link'

export default function Home() {
  return (
    <div
      className='min-h-screen justify-center flex items-center mx-auto px-4 sm:px-6 lg:px-0'
      style={{ backgroundImage: './miranda/background.jpg', backgroundSize: 'cover' }}
    >
      <div className='grid grid-cols-1 md:grid-cols-2 sm:ml-24 '>
        {/* Text Section */}
        <div className='sm:flex sm:flex-col justify-center text-left mb-2  '>
          <div className='sm:mb-0 mb-4 '>
            <h1 className='text-gray-800 font-bold text-center sm:text-massive '>MIRANDA</h1>
            <h1 className='text-pink-900 text-center sm:tracking-[2em] tracking-[.5em]'>FILM MAKER</h1>

            <h1 className='text-gray-800 font-bold text-center sm:text-massive '>GRAVES</h1>
          </div>
          <h2></h2>
          <h1 className='text-center text-2xl sm:block hidden text-pink-600'>
            <Link href='/director'>
              <span className='hover:text-orange-500 cursor-pointer'>DIRECTOR</span>
            </Link>

            {' | '}
            <Link href='/writing'>
              <span className='hover:text-orange-500 cursor-pointer'>WRITER</span>
            </Link>
            {' | '}
            <Link href='/creative'>
              <span className='hover:text-orange-500 cursor-pointer'>CREATIVE ARTS</span>
            </Link>
            {' | '}
            <Link href='/photography'>
              <span className='hover:text-orange-500 cursor-pointer'>PHOTOGRAPHER</span>
            </Link>
            {' | '}

            <Link href='/productiondesign'>
              <span className='hover:text-orange-500 cursor-pointer'>PROD. DESIGN</span>
            </Link>
          </h1>
        </div>

        {/* Image Section */}
        <div className='flex flex-col text-center items-center justify-center  mb-4'>
          <img className='rounded-md' src='./me.jpg' alt='desc' width={500} height={500} />
        </div>

        <h1 className='text-center sm:hidden text-lg text-gray-400'>
          <Link href='/director'>
            <span className='hover:text-orange-500 cursor-pointer'>DIRECTOR</span>
          </Link>

          {' | '}
          <Link href='/writing'>
            <span className='hover:text-orange-500 cursor-pointer'>WRITER</span>
          </Link>
          {' | '}
          <Link href='/creative'>
            <span className='hover:text-orange-500 cursor-pointer'>CREATIVE ARTS</span>
          </Link>
          {' | '}
          <Link href='/photography'>
            <span className='hover:text-orange-500 cursor-pointer'>PHOTOGRAPHER</span>
          </Link>
          {' | '}

          <Link href='/productiondesign'>
            <span className='hover:text-orange-500 cursor-pointer'>PROD. DESIGN</span>
          </Link>
        </h1>
      </div>
    </div>
  )
}
