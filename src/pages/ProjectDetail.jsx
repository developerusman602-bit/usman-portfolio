import { useParams, Link, useNavigate } from 'react-router-dom'
import {
  FiArrowLeft,
  FiArrowRight,
  FiGithub,
  FiExternalLink,
  FiCheckCircle,
  FiCode,
} from 'react-icons/fi'
import { projects } from '../data/projects'
import StatusDot from '../components/ui/StatusDot'

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const project = projects.find((p) => p.id === id)

  // If not found → 404 view
  if (!project) {
    return (
      <div className="container-custom section-pad text-center">
        <div className="max-w-md mx-auto">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-3xl font-bold text-white mb-3">
            Project not found
          </h1>
          <p className="text-gray-400 mb-8">
            The project you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/projects" className="btn-primary">
            <FiArrowLeft size={16} /> Back to projects
          </Link>
        </div>
      </div>
    )
  }

  // Get next project for navigation
  const currentIndex = projects.findIndex((p) => p.id === id)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <div>
      {/* =====================================================
          BACK BUTTON
      ===================================================== */}
      <div className="container-custom pt-6 pb-4">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-accent transition-colors"
        >
          <FiArrowLeft size={14} /> Back
        </button>
      </div>

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="container-custom pb-12">
        <div className="grid lg:grid-cols-12 gap-10 items-start">

          {/* LEFT — Title + Info */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl">{project.icon}</span>
              <StatusDot status={project.status} />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              {project.title}
            </h1>

            <p className="text-lg text-accent mb-6">
              {project.subtitle}
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {project.description}
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <FiExternalLink size={16} /> Visit live site
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  <FiGithub size={16} /> View source
                </a>
              )}
            </div>
          </div>

          {/* RIGHT — Meta card */}
          <div className="lg:col-span-5">
            <div className="card">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
                Project Details
              </h3>

              <dl className="space-y-4 text-sm">
                <MetaRow
                  label="Status"
                  value={project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                />
                <MetaRow
                  label="Type"
                  value={project.live ? 'Production' : 'Personal Project'}
                />
                <MetaRow
                  label="Stack"
                  value={`${project.tech.length} technologies`}
                />
                {project.live && (
                  <div>
                    <dt className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      Live URL
                    </dt>
                    <dd className="truncate">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-white transition-colors break-all"
                      >
                        {project.live}
                      </a>
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VISUAL
      ===================================================== */}
      <section className="container-custom pb-16">
        <div
          className={`w-full aspect-[16/9] rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center border border-dark-border overflow-hidden relative`}
        >
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative text-center">
            <div className="text-8xl mb-4">{project.icon}</div>
            <p className="text-xl text-white/90 font-semibold">
              {project.title}
            </p>
            <p className="text-sm text-white/60 mt-1">{project.subtitle}</p>
          </div>
        </div>
      </section>

      {/* =====================================================
          KEY FEATURES
      ===================================================== */}
      {project.features && project.features.length > 0 && (
        <section className="container-custom pb-16">
          <div className="mb-8">
            <div className="section-label">What I Built</div>
            <h2 className="text-3xl font-bold text-white">
              Key features
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, i) => (
              <div
                key={i}
                className="card flex items-start gap-4 hover:border-primary-500/60"
              >
                <div className="w-8 h-8 rounded-lg bg-primary-900/50 border border-primary-500/30 flex items-center justify-center text-accent shrink-0 mt-0.5">
                  <FiCheckCircle size={16} />
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* =====================================================
          TECH STACK
      ===================================================== */}
      <section className="container-custom pb-16">
        <div className="mb-8">
          <div className="section-label">Built With</div>
          <h2 className="text-3xl font-bold text-white">
            Tech stack
          </h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {project.tech.map((t) => (
            <div
              key={t}
              className="px-4 py-3 rounded-lg bg-dark-card border border-dark-border hover:border-primary-500/60 transition-colors"
            >
              <div className="flex items-center gap-2">
                <FiCode size={14} className="text-accent" />
                <span className="text-sm font-medium text-white">{t}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          NEXT PROJECT
      ===================================================== */}
      <section className="container-custom pb-16">
        <Link
          to={`/projects/${nextProject.id}`}
          className="card group flex items-center justify-between p-8 hover:border-primary-500/60 transition-all"
        >
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
              Next project
            </p>
            <div className="flex items-center gap-3">
              <span className="text-3xl">{nextProject.icon}</span>
              <div>
                <p className="text-xl font-semibold text-white group-hover:text-accent transition-colors">
                  {nextProject.title}
                </p>
                <p className="text-sm text-gray-500">
                  {nextProject.subtitle}
                </p>
              </div>
            </div>
          </div>
          <FiArrowRight
            size={24}
            className="text-gray-500 group-hover:text-accent group-hover:translate-x-1 transition-all"
          />
        </Link>
      </section>
    </div>
  )
}

/* =====================================================
   Helper
===================================================== */
function MetaRow({ label, value }) {
  return (
    <div>
      <dt className="text-xs text-gray-500 uppercase tracking-wider mb-1">
        {label}
      </dt>
      <dd className="text-white">{value}</dd>
    </div>
  )
}