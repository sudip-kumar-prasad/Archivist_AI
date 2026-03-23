import { Search, Moon, Bell } from 'lucide-react'
import { useLocation } from 'react-router-dom'

const TopbarLinks = () => {
  const { pathname } = useLocation()
  
  const getLinks = () => {
    switch(pathname) {
      case '/dashboard':
      case '/':
        return [
          { label: 'Dashboard', active: true },
          { label: 'Archive', active: false },
          { label: 'Resources', active: false }
        ]
      case '/chat':
        return [
          { label: 'Library', active: false },
          { label: 'AI Chat', active: true },
          { label: 'Documents', active: false }
        ]
      case '/qa-generator':
        return [
          { label: 'Dashboard', active: false },
          { label: 'Explore', active: false },
          { label: 'Q&A Generator', active: true }
        ]
      case '/summarizer':
        return [
          { label: 'Library', active: false },
          { label: 'Summarizer', active: true },
          { label: 'Archives', active: false }
        ]
      case '/resume-analyzer':
        return [
          { label: 'Dashboard', active: false },
          { label: 'Resume Analyzer', active: true },
          { label: 'Benchmarks', active: false }
        ]
      default:
        return []
    }
  }

  const links = getLinks()
  if (links.length === 0) return null

  return (
    <nav className="hidden md:flex items-center gap-10 ml-12">
      {links.map((link, i) => (
        <span 
          key={i} 
          className={`text-[15px] font-black uppercase tracking-[0.15em] cursor-pointer transition-all duration-300 ${
            link.active ? 'text-white' : 'text-[#52525b] hover:text-zinc-300'
          }`}
        >
          {link.label}
        </span>
      ))}
    </nav>
  )
}

export default function Topbar() {
  return (
    <header className="flex items-center justify-between px-12 py-8 border-b border-[#1f1f22] bg-transparent shrink-0">
      {/* Brand & Nav */}
      <div className="flex items-center">
        <h1 className="text-[22px] font-black tracking-tighter text-white italic">
          Archivist <span className="text-[#a87ffb] not-italic">AI</span>
        </h1>
        <TopbarLinks />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-8">
        <div className="hidden lg:flex items-center gap-4 px-6 py-3 rounded-full bg-[#18181b] border border-[#27272a] w-[360px] shadow-inner focus-within:border-[#a87ffb]/40 transition-all duration-500">
          <Search size={18} className="text-[#52525b]" />
          <input 
            type="text" 
            placeholder="Search archives..." 
            className="bg-transparent border-none outline-none w-full text-white placeholder-zinc-800 text-[14px] font-bold tracking-tight"
          />
        </div>

        <div className="flex items-center gap-3">
          <button className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-white/5 text-zinc-500 transition-all active:scale-90">
            <Moon size={22} fill="currentColor" className="opacity-20" />
          </button>
          <button className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-white/5 text-zinc-500 relative transition-all active:scale-90">
            <Bell size={22} />
            <div className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full border-2 border-[#0a0a0a] bg-[#34d399] shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
          </button>
        </div>

        <div className="w-11 h-11 rounded-full border-2 border-white/5 overflow-hidden hover:border-white/20 transition-all cursor-pointer shadow-lg active:scale-95">
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
