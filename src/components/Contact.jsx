import { HiOutlineMail } from 'react-icons/hi'
import { BsDiscord, BsBriefcase } from 'react-icons/bs'
import { FiGithub } from 'react-icons/fi'

function Contact() {
  const contacts = [
    {
      icon: <HiOutlineMail />,
      label: 'Email',
      value: 'arthankyle.ydeo@gmail.com',
      link: 'mailto:arthankyle.ydeo@gmail.com',
      isLink: true
    },
    {
      icon: <BsDiscord />,
      label: 'Discord',
      value: '@itsbuilt.diff',
      isLink: false
    },
    {
      icon: <BsBriefcase />,
      label: 'LinkedIn',
      value: 'Arthan Kyle',
      link: 'https://www.linkedin.com/in/arthan-kyle-job-ydeo-3019b9371/',
      isLink: true
    },
    {
      icon: <FiGithub />,
      label: 'GitHub',
      value: 'ArthanKyle',
      link: 'https://github.com/ArthanKyle',
      isLink: true
    }
  ]

  return (
    <section id="contact" className="contact">
      <div className="section-number">04</div>
      <h2 className="contact-title">
        Let's Build<br />
        <span className="contact-subtitle">Something Together.</span>
      </h2>
      <p className="contact-description">
        Whether it's a project, a collab, or just a conversation — I'm open.
      </p>
      <div className="contact-grid">
        {contacts.map((contact, index) => (
          <div key={index} className="contact-card">
            <div className="contact-icon">{contact.icon}</div>
            <div className="contact-label">{contact.label}</div>
            {contact.isLink ? (
              <a href={contact.link} className="contact-value">{contact.value}</a>
            ) : (
              <div className="contact-value">{contact.value}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Contact
