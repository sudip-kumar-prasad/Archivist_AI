import { Search, Moon, Bell } from 'lucide-react'
import { useLocation } from 'react-router-dom'

const TopbarLinks = () => {
  const { pathname } = useLocation()
  
  if (pathname === '/dashboard' || pathname === '/') {
    return (
      <nav className="hidden md:flex items-center gap-6 ml-10 text-[14px] font-medium">
        <span className="text-white">Dashboard</span>
        <span className="text-archivist-muted transition hover:text-white cursor-pointer">Archive</span>
        <span className="text-archivist-muted transition hover:text-white cursor-pointer">Resources</span>
      </nav>
    )
  }
  
  if (pathname === '/chat') {
    return (
      <nav className="hidden md:flex items-center gap-6 ml-10 text-[14px] font-medium">
        <span className="text-archivist-muted transition hover:text-white cursor-pointer">Library</span>
        <span className="text-white">AI Chat</span>
        <span className="text-archivist-muted transition hover:text-white cursor-pointer">Documents</span>
      </nav>
    )
  }
  
  if (pathname === '/qa-generator') {
    return (
      <nav className="hidden md:flex items-center gap-6 ml-10 text-[14px] font-medium">
        <span className="text-archivist-muted transition hover:text-white cursor-pointer">Dashboard</span>
        <span className="text-archivist-muted transition hover:text-white cursor-pointer">Explore</span>
        <span className="text-white">Q&A Generator</span>
      </nav>
    )
  }

  return null;
}

export default function Topbar() {
  return (
    <header
      className="flex items-center justify-between px-8 py-5 border-b shrink-0 bg-transparent border-archivist-border"
    >
      {/* Left: brand + navigation */}
      <div className="flex items-center">
        <span className="font-bold text-[17px] tracking-tight text-white">
          Archivist <span className="text-archivist-purple">AI</span>
        </span>
        <TopbarLinks />
      </div>

      {/* Right: search + actions */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div
          className="hidden md:flex items-center gap-3 px-4 py-2.5 rounded-full text-sm w-64 shadow-inner bg-archivist-input border border-archivist-border text-archivist-muted"
        >
          <Search size={15} />
          <input 
            type="text" 
            placeholder="Search archives..." 
            className="bg-transparent border-none outline-none w-full text-white placeholder-zinc-500 text-[13px]"
          />
        </div>

        {/* Dark mode toggle */}
        <button
          className="w-10 h-10 flex items-center justify-center rounded-full transition hover:bg-white/5 text-zinc-400"
          aria-label="Toggle dark mode"
        >
          <Moon size={18} />
        </button>

        {/* Notifications */}
        <button
          className="w-10 h-10 flex items-center justify-center rounded-full transition hover:bg-white/5 relative text-zinc-400"
          aria-label="Notifications"
        >
          <Bell size={18} />
          <div className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full border-2 border-black bg-archivist-green"></div>
        </button>

        {/* Avatar */}
        <img 
          src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=f59e0b" 
          alt="Avatar" 
          className="w-9 h-9 rounded-full border border-white/10 cursor-pointer hover:border-white/30 transition shadow-sm"
        />
      </div>
    </header>
  )
}
