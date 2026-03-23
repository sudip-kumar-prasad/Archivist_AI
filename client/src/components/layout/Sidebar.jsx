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
  BookOpen
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
    <aside className="flex flex-col w-[210px] shrink-0 bg-[#141418] border-r border-white/[0.06]"
      style={{ backgroundImage: 'radial-gradient(circle, rgba(55,55,65,0.4) 1px, transparent 1px)', backgroundSize: '18px 18px' }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-5 pt-7 pb-5">
        <div className="w-9 h-9 rounded-full bg-[#7c5cbf] flex items-center justify-center shrink-0 shadow-[0_4px_15px_rgba(124,92,191,0.4)]">
          <BookOpen size={15} className="text-white" />
        </div>
        <div>
          <p className="text-white font-bold text-[14px] leading-tight">The Archivist</p>
          <p className="text-[9px] uppercase tracking-[0.15em] text-zinc-600 leading-tight mt-0.5">Academic Sanctuary</p>
        </div>
      </div>

      {/* New Session */}
      <div className="px-4 pb-5">
        <button
          onClick={() => navigate('/chat')}
          className="w-full h-9 flex items-center justify-center gap-2 rounded-full bg-[#7c5cbf] hover:bg-[#8d6bd0] text-white font-semibold text-[13px] transition-all active:scale-95 shadow-[0_4px_15px_rgba(124,92,191,0.25)]"
        >
          <Plus size={15} strokeWidth={2.5} />
          New Session
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-2 space-y-0.5">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] font-medium transition-all group relative ${
                isActive
                  ? 'text-white'
                  : 'text-zinc-600 hover:text-zinc-300 hover:bg-white/[0.04]'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-4 rounded-r-full bg-[#a87ffb]" />
                )}
                <Icon 
                  size={15} 
                  className={isActive ? 'text-white' : 'text-zinc-600 group-hover:text-zinc-400'} 
                  strokeWidth={isActive ? 2 : 1.8} 
                />
                <span>{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Bottom */}
      <div className="px-2 pb-5 pt-4 border-t border-white/[0.06] space-y-0.5 mt-auto">
        <NavLink to="/settings" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] font-medium text-zinc-600 hover:text-zinc-300 hover:bg-white/[0.04] transition-all group">
          <Settings size={15} className="text-zinc-700 group-hover:text-zinc-500" strokeWidth={1.8} />
          <span>Settings</span>
        </NavLink>
        <NavLink to="/support" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] font-medium text-zinc-600 hover:text-zinc-300 hover:bg-white/[0.04] transition-all group">
          <SupportIcon size={15} className="text-zinc-700 group-hover:text-zinc-500" strokeWidth={1.8} />
          <span>Support</span>
        </NavLink>
      </div>
    </aside>
  )
}
