import { notFound } from 'next/navigation'

const projects = [
  {
    id: 1,
    title: 'bathroom',
    image: './prod1.jpg',
  },
  {
    id: 2,
    title: 'bedroom',
    image: './prod2.jpg',
  },
  {
    id: 3,
    title: 'walls',
    image: './prod3.jpg',
  },
  {
    id: 4,
    title: 'extra',
    image: './prod4.jpg',
  },
]

const ProjectDetail = ({ params }: { params: { id: string } }) => {
  const project = projects.find(p => p.id === Number(params.id))

  if (!project) {
    return notFound() // Returns a 404 page if the project doesn't exist
  }

  return (
    <div className='flex flex-col items-center justify-center py-10'>
      <h1 className='text-gray-800 font-bold text-4xl'>{project.title}</h1>
      <img src={project.image} alt={project.title} className='w-full max-w-2xl mt-4 rounded-lg' />
    </div>
  )
}

export default ProjectDetail
