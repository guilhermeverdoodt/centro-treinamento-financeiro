import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  ArrowLeftRight,
  Banknote,
  Landmark,
} from 'lucide-react'

const navItems = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/cash-flow', label: 'Fluxo', icon: ArrowLeftRight },
  { to: '/debts', label: 'Dívidas', icon: Banknote },
  { to: '/open-finance', label: 'Bancos', icon: Landmark },
]

export const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 md:hidden border-t bg-card dark:bg-[hsl(223,33%,65%)]">
      <div className="grid h-16 grid-cols-4">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              cn(
                'flex flex-col items-center justify-center gap-1 text-xs font-medium transition-colors',
                isActive
                  ? 'text-primary dark:text-primary-foreground'
                  : 'text-muted-foreground dark:text-foreground hover:text-primary dark:hover:text-primary-foreground',
              )
            }
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
