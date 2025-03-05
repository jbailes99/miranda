import React from 'react'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: 'Anyas Film',
    image: './prod1.jpg',
    slug: 'between-two-planets', // Add a slug for each project
  },
  // {
  //   id: 2,
  //   title: 'Anyas Film',
  //   description: 'A groundbreaking project',
  //   image: '/prod2.jpg',
  //   slug: 'anya-film',
  // },
]

const Projects = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center py-4'>
        <h1 className='text-gray-800 font-bold text-4xl'>Production Design</h1>
        <p className='text-gray-800 font-bold text-xl'>Here are some amazing sets I've created:</p>
      </div>
      <div className='flex justify-center flex-wrap'>
        {projects.map(project => (
          <Link className='flex  justify-center flex-wrap' key={project.id} href={`/productiondesign/${project.slug}`}>
            <div className='relative group w-[calc(40%-20px)] m-2 mx-4 cursor-pointer'>
              <div className='overflow-hidden rounded-lg transition duration-300 ease-in-out transform group-hover:scale-105'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-auto transition duration-300 ease-in-out group-hover:opacity-60'
                />
                <div className='absolute inset-0 bg-white bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center'>
                  <h3 className='text-black text-2xl'>{project.title}</h3>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Projects
