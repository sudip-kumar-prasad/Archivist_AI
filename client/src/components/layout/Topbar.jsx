import { Search, Moon, Bell } from 'lucide-react'
import { useLocation } from 'react-router-dom'

const pageLinks = {
  '/dashboard': [
    { label: 'Dashboard', active: true },
    { label: 'Archive', active: false },
    { label: 'Resources', active: false },
  ],
  '/': [
    { label: 'Dashboard', active: true },
    { label: 'Archive', active: false },
    { label: 'Resources', active: false },
  ],
  '/chat': [
    { label: 'Library', active: false },
    { label: 'AI Chat', active: true },
    { label: 'Documents', active: false },
  ],
  '/qa-generator': [
    { label: 'Dashboard', active: false },
    { label: 'Explore', active: false },
    { label: 'Q&A Generator', active: true },
  ],
  '/summarizer': [],
  '/resume-analyzer': [],
}

export default function Topbar() {
  const { pathname } = useLocation()
  const links = pageLinks[pathname] || []

  return (
    <header className="flex items-center justify-between px-8 py-4 border-b border-white/[0.06] bg-[#1a1a1a] shrink-0">
      <div className="flex items-center gap-8">
        {/* Brand */}
        <span className="text-[16px] font-bold text-white tracking-tight">
          Archivist <span className="text-[#a87ffb]">AI</span>
        </span>
        {/* Page Nav Links */}
        {links.length > 0 && (
          <nav className="flex items-center gap-6">
            {links.map((link, i) => (
              <span
                key={i}
                className={`text-[13px] font-semibold cursor-pointer transition-colors ${
                  link.active
                    ? 'text-white border-b-2 border-[#a87ffb] pb-0.5'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {link.label}
              </span>
            ))}
          </nav>
        )}
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#222222] border border-white/[0.06] w-[200px]">
          <Search size={14} className="text-zinc-600 shrink-0" />
          <input
            type="text"
            placeholder="Search archives..."
            className="bg-transparent border-none outline-none w-full text-white placeholder-zinc-700 text-[12px]"
          />
        </div>
        <button className="w-8 h-8 flex items-center justify-center rounded-full text-zinc-500 hover:bg-white/[0.06] transition-all">
          <Moon size={16} />
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full text-zinc-500 hover:bg-white/[0.06] relative transition-all">
          <Bell size={16} />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#34d399] border border-[#1a1a1a]" />
        </button>
        <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10 cursor-pointer">
          <img
            src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=f59e0b"
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  )
}
