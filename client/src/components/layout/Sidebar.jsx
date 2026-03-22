import { NavLink, useNavigate } from 'react-router-dom'
import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  HelpCircle,
  FileSearch,
  Smile,
  Settings,
  HelpCircle as SupportIcon,
  Plus,
  BookOpen,
} from 'lucide-react'

const navItems = [
  { to: '/dashboard',       icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/chat',            icon: MessageSquare,   label: 'AI Chat' },
  { to: '/summarizer',      icon: FileText,         label: 'Summarizer' },
  { to: '/qa-generator',    icon: HelpCircle,       label: 'Q&A Generator' },
  { to: '/resume-analyzer', icon: FileSearch,       label: 'Resume Analyzer' },
  { to: '/meme-generator',  icon: Smile,            label: 'Meme Generator' },
]

export default function Sidebar() {
  const navigate = useNavigate()

  return (
    <aside
      className="flex flex-col w-56 shrink-0 border-r"
      style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border)' }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-5 py-5 border-b" style={{ borderColor: 'var(--border)' }}>
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ background: 'var(--accent-purple-glow)', border: '1px solid rgba(139,92,246,0.3)' }}
        >
          <BookOpen size={16} style={{ color: 'var(--accent-purple)' }} />
        </div>
        <div>
          <p className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>The Archivist</p>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Academic Sanctuary</p>
        </div>
      </div>

      {/* New Session */}
      <div className="px-4 py-4">
        <button
          onClick={() => navigate('/chat')}
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-sm text-white transition-all hover:brightness-110"
          style={{ background: 'var(--accent-purple)' }}
        >
          <Plus size={16} />
          New Session
        </button>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 px-3 space-y-0.5">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? 'text-white'
                  : 'hover:bg-white/5'
              }`
            }
            style={({ isActive }) => ({
              color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
              background: isActive ? 'var(--accent-purple-glow)' : undefined,
              borderLeft: isActive ? '2px solid var(--accent-purple)' : '2px solid transparent',
            })}
          >
            <Icon size={16} />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Bottom */}
      <div className="px-3 pb-5 space-y-0.5 border-t pt-4" style={{ borderColor: 'var(--border)' }}>
        <NavLink
          to="/settings"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all hover:bg-white/5"
          style={{ color: 'var(--text-secondary)' }}
        >
          <Settings size={16} />
          Settings
        </NavLink>
        <NavLink
          to="/support"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all hover:bg-white/5"
          style={{ color: 'var(--text-secondary)' }}
        >
          <SupportIcon size={16} />
          Support
        </NavLink>
      </div>
    </aside>
  )
}
