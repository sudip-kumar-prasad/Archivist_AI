import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function Layout() {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-[#111111] p-3"
      style={{ backgroundImage: 'radial-gradient(circle, rgba(60,60,60,0.5) 1px, transparent 1px)', backgroundSize: '18px 18px' }}
    >
      <div className="flex h-full w-full rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_30px_80px_rgba(0,0,0,0.8)] bg-[#1a1a1a]">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden bg-[#1a1a1a]">
          <Topbar />
          <main className="flex-1 overflow-y-auto custom-scrollbar">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
