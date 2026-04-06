import { FiGithub } from 'react-icons/fi'
import { BsLinkedin } from 'react-icons/bs'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        Arthan Kyle · Full Stack Developer · Philippines
      </div>
      <div className="footer-right">
        <span>© 2026 Arthan Kyle Job E. Ydeo</span>
        <div className="footer-icons">
          <a href="https://github.com/ArthanKyle" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/arthan-kyle-job-ydeo-3019b9371/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <BsLinkedin />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
