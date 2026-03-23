import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function Layout() {
  return (
    // Outer shell: dark with visible dot-grid pattern
    <div
      className="h-screen w-screen flex items-center justify-center"
      style={{
        backgroundColor: '#0e0e0e',
        backgroundImage: 'radial-gradient(rgba(80,80,100,0.3) 1px, transparent 1px)',
        backgroundSize: '22px 22px',
        padding: '12px',
      }}
    >
      {/* Inner rounded app window */}
      <div className="flex h-full w-full overflow-hidden" style={{
        borderRadius: '14px',
        border: '1px solid rgba(255,255,255,0.09)',
        boxShadow: '0 0 0 1px rgba(255,255,255,0.03), 0 30px 80px rgba(0,0,0,0.9)',
      }}>
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden bg-[#1b1b1f]">
          <Topbar />
          <main className="flex-1 overflow-y-auto custom-scrollbar">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
