import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiGithub, FiExternalLink } from 'react-icons/fi'
import { projects } from '../data/projects'
import StatusDot from '../components/ui/StatusDot'

const FILTERS = [
  { id: 'all',      label: 'All Projects' },
  { id: 'live',     label: 'Live' },
  { id: 'demo',     label: 'Demo' },
  { id: 'archived', label: 'Archived' },
]

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const filtered = projects.filter((p) =>
    filter === 'all' ? true : p.status === filter
  )

  return (
    <div className="container-custom section-pad">

      {/* HEADER */}
      <div className="max-w-3xl mb-12">
        <div className="section-label">Portfolio</div>
        <h1 className="section-title">Things I've built</h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          Real projects — from idea to deployment. Every project below covers
          the full stack: frontend, backend, database, and server.
        </p>
      </div>

      {/* FILTERS */}
      <div className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-dark-border">
        {FILTERS.map((f) => {
          const count = projects.filter((p) =>
            f.id === 'all' ? true : p.status === f.id
          ).length

          return (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === f.id
                  ? 'bg-primary-700 text-white border border-primary-500'
                  : 'text-gray-400 hover:text-white border border-dark-border hover:border-primary-500/60'
              }`}
            >
              {f.label}
              <span className="ml-2 text-xs opacity-60">({count})</span>
            </button>
          )
        })}
      </div>

      {/* GRID */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500">No projects match this filter.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      )}
    </div>
  )
}

/* =====================================================
   Project Card
===================================================== */
function ProjectCard({ project }) {
  return (
    <div className="card group flex flex-col hover:border-primary-500/60 transition-all duration-300">

      {/* Visual */}
      <Link to={`/projects/${project.id}`} className="block mb-5">
        <div
          className={`w-full aspect-video rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}
        >
          <div className="text-6xl transition-transform duration-500 group-hover:scale-110">
            {project.icon}
          </div>
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="btn-primary text-sm">
              View details <FiArrowRight size={14} />
            </span>
          </div>
        </div>
      </Link>

      {/* Info */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-3 mb-2">
          <Link
            to={`/projects/${project.id}`}
            className="text-lg font-semibold text-white hover:text-accent transition-colors"
          >
            {project.title}
          </Link>
          <StatusDot status={project.status} />
        </div>

        <p className="text-sm text-accent mb-3">{project.subtitle}</p>

        <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-1">
          {project.description}
        </p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-[10px] px-2 py-1 rounded bg-dark-hover border border-dark-border text-gray-400"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-[10px] px-2 py-1 rounded bg-dark-hover border border-dark-border text-gray-500">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-4 border-t border-dark-border">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-white transition-colors"
            >
              <FiExternalLink size={12} /> Live
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-white transition-colors"
            >
              <FiGithub size={12} /> Code
            </a>
          )}
          <Link
            to={`/projects/${project.id}`}
            className="ml-auto inline-flex items-center gap-1.5 text-xs font-medium text-white hover:text-accent transition-colors"
          >
            Details <FiArrowRight size={12} />
          </Link>
        </div>
      </div>
    </div>
  )
}