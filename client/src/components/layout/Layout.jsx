import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function Layout() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#141414]" style={{ backgroundImage: 'radial-gradient(circle, #2a2a2a 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      <div className="flex h-full w-full rounded-xl overflow-hidden border border-white/[0.06]" style={{ margin: '12px', height: 'calc(100vh - 24px)', width: 'calc(100vw - 24px)' }}>
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden bg-[#1a1a1a]">
          <Topbar />
          <main className="flex-1 overflow-y-auto custom-scrollbar bg-[#1a1a1a]">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
