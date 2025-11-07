import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { useEffect, useState } from 'react'

import Layout from './components/Layout'
import Index from './pages/Index'
import Splash from './pages/Splash'
import Onboarding from './pages/Onboarding'
import CashFlow from './pages/CashFlow'
import OpenFinance from './pages/OpenFinance'
import Debts from './pages/Debts'
import Whatsapp from './pages/Whatsapp'
import Settings from './pages/Settings'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'

const AppRoutes = () => {
  const location = useLocation()
  const [showSplash, setShowSplash] = useState(location.pathname === '/splash')

  useEffect(() => {
    if (location.pathname === '/splash') {
      setShowSplash(true)
      const timer = setTimeout(() => setShowSplash(false), 2500) // Match splash screen duration
      return () => clearTimeout(timer)
    } else {
      setShowSplash(false)
    }
  }, [location.pathname])

  if (showSplash) {
    return <Splash />
  }

  return (
    <Routes>
      <Route path="/onboarding" element={<Onboarding />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Index />} />
        <Route path="/cash-flow" element={<CashFlow />} />
        <Route path="/open-finance" element={<OpenFinance />} />
        <Route path="/debts" element={<Debts />} />
        <Route path="/whatsapp" element={<Whatsapp />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

const App = () => (
  <BrowserRouter>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/splash" element={<Splash />} />
        <Route path="*" element={<AppRoutes />} />
      </Routes>
    </TooltipProvider>
  </BrowserRouter>
)

export default App
