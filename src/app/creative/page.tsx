import React from 'react'

const CreativeProjectsPage: React.FC = () => {
  return (
    <div className='text-black'>
      <header>
        <h1>Creative Projects</h1>
        <p>Welcome to my creative projects page. Here you can find a collection of my work.</p>
      </header>
      <main>
        <section>
          <h2>Featured Projects</h2>
          {/* Add your featured projects here */}
        </section>
        <section>
          <h2>Recent Projects</h2>
          {/* Add your recent projects here */}
        </section>
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default CreativeProjectsPage
