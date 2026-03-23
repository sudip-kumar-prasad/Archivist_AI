import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function Layout() {
  return (
    <div className="flex h-screen w-screen p-4 md:p-6 overflow-hidden dot-grid" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div 
        className="flex h-full w-full rounded-[1.5rem] border overflow-hidden shadow-2xl" 
        style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-secondary)' }}
      >
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden" style={{ backgroundColor: 'var(--bg-main)' }}>
          <Topbar />
          <main className="flex-1 overflow-y-auto p-8 lg:p-12">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
