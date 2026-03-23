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
  Library
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
      className="flex flex-col w-64 shrink-0 border-r border-[#1f1f22] bg-[#0a0a0a]"
    >
      {/* Logo Section */}
      <div className="flex items-center gap-4 px-6 py-12">
        <div className="w-11 h-11 rounded-xl bg-[#a87ffb] flex items-center justify-center shadow-[0_8px_25px_rgba(168,127,251,0.3)]">
          <Library size={24} className="text-white fill-white/20" />
        </div>
        <div className="space-y-0.5">
          <h2 className="font-black text-[18px] tracking-tight text-white leading-tight">The Archivist</h2>
          <p className="text-[9px] uppercase tracking-[0.2em] font-black text-zinc-600">Academic Sanctuary</p>
        </div>
      </div>

      {/* New Session Button */}
      <div className="px-5 mb-8">
        <button
          onClick={() => navigate('/chat')}
          className="w-full h-14 flex items-center justify-center gap-3 rounded-2xl bg-[#a87ffb] text-white font-black text-[15px] transition-all hover:scale-[1.02] hover:brightness-110 shadow-[0_12px_40px_rgba(168,127,246,0.2)] active:scale-95"
        >
          <Plus size={20} strokeWidth={3} />
          New Session
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 space-y-1.5 pt-4">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-5 px-4 py-4 rounded-xl text-[14px] font-bold transition-all group relative ${
                isActive
                  ? 'text-white bg-[#18181b]'
                  : 'text-[#52525b] hover:text-white hover:bg-white/5'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className="relative flex items-center">
                  {isActive && (
                    <div className="absolute -left-[18px] top-1/2 -translate-y-1/2 w-[2px] h-6 rounded-r-full bg-[#a87ffb] shadow-[0_0_15px_rgba(168,127,251,0.5)]"></div>
                  )}
                  <Icon 
                    size={20} 
                    className={isActive ? 'text-[#a87ffb]' : 'text-zinc-800 group-hover:text-zinc-500'} 
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                </div>
                <span className={isActive ? 'opacity-100' : 'opacity-80'}>{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Bottom Actions */}
      <div className="mt-auto px-4 pb-12 space-y-1 border-t border-[#1f1f22] pt-8">
        <NavLink
          to="/settings"
          className="flex items-center gap-5 px-4 py-4 rounded-xl text-[14px] font-bold text-[#52525b] transition-all hover:text-white hover:bg-white/5 group"
        >
          <Settings size={20} className="text-zinc-800 group-hover:text-zinc-500" />
          <span className="opacity-80">Settings</span>
        </NavLink>
        <NavLink
          to="/support"
          className="flex items-center gap-5 px-4 py-4 rounded-xl text-[14px] font-bold text-[#52525b] transition-all hover:text-white hover:bg-white/5 group"
        >
          <SupportIcon size={20} className="text-zinc-800 group-hover:text-zinc-500" />
          <span className="opacity-80">Support</span>
        </NavLink>
      </div>
    </aside>
  )
}
