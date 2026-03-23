import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function Layout() {
  return (
    <div className="flex h-screen w-screen p-4 md:p-8 lg:p-12 overflow-hidden dot-grid bg-black">
      <div 
        className="flex h-full w-full rounded-[3rem] border border-archivist-border overflow-hidden shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)] bg-archivist-dark relative" 
      >
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Topbar />
          <main className="flex-1 overflow-y-auto p-16 lg:p-24 custom-scrollbar">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
