import React from 'react'

const DirectorPage = () => {
  const projects = [
    { id: 1, title: 'Project 1', description: 'Description of Project 1' },
    { id: 2, title: 'Project 2', description: 'Description of Project 2' },
    // Add more projects here
  ]

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {projects.map(project => (
        <a
          href={`/projects/${project.id}`}
          key={project.id}
          className='project-card'
          style={{ width: '200px', margin: '10px', textDecoration: 'none' }}
        >
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px', transition: '0.3s' }}>
            <img
              src={`path/to/images/${project.id}.jpg`}
              alt={project.title}
              style={{ width: '100%', height: 'auto', transition: '0.3s' }}
            />
            <div
              className='overlay'
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                opacity: 0,
                transition: '0.3s',
              }}
            >
              <h3 style={{ position: 'absolute', bottom: '10px', left: '10px', color: '#000' }}>{project.title}</h3>
            </div>
          </div>
          <p>{project.description}</p>
        </a>
      ))}
    </div>
  )
}

export default DirectorPage
