import React from 'react'

const PhotographyPage: React.FC = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-yellow-100'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold text-yellow-600'>🚧 Under Construction 🚧</h1>
        <p className='mt-4 text-lg text-gray-700'>We're working hard to bring you something special!</p>
        <p className='mt-2 text-sm text-gray-500'>Please check back soon!</p>

        {/* YouTube Embed Video */}
        <div className='mt-6'>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/xvFZjo5PgG0'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default PhotographyPage
