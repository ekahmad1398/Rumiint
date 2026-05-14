import { Outlet } from 'react-router-dom'

import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout() {
  return (
    <div className="relative overflow-x-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top_left,rgba(31,169,200,0.16),transparent_34%),radial-gradient(circle_at_top_right,rgba(239,197,111,0.14),transparent_22%)]" />
      <Navbar />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
