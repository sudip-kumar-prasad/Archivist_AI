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
  Library,
} from 'lucide-react'

const navItems = [
  { to: '/dashboard',       icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/chat',            icon: MessageSquare,   label: 'AI Chat' },
  { to: '/summarizer',      icon: FileText,        label: 'Summarizer' },
  { to: '/qa-generator',    icon: HelpCircle,      label: 'Q&A Generator' },
  { to: '/resume-analyzer', icon: FileSearch,      label: 'Resume Analyzer' },
  { to: '/meme-generator',  icon: Smile,           label: 'Meme Generator' },
]

export default function Sidebar() {
  const navigate = useNavigate()

  return (
    <aside
      className="flex flex-col w-64 shrink-0 border-r border-archivist-border bg-archivist-dark"
    >
      {/* Logo */}
      <div className="flex items-center gap-4 px-6 py-6 border-b border-archivist-border">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center relative bg-archivist-purple-glow border border-archivist-purple/20"
        >
          <Library size={20} className="text-archivist-purple" />
          <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-archivist-purple"></div>
        </div>
        <div>
          <p className="font-bold text-[15px] tracking-tight text-white">The Archivist</p>
          <p className="text-[10px] uppercase tracking-wider font-semibold mt-0.5 text-archivist-muted">Academic Sanctuary</p>
        </div>
      </div>

      {/* New Session */}
      <div className="px-5 py-6">
        <button
          onClick={() => navigate('/chat')}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-[14px] text-white transition-all hover:brightness-110 shadow-lg shadow-purple-900/20 bg-archivist-purple"
        >
          <Plus size={18} />
          New Session
        </button>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-medium transition-all ${
                isActive
                  ? 'text-white bg-archivist-purple-glow'
                  : 'text-zinc-400 hover:bg-white/5 hover:text-zinc-300'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className="relative">
                  {isActive && (
                    <div className="absolute -left-7 top-1/2 -translate-y-1/2 w-1.5 h-6 rounded-r-full bg-archivist-purple"></div>
                  )}
                  <Icon size={18} className={isActive ? 'text-archivist-purple' : 'inherit'} />
                </div>
                <span>{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Bottom */}
      <div className="px-3 pb-6 pt-4 space-y-1 border-t border-archivist-border">
        <NavLink
          to="/settings"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-medium transition-all text-zinc-400 hover:bg-white/5 hover:text-zinc-300"
        >
          <Settings size={18} />
          Settings
        </NavLink>
        <NavLink
          to="/support"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-medium transition-all text-zinc-400 hover:bg-white/5 hover:text-zinc-300"
        >
          <SupportIcon size={18} />
          Support
        </NavLink>
      </div>
    </aside>
  )
}
