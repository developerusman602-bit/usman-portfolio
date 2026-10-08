import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const links = [
  { to: '/',         label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about',    label: 'About' },
  { to: '/contact',  label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  // Add backdrop blur when scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-bg/80 backdrop-blur-md border-b border-dark-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-lg bg-primary-700 flex items-center justify-center font-bold text-accent text-sm group-hover:scale-110 transition-transform">
              M
            </span>
            <span className="font-semibold text-white tracking-tight hidden sm:block">
              Muhammad<span className="text-accent">.</span>
            </span>
          </Link>

          {/* DESKTOP LINKS */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-accent bg-primary-900/30'
                        : 'text-gray-400 hover:text-white'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* SOCIALS + MOBILE TOGGLE */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/developerusman602-bit"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hidden md:flex w-9 h-9 items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-dark-card transition-colors"
            >
              <FiGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-usman-60b315356/?isSelfProfile=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hidden md:flex w-9 h-9 items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-dark-card transition-colors"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href="mailto:developerusman602@gmail.com"
              aria-label="Email"
              className="hidden md:flex w-9 h-9 items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-dark-card transition-colors"
            >
              <FiMail size={18} />
            </a>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-white hover:bg-dark-card transition-colors"
            >
              {open ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 border-t border-dark-border' : 'max-h-0'
        } bg-dark-bg/95 backdrop-blur-md`}
      >
        <ul className="container-custom py-4 space-y-1">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-accent bg-primary-900/30'
                      : 'text-gray-400 hover:text-white hover:bg-dark-card'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}