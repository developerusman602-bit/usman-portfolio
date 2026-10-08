import { Link } from 'react-router-dom'
import {
  FiArrowRight,
  FiGithub,
  FiMail,
  FiMapPin,
  FiCode,
  FiServer,
  FiDatabase,
  FiGlobe,
} from 'react-icons/fi'
import { projects, skills } from '../data/projects'
import StatusDot from '../components/ui/StatusDot'

export default function Home() {
  const featured = projects.find((p) => p.featured) || projects[0]
  const otherProjects = projects.filter((p) => p.id !== featured.id)

  return (
    <div>
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="container-custom pt-12 md:pt-20 pb-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* LEFT — Text */}
          <div className="lg:col-span-7 animate-fade-in">

            {/* AVATAR */}
            <div className="mb-6 flex items-center gap-4">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-primary-500 to-accent rounded-full blur opacity-60" />
                <img
                  src="/images/profile.jpg"
                  alt="Muhammad Usman"
                  className="relative w-16 h-16 rounded-full object-cover border-2 border-dark-bg"
                />
              </div>
              <div>
                <p className="text-sm text-gray-500">Hello, I'm</p>
                <p className="text-lg font-semibold text-white">Muhammad Usman</p>
              </div>
            </div>

            <div className="badge mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for freelance
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Full-stack developer <br />
              building{' '}
              <span className="text-accent">production-grade</span>{' '}
              <br className="hidden md:block" />
              web applications.
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
              I'm <span className="text-white font-medium">Muhammad Usman</span>,
              a freelance developer based in Jeddah. I build complete systems —
              from React frontends and Django APIs to Nginx-served deployments
              with SEO baked in.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link to="/projects" className="btn-primary">
                View my work <FiArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-outline">
                Get in touch
              </Link>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-500">
              <span className="inline-flex items-center gap-2">
                <FiMapPin size={14} /> Jeddah, Saudi Arabia
              </span>
              <span className="inline-flex items-center gap-2">
                <FiGlobe size={14} /> Remote friendly
              </span>
            </div>
          </div>

          {/* RIGHT — Stack Card */}
          <div className="lg:col-span-5 animate-fade-in">
            <div className="card relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl" />

              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                    My Stack
                  </h3>
                  <span className="text-xs text-gray-500">always learning</span>
                </div>

                <div className="space-y-5">
                  <StackRow
                    icon={<FiCode size={16} />}
                    label="Frontend"
                    value="React · Vite · Tailwind"
                  />
                  <StackRow
                    icon={<FiServer size={16} />}
                    label="Backend"
                    value="Django · DRF · Channels"
                  />
                  <StackRow
                    icon={<FiDatabase size={16} />}
                    label="Database"
                    value="MySQL · PostgreSQL"
                  />
                  <StackRow
                    icon={<FiGlobe size={16} />}
                    label="Deploy"
                    value="Ubuntu · Nginx · SSL"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED PROJECT
      ===================================================== */}
      <section className="container-custom py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="section-label">Featured Work</div>
            <h2 className="section-title">Latest project</h2>
          </div>
          <Link
            to="/projects"
            className="hidden md:inline-flex items-center gap-2 text-sm text-gray-400 hover:text-accent transition-colors"
          >
            All projects <FiArrowRight size={14} />
          </Link>
        </div>

        <Link to={`/projects/${featured.id}`} className="group block">
          <div className="card hover:border-primary-500/60 transition-all duration-300 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">

              {/* Left — info */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{featured.icon}</span>
                  <StatusDot status={featured.status} />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {featured.title}
                </h3>
                <p className="text-sm text-accent mb-4">{featured.subtitle}</p>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {featured.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {featured.tech.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-dark-hover border border-dark-border text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {featured.live && (
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                      Visit live site <FiArrowRight size={14} />
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1.5 text-sm text-gray-500">
                    <FiGithub size={14} /> Source
                  </span>
                </div>
              </div>

              {/* Right — visual placeholder */}
              <div className="relative aspect-video rounded-xl overflow-hidden border border-dark-border bg-gradient-to-br from-primary-800 to-primary-600 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-3">{featured.icon}</div>
                  <p className="text-sm text-white/70 font-medium">
                    {featured.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* =====================================================
          OTHER PROJECTS
      ===================================================== */}
      <section className="container-custom py-16">
        <div className="mb-8">
          <div className="section-label">More Work</div>
          <h2 className="section-title">Other projects</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {otherProjects.map((p) => (
            <Link
              key={p.id}
              to={`/projects/${p.id}`}
              className="card group hover:border-primary-500/60"
            >
              <div
                className={`w-full aspect-video rounded-lg mb-5 bg-gradient-to-br ${p.color} flex items-center justify-center`}
              >
                <span className="text-5xl">{p.icon}</span>
              </div>

              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-white group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <StatusDot status={p.status} />
              </div>

              <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                {p.subtitle}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {p.tech.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2 py-1 rounded bg-dark-hover border border-dark-border text-gray-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="container-custom py-16">
        <div className="card text-center py-12 relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-accent/5 rounded-full blur-3xl" />

          <div className="relative max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let's build something together.
            </h2>
            <p className="text-gray-400 mb-8">
              Looking for a developer to launch your next idea? I'm available
              for freelance projects and full-time roles.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="btn-primary">
                Start a conversation <FiMail size={16} />
              </Link>
              <a
                href="https://github.com/developerusman602-bit"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <FiGithub size={16} /> See my code
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

/* =====================================================
   Small helper for the stack card
===================================================== */
function StackRow({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-lg bg-dark-hover border border-dark-border flex items-center justify-center text-accent shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs text-gray-500 uppercase tracking-wider">
          {label}
        </p>
        <p className="text-sm text-white font-medium">{value}</p>
      </div>
    </div>
  )
}