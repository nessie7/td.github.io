import { useEffect, useState } from 'react'
import Logo from './Logo'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`nav-bar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo" onClick={() => scrollTo('hero')}>
        <Logo size={36} showText={true} />
      </div>
      <ul className="nav-links">
        <li>
          <span className="nav-link" onClick={() => scrollTo('album')}>
            相册
          </span>
        </li>
        <li>
          <span className="nav-link" onClick={() => scrollTo('letter')}>
            情书
          </span>
        </li>
        <li>
          <span className="nav-link" onClick={() => scrollTo('timeline')}>
            时光线
          </span>
        </li>
      </ul>
    </nav>
  )
}
