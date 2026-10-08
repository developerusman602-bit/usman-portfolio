import { useState } from 'react'
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiCheckCircle,
  FiClock,
  FiExternalLink,
} from 'react-icons/fi'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    // NOTE: Wire this up to a backend API later.
    // For now, we simulate success after 1.5s
    // so you can see the UX flow.
    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })

      // Reset after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
    }, 1500)
  }

  return (
    <div className="container-custom section-pad">

      {/* =====================================================
          HEADER
      ===================================================== */}
      <div className="max-w-3xl mb-12">
        <div className="section-label">Contact</div>
        <h1 className="section-title">Let's talk</h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          Have a project, an opportunity, or just want to say hi? Fill out the
          form below or reach me directly through any of the channels on the
          side.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-10">

        {/* =====================================================
            LEFT — Contact Info
        ===================================================== */}
        <div className="lg:col-span-5 space-y-5">

          <ContactCard
            icon={<FiMail size={18} />}
            label="Email"
            value="developerusman602@gmail.com"
            href="mailto:developerusman602@gmail.com"
          />

                    <ContactCard
            icon={<FiPhone size={18} />}
            label="Phone"
            value="+966 53 052 7154"
            subtitle="WhatsApp available"
            href="tel:+966530527154"
          />

          <ContactCard
            icon={<FiMapPin size={18} />}
            label="Location"
            value="Jeddah, Saudi Arabia"
            subtitle="Open to remote work"
          />

          <ContactCard
            icon={<FiClock size={18} />}
            label="Availability"
            value="Available for freelance"
            subtitle="Replies within 24 hours"
            highlight
          />

          {/* Social links */}
          <div className="card">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Find me online
            </h3>
            <div className="space-y-2">
              <SocialLink
                icon={<FiGithub size={16} />}
                label="GitHub"
                href="https://github.com/developerusman602-bit"
              />
              <SocialLink
                icon={<FiLinkedin size={16} />}
                label="LinkedIn"
                href="https://www.linkedin.com/in/muhammad-usman-60b315356/?isSelfProfile=true"
              />
              <SocialLink
                icon={<FiExternalLink size={16} />}
                label="Live Project — parkinsonsa.com"
                href="https://parkinsonsa.com"
              />
            </div>
          </div>
        </div>

        {/* =====================================================
            RIGHT — Form
        ===================================================== */}
        <div className="lg:col-span-7">
          <div className="card">
            {status === 'success' ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-5 text-emerald-400">
                  <FiCheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Message sent!
                </h3>
                <p className="text-gray-400">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-lg font-semibold text-white mb-1">
                  Send me a message
                </h3>

                <div className="grid md:grid-cols-2 gap-5">
                  <Field
                    label="Your name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                  <Field
                    label="Your email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <Field
                  label="Subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                />

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 bg-dark-hover border border-dark-border rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/40 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message <FiSend size={16} />
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-600 text-center">
                  Your message will be delivered directly to my inbox.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

/* =====================================================
   Helpers
===================================================== */
function ContactCard({ icon, label, value, subtitle, href, highlight }) {
  const content = (
    <div className="card hover:border-primary-500/60 transition-colors">
      <div className="flex items-start gap-4">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
            highlight
              ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
              : 'bg-primary-900/50 border border-primary-500/30 text-accent'
          }`}
        >
          {icon}
        </div>
        <div className="min-w-0">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
            {label}
          </p>
          <p className="text-white font-medium break-words">{value}</p>
          {subtitle && (
            <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    )
  }
  return content
}

function SocialLink({ icon, label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-dark-hover transition-colors"
    >
      {icon} {label}
    </a>
  )
}

function Field({ label, name, value, onChange, placeholder, type = 'text', required }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 bg-dark-hover border border-dark-border rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/40 transition-all"
      />
    </div>
  )
}