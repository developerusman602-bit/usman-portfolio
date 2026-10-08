import { useEffect, useState } from 'react'

export default function StatusDot({ status }) {
  const [pulse, setPulse] = useState(true)

  useEffect(() => {
    // Animate pulse on mount
    const t = setInterval(() => setPulse((p) => !p), 2000)
    return () => clearInterval(t)
  }, [])

  const config = {
    live: {
      color: 'bg-emerald-500',
      ring: 'bg-emerald-500',
      label: 'Live',
    },
    demo: {
      color: 'bg-amber-500',
      ring: 'bg-amber-500',
      label: 'Demo',
    },
    archived: {
      color: 'bg-gray-500',
      ring: 'bg-gray-500',
      label: 'Archived',
    },
  }[status] || { color: 'bg-gray-500', ring: 'bg-gray-500', label: 'Unknown' }

  return (
    <span className="inline-flex items-center gap-2 text-xs font-medium text-gray-400">
      <span className="relative flex h-2 w-2">
        {status === 'live' && (
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full ${config.ring} opacity-75`}
          />
        )}
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${config.color}`}
        />
      </span>
      {config.label}
    </span>
  )
}