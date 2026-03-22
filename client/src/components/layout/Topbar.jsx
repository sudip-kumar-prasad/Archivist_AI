import { Search, Moon, Bell } from 'lucide-react'
import { useLocation } from 'react-router-dom'

const pageTitles = {
  '/dashboard':       'Dashboard',
  '/chat':            'AI Chat',
  '/summarizer':      'Summarizer',
  '/qa-generator':    'Q&A Generator',
  '/resume-analyzer': 'Resume Analyzer',
  '/meme-generator':  'Meme Generator',
}

export default function Topbar() {
  const { pathname } = useLocation()
  const title = pageTitles[pathname] ?? 'Archivist AI'

  return (
    <header
      className="flex items-center justify-between px-6 py-3 border-b shrink-0"
      style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border)' }}
    >
      {/* Left: brand + page title */}
      <div className="flex items-center gap-6">
        <span className="font-bold text-base" style={{ color: 'var(--text-primary)' }}>
          Archivist <span style={{ color: 'var(--accent-purple)' }}>AI</span>
        </span>
        <nav className="hidden md:flex items-center gap-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
          <span
            className="font-semibold pb-0.5 border-b-2"
            style={{ color: 'var(--text-primary)', borderColor: 'var(--accent-purple)' }}
          >
            {title}
          </span>
        </nav>
      </div>

      {/* Right: search + actions */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div
          className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm"
          style={{ background: 'var(--bg-input)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}
        >
          <Search size={14} />
          <span>Search archives...</span>
        </div>

        {/* Dark mode toggle placeholder */}
        <button
          className="w-8 h-8 flex items-center justify-center rounded-lg transition hover:bg-white/5"
          style={{ color: 'var(--text-secondary)' }}
          aria-label="Toggle dark mode"
        >
          <Moon size={16} />
        </button>

        {/* Notifications */}
        <button
          className="w-8 h-8 flex items-center justify-center rounded-lg transition hover:bg-white/5"
          style={{ color: 'var(--text-secondary)' }}
          aria-label="Notifications"
        >
          <Bell size={16} />
        </button>

        {/* Avatar */}
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
          style={{ background: 'var(--accent-purple)', color: '#fff' }}
        >
          A
        </div>
      </div>
    </header>
  )
}
