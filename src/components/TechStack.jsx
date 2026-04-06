function TechStack() {
  const primaryStack = [
    'React', 'Vite', 'JavaScript', 'Node.js', 'Express',
    'PostgreSQL', 'MongoDB', 'AWS', 'Vercel'
  ]

  const expandedExpertise = [
    'Flutter', 'Kotlin', 'Firebase', 'Supabase', 'Unity',
    'Python', 'Dart', 'PHP', 'Laravel', 'C#'
  ]

  const specializations = [
    'Scalability & Architecture',
    'AI & Machine Learning',
    'Blockchain Integration'
  ]

  return (
    <section id="stack" className="tech-stack">
      <div className="section-number">02</div>
      <div className="tech-stack-content">
        <h2>Tech Stack</h2>
        <p className="tech-stack-subtitle">Every tool earned through real projects.</p>

        <div className="stack-section">
          <h3 className="stack-title">PRIMARY STACK</h3>
          <p className="stack-description">CURRENTLY BUILDING WITH</p>
          <div className="tech-grid">
            {primaryStack.map((tech, index) => (
              <span key={index} className="tech-badge primary">{tech}</span>
            ))}
          </div>
        </div>

        <div className="stack-section">
          <h3 className="stack-title">EXPANDED EXPERTISE</h3>
          <p className="stack-description">ALSO IN THE ARSENAL</p>
          <div className="tech-grid">
            {expandedExpertise.map((tech, index) => (
              <span key={index} className="tech-badge secondary">{tech}</span>
            ))}
          </div>
        </div>

        <div className="specializations">
          {specializations.map((spec, index) => (
            <span key={index} className="specialization-badge">{spec}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
