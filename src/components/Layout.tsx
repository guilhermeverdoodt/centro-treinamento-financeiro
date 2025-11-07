import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Sidebar } from './Sidebar'

export default function Layout() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[240px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <main className="flex-1 p-4 md:p-6 lg:p-8 bg-background">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
