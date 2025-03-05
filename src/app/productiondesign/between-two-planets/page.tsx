import React from 'react'
import Link from 'next/link'

const basePath = process.env.NODE_ENV === 'production' ? '/miranda' : ''

const projects = [
  {
    id: 1,
    description: 'bathroom set',
    image: '../prod1.jpg',
  },
  {
    id: 2,
    description: 'desk',
    image: '../prod2.jpg',
  },
  {
    id: 3,
    description: 'side table',
    image: '../prod3.jpg',
  },
  {
    id: 4,
    description: 'bed',
    image: '../prod4.jpg',
  },
]

const Projects = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center py-4'>
        <h1 className='text-gray-800 font-bold text-4xl'>Production Design</h1>
        <p className='text-gray-800 font-bold text-4xl mt-2'>Anya's film</p>
      </div>
      <div className='flex justify-center flex-wrap'>
        {projects.map(project => (
          <div className='relative group w-[calc(40%-20px)] m-2 mx-4 cursor-pointer'>
            <p className='mt-2 text-center'>{project.description}</p>

            <div className='overflow-hidden rounded-lg '>
              <img src={project.image} className='w-full h-auto ' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
