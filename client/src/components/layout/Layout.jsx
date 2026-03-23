import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function Layout() {
  return (
    <div className="flex h-screen w-screen p-6 md:p-10 overflow-hidden dot-grid bg-[#0a0a0a]">
      <div 
        className="flex h-full w-full rounded-[2.5rem] border border-[#1f1f22] overflow-hidden shadow-[0_20px_100px_rgba(0,0,0,0.8)] bg-[#0a0a0a] relative" 
      >
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Topbar />
          <main className="flex-1 overflow-y-auto p-12 lg:p-16 custom-scrollbar">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
