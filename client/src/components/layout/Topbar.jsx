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
          className={`text-[15px] font-bold cursor-pointer transition-colors duration-300 ${
            link.active ? 'text-white' : 'text-zinc-600 hover:text-white'
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
    <header className="flex items-center justify-between px-12 py-8 border-b border-[#1f1f22] bg-transparent backdrop-blur-sm shrink-0">
      {/* Brand & Nav */}
      <div className="flex items-center">
        <h1 className="text-[20px] font-black tracking-tight text-white italic">
          Archivist <span className="text-[#a87ffb] not-italic ml-0.5">AI</span>
        </h1>
        <TopbarLinks />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-8">
        <div className="hidden lg:flex items-center gap-4 px-6 py-3 rounded-full bg-[#18181b] border border-[#27272a] w-[320px] shadow-inner focus-within:border-[#a87ffb]/40 transition-all duration-500">
          <Search size={18} className="text-zinc-600" />
          <input 
            type="text" 
            placeholder="Search archives..." 
            className="bg-transparent border-none outline-none w-full text-white placeholder-zinc-800 text-[14px] font-medium"
          />
        </div>

        <div className="flex items-center gap-3">
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 text-zinc-500 transition-all active:scale-95">
            <Moon size={22} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 text-zinc-500 relative transition-all active:scale-95">
            <Bell size={22} />
            <div className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full border-2 border-[#0a0a0a] bg-[#34d399] shadow-[0_0_10px_rgba(52,211,153,0.4)]"></div>
          </button>
        </div>

        <div className="w-10 h-10 rounded-full border-2 border-white/5 overflow-hidden hover:border-white/20 transition-all cursor-pointer shadow-md">
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
