import React from 'react'

const DirectorPage = () => {
  const projects = [
    {
      id: 1,
      title: 'The Nature of Aging',
      description: '',
      embedUrl: 'https://www.youtube.com/embed/h39ZTzx4Rmg',
    },
    {
      id: 2,
      title: 'Between Two Planets',
      description: '',
      embedUrl: '',
      image: './twoplanets.png',
    },

    // Add more projects here
  ]

  return (
    <div>
      <div className='flex flex-col items-center justify-center py-4'>
        <h1 className='text-gray-800 font-bold text-4xl'>Director Role</h1>
        <p className='text-gray-800 font-bold text-xl'>Here are some amazing projects I've directed:</p>
      </div>
      <div className='flex justify-center flex-wrap'>
        {projects.map(project => (
          <div key={project.id} className='w-[calc(40%-20px)] m-2 mx-4 text-center'>
            <div className='overflow-hidden rounded-lg transition duration-300 ease-in-out transform group-hover:scale-105'>
              {project.embedUrl ? (
                <iframe
                  className='w-full aspect-video rounded-lg'
                  src={project.embedUrl}
                  title={project.title}
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                ></iframe>
              ) : (
                <div className='relative overflow-hidden rounded-lg transition duration-300 ease-in-out transform group hover:scale-105'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-auto transition duration-300 ease-in-out group-hover:opacity-60'
                  />
                  <div className='absolute inset-0 bg-white bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center'>
                    <h3 className='text-black text-2xl font-bold'>
                      {project.title} <span> Coming Soon!</span>
                    </h3>
                  </div>
                </div>
              )}
              <p className='mt-2 text-center'>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DirectorPage
