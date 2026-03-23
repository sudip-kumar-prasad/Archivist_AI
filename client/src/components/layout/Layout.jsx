import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function Layout() {
  return (
    <div className="flex h-screen w-screen p-4 md:p-6 overflow-hidden dot-grid bg-archivist-black">
      <div 
        className="flex h-full w-full rounded-[1.5rem] border border-archivist-border overflow-hidden shadow-2xl bg-archivist-dark" 
      >
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden bg-archivist-main">
          <Topbar />
          <main className="flex-1 overflow-y-auto p-8 lg:p-12">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
