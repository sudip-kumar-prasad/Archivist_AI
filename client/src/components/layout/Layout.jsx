import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function Layout() {
  return (
    <div
      className="h-screen w-screen bg-[#0d0d0d] flex items-center justify-center"
      style={{
        backgroundImage: 'radial-gradient(rgba(100,100,130,0.25) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        padding: '10px'
      }}
    >
      <div className="flex h-full w-full rounded-[14px] overflow-hidden border border-white/[0.1] shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_30px_80px_rgba(0,0,0,0.9)]">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden bg-[#1b1b1f]">
          <Topbar />
          <main className="flex-1 overflow-y-auto custom-scrollbar bg-[#1b1b1f]">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
