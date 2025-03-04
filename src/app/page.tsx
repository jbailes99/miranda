import { Button } from '@material-tailwind/react'
import Link from 'next/link'

export default function Home() {
  return (
    <div
      className='min-h-screen justify-center flex items-center mx-auto px-4 sm:px-6 lg:px-0'
      // style={{ backgroundImage: './background.jpg', backgroundSize: 'cover' }}
    >
      <div className='grid grid-cols-1 md:grid-cols-2 '>
        {/* Text Section */}
        <div className='sm:flex sm:flex-col justify-center text-left sm:mb-32 mb-6 '>
          <div className='sm:mb-0 mb-4 '>
            <h1 className='text-gray-800 font-bold text-center sm:text-massive '>MIRANDA</h1>
            <h1 className='text-gray-400 text-center' style={{ letterSpacing: '2em' }}>
              FILM MAKER
            </h1>
            <h1 className='text-gray-800 font-bold text-center sm:text-massive '>GRAVES</h1>
          </div>
          <h2></h2>
          <h1 className='text-center text-2xl text-gray-400'>
            <Link href='/director'>
              <span className='hover:text-orange-500 cursor-pointer'>DIRECTOR</span>
            </Link>
            {' | '}
            <Link href='/editor'>
              <span className='hover:text-orange-500 cursor-pointer'>EDITOR</span>
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
          </h1>
        </div>

        {/* Image Section */}
        <div className='flex flex-col text-center items-center justify-center mb-32'>
          <img className='rounded-md' src='./me.jpg' alt='desc' width={500} height={500} />
        </div>
      </div>
    </div>
  )
}
