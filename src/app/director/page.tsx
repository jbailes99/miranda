import React from 'react'

const DirectorPage = () => {
  const projects = [
    {
      id: 1,
      title: 'The Nature of Aging',
      description: 'Watch this amazing video!',
      link: 'https://www.youtube.com/watch?v=h39ZTzx4Rmg',
      image: './natureofaging.png',
    },
    {
      id: 2,
      title: 'The Future of Technology',
      description: 'A groundbreaking project on tech advancements!',
      link: 'https://www.youtube.com/watch?v=h39ZTzx4Rmg',
      image: './natureofaging.png',
    },
    {
      id: 3,
      title: 'Health & Wellness',
      description: 'Exploring new ways to improve your health.',
      link: 'https://www.youtube.com/watch?v=h39ZTzx4Rmg',
      image: './natureofaging.png',
    },
    {
      id: 4,
      title: 'Space Exploration',
      description: 'Join the journey to the stars!',
      link: 'https://www.youtube.com/watch?v=h39ZTzx4Rmg',
      image: './natureofaging.png',
    },
    // Add more projects here
  ]

  return (
    <div>
      <div className='flex flex-col items-center justify-center py-4'>
        <h1 className='text-gray-800 font-bold text-4xl'>Director role</h1>
        <p className='text-gray-800 font-bold text-xl'>Here are some amazing projects I've directed:</p>
      </div>
      <div className='flex justify-center flex-wrap'>
        {projects.map(project => (
          <a
            href={`${project.link}`}
            key={project.id}
            target='_blank'
            className='relative group w-[calc(40%-20px)] m-2 mx-4 text-decoration-none'
          >
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
            <p className='mt-2 text-center'>{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  )
}

export default DirectorPage
