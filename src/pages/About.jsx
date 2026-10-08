import { Link } from 'react-router-dom'
import {
  FiArrowRight,
  FiCode,
  FiServer,
  FiDatabase,
  FiGlobe,
  FiMapPin,
  FiBriefcase,
  FiAward,
} from 'react-icons/fi'
import { skills } from '../data/projects'

const SKILL_ICONS = {
  Frontend: <FiCode size={18} />,
  Backend: <FiServer size={18} />,
  Database: <FiDatabase size={18} />,
  'DevOps & Servers': <FiGlobe size={18} />,
  Tools: <FiBriefcase size={18} />,
  SEO: <FiAward size={18} />,
}

const TIMELINE = [
  {
    year: '2025 – Present',
    title: 'Freelance Full-Stack Developer',
    org: 'Self-employed',
    location: 'Jeddah, Saudi Arabia',
    desc: 'Building production web applications end to end — frontend, backend, database, and deployment.',
    current: true,
  },
  {
    year: '2025',
    title: 'Python Full-Stack Developer Trainee',
    org: 'Self-directed Training',
    location: 'Kochi, India',
    desc: 'Hands-on training in React.js, Python, Django, Flask, and MySQL with full-stack projects.',
  },
  {
    year: '2022 – 2025',
    title: 'Bachelor of Computer Applications (BCA)',
    org: 'MES College Marampilly · MG University',
    location: 'Aluva, Kerala',
    desc: 'Studied programming, databases, algorithms, and software engineering fundamentals.',
  },
  {
    year: '2020 – 2022',
    title: 'Higher Secondary Education',
    org: 'GBHSS Aluva',
    location: 'Aluva, Kerala',
    desc: 'Completed Plus Two with 74.8%.',
  },
]

export default function About() {
  return (
    <div>

      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="container-custom pt-12 pb-16">
        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* LEFT — Text */}
          <div className="lg:col-span-7">
            <div className="section-label">About Me</div>

            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              I build, deploy, and maintain{' '}
              <span className="text-accent">production systems</span>.
            </h1>

            <div className="space-y-5 text-gray-400 leading-relaxed">
              <p>
                I'm <span className="text-white font-medium">Muhamad Usman</span>,
                a freelance full-stack developer currently based in Jeddah,
                Saudi Arabia. I specialize in building complete web applications
                — from designing the frontend and engineering the backend, to
                configuring servers, deploying on production VPS instances, and
                optimizing for SEO.
              </p>

              <p>
                My recent work includes{' '}
                <a
                  href="https://parkinsonsa.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  parkinsonsa.com
                </a>
                , a bilingual (English/Arabic) community platform for Parkinson's
                disease support. I built it entirely from scratch — no templates,
                no shortcuts — covering the frontend, backend, MySQL database,
                WebSocket notifications, secure authentication, and self-managed
                Ubuntu deployment with Nginx and SSL.
              </p>

              <p>
                I enjoy solving real-world problems with clean, scalable code,
                and I'm always learning something new. Currently open to
                freelance projects, full-time roles, and remote opportunities.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-10">
              <Link to="/projects" className="btn-primary">
                See my projects <FiArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-outline">
                Get in touch
              </Link>
            </div>
          </div>

                    {/* RIGHT — Photo + Quick facts */}
          <div className="lg:col-span-5 space-y-6">

            {/* PHOTO */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary-500/30 to-accent/20 rounded-2xl blur-lg" />
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-dark-border">
                <img
                  src="/images/profile.jpg"
                  alt="Muhamad Usman"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* QUICK FACTS */}
            <div className="card">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                Quick Facts
              </h3>

              <ul className="space-y-4 text-sm">
                <FactRow label="Based in"    value="Jeddah, Saudi Arabia" icon={<FiMapPin size={14} />} />
                <FactRow label="Nationality" value="Indian" />
                <FactRow label="Focus"       value="Full-Stack Web Dev" />
                <FactRow label="Currently"   value="Available for hire" highlight />
                <FactRow label="Languages"   value="English · Malayalam · Hindi" />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TIMELINE
      ===================================================== */}
      <section className="container-custom pb-16">
        <div className="mb-10">
          <div className="section-label">Journey</div>
          <h2 className="section-title">Experience & Education</h2>
        </div>

        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-3 top-2 bottom-2 w-px bg-dark-border" />

          <div className="space-y-10">
            {TIMELINE.map((item, i) => (
              <div key={i} className="relative pl-12">
                {/* Dot */}
                <div
                  className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    item.current
                      ? 'border-accent bg-primary-900'
                      : 'border-dark-border bg-dark-card'
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      item.current ? 'bg-accent animate-pulse' : 'bg-gray-500'
                    }`}
                  />
                </div>

                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <span className="text-xs font-mono text-accent">
                    {item.year}
                  </span>
                  {item.current && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                      Current
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 mb-2">
                  {item.org} · {item.location}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SKILLS
      ===================================================== */}
      <section className="container-custom pb-20">
        <div className="mb-10">
          <div className="section-label">Toolkit</div>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="text-gray-400 max-w-2xl">
            The tools, languages, and platforms I use to build and ship
            production software.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="card hover:border-primary-500/60">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary-900/50 border border-primary-500/30 flex items-center justify-center text-accent">
                  {SKILL_ICONS[category] || <FiCode size={18} />}
                </div>
                <h3 className="font-semibold text-white">{category}</h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-md bg-dark-hover border border-dark-border text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="container-custom pb-20">
        <div className="card text-center py-12 relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-accent/5 rounded-full blur-3xl" />

          <div className="relative max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let's build something together.
            </h2>
            <p className="text-gray-400 mb-8">
              Have a project, opportunity, or idea? I'd love to hear about it.
            </p>
            <Link to="/contact" className="btn-primary">
              Contact me <FiArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

/* =====================================================
   Helper
===================================================== */
function FactRow({ label, value, icon, highlight }) {
  return (
    <li className="flex items-center justify-between gap-4">
      <span className="text-gray-500 inline-flex items-center gap-1.5">
        {icon} {label}
      </span>
      <span
        className={`font-medium text-right ${
          highlight ? 'text-emerald-400' : 'text-white'
        }`}
      >
        {value}
      </span>
    </li>
  )
}