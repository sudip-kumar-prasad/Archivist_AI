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
  GraduationCap
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
        <div className="w-12 h-12 rounded-[1rem] bg-[#a87ffb] flex items-center justify-center shadow-[0_8px_30px_rgba(168,127,251,0.4)]">
          <GraduationCap size={28} className="text-white" />
        </div>
        <div className="space-y-0.5">
          <h2 className="font-black text-[17px] tracking-tight text-white italic">The Archivist</h2>
          <p className="text-[10px] uppercase tracking-[0.25em] font-black text-[#52525b]">ACADEMIC SANCTUARY</p>
        </div>
      </div>

      {/* New Session Button */}
      <div className="px-5 mb-8">
        <button
          onClick={() => navigate('/chat')}
          className="w-full h-[56px] flex items-center justify-center gap-3 rounded-[1.25rem] bg-gradient-to-br from-[#a87ffb] to-[#8b5cf6] text-white font-black text-[15px] uppercase tracking-widest transition-all hover:scale-[1.03] hover:brightness-110 shadow-[0_12px_40px_rgba(168,127,246,0.25)] active:scale-95"
        >
          <Plus size={22} strokeWidth={3} />
          New Session
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1.5 pt-4">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-5 px-5 py-4 rounded-2xl text-[14px] font-black uppercase tracking-widest transition-all group ${
                isActive
                  ? 'text-white bg-[#18181b] shadow-inner'
                  : 'text-[#52525b] hover:text-zinc-300 hover:bg-white/5'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className="relative">
                  {isActive && (
                    <div className="absolute -left-[30px] top-1/2 -translate-y-1/2 w-2 h-7 rounded-r-full bg-[#a87ffb] shadow-[0_0_15px_rgba(168,127,251,0.5)]"></div>
                  )}
                  <Icon 
                    size={22} 
                    className={isActive ? 'text-[#a87ffb]' : 'text-zinc-800 group-hover:text-zinc-500'} 
                    strokeWidth={2.5}
                  />
                </div>
                <span className={isActive ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'}>{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Bottom Actions */}
      <div className="mt-auto px-4 pb-12 space-y-1.5 border-t border-[#1f1f22] pt-8">
        <NavLink
          to="/settings"
          className="flex items-center gap-5 px-5 py-4 rounded-2xl text-[12px] font-black uppercase tracking-widest text-[#52525b] transition-all hover:text-zinc-300 hover:bg-white/5 group"
        >
          <Settings size={22} className="text-zinc-800 group-hover:text-zinc-500" />
          <span className="opacity-40 group-hover:opacity-100">Settings</span>
        </NavLink>
        <NavLink
          to="/support"
          className="flex items-center gap-5 px-5 py-4 rounded-2xl text-[12px] font-black uppercase tracking-widest text-[#52525b] transition-all hover:text-zinc-300 hover:bg-white/5 group"
        >
          <SupportIcon size={22} className="text-zinc-800 group-hover:text-zinc-500" />
          <span className="opacity-40 group-hover:opacity-100">Support</span>
        </NavLink>
      </div>
    </aside>
  )
}
