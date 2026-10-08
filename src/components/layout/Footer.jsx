import { Link } from 'react-router-dom'
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from 'react-icons/fi'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-dark-border mt-20">
      <div className="container-custom py-12">

        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* BRAND */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-primary-700 flex items-center justify-center font-bold text-accent text-sm">
                M
              </span>
              <span className="font-semibold text-white">
                Muhamad<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Full-stack developer building production-grade web applications
              with React, Django, and MySQL.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/',         label: 'Home' },
                { to: '/projects', label: 'Projects' },
                { to: '/about',    label: 'About' },
                { to: '/contact',  label: 'Contact' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-gray-500 hover:text-accent transition-colors inline-flex items-center gap-1"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONNECT */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:usmanmn409@gmail.com"
                  className="text-gray-500 hover:text-accent transition-colors inline-flex items-center gap-2"
                >
                  <FiMail size={14} /> usmanmn409@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/developerusman602-bit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-accent transition-colors inline-flex items-center gap-2"
                >
                  <FiGithub size={14} /> GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/muhamad-usman-60b315356/?isSelfProfile=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-accent transition-colors inline-flex items-center gap-2"
                >
                  <FiLinkedin size={14} /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-dark-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© {year} Muhamad Usman. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with{' '}
            <span className="text-accent">React</span> &{' '}
            <span className="text-accent">TailwindCSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}