function Projects() {
  const projects = [
    {
      tags: ['Dart', 'Flutter', 'Firebase'],
      title: 'Kahel Hotel',
      description: 'Smart pet hotel companion app with real-time monitoring, GPS tracking, and crypto-based loyalty rewards for premium pet care.',
      link: 'https://github.com/ArthanKyle/Kahel-Hotel'
    },
    {
      tags: ['Dart', 'Flutter', 'Firebase'],
      title: 'Academia Classroom Explorer',
      description: 'A mobile application built with Flutter that gives students a convenient platform for accessing academic information, classroom directories, grades, and more.',
      link: 'https://github.com/ArthanKyle/Academia-Classroom-Explorer'
    },
    {
      tags: ['Laravel', 'Livewire', 'PHP'],
      title: 'FlatConnect',
      description: 'ISP client management system for TP-Link Omada networks with real-time discovery, blocking controls, and payment tracking.',
      link: 'https://github.com/ArthanKyle/FlatConnect'
    },
    {
      tags: ['PHP', 'E-Commerce','Backend Development'],
      title: 'Ala Cart Web',
      description: 'Full-stack e-commerce platform built during RaksoCT internship — product listings, cart, checkout.',
      link: 'https://github.com/ArthanKyle/ala_cart_web'
    },
    {
      tags: ['React', 'Node.js', 'AI'],
      title: 'StockSenseAI',
      description: 'Multi-tenant AI inventory platform with demand forecasting, restock recommendations, and intelligent business insights.',
      link: 'https://github.com/ArthanKyle/StockSenseAI'
    },
    {
      tags: ['C#', 'Unity', 'Mobile Game'],
      title: 'Upgrade Android',
      description: 'Fast-paced 2D platformer with dynamic obstacles, power-ups, mob battles, and hidden secrets for Android devices.',
      link: 'https://github.com/ArthanKyle/Upgrade-Android-Version'
    },

    
  ]

  return (
    <section id="projects" className="projects">
      <div className="section-number">03</div>
      <h2>Projects</h2>
      <p className="projects-subtitle">Selected work from production and exploration.</p>
      <div className="projects-grid">
        {projects.map((project, index) => {
  const isLast = index === projects.length - 1;

      return (
        <div
          key={index}
          className={`project-card ${isLast ? 'project-card--last' : ''}`}
        >
          <div className="project-tags">
            {project.tags.map((tag, i) => (
              <span key={i} className="tag">{tag}</span>
            ))}
          </div>

          <h3>{project.title}</h3>
          <p>{project.description}</p>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub →
          </a>
        </div>
      );
    })}
      </div>
    </section>
  )
}

export default Projects
