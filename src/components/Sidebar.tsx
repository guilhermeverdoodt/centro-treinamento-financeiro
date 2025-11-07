import { NavLink, Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  LayoutDashboard,
  ArrowLeftRight,
  Banknote,
  Landmark,
  Settings,
  PiggyBank,
} from 'lucide-react'

const navItems = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/cash-flow', label: 'Fluxo de Caixa', icon: ArrowLeftRight },
  { to: '/open-finance', label: 'Open Finance', icon: Landmark },
  { to: '/debts', label: 'Dívidas', icon: Banknote },
  { to: '/settings', label: 'Configurações', icon: Settings },
]

export const SidebarNav = ({ isMobile = false }: { isMobile?: boolean }) => (
  <nav className={cn('flex flex-col gap-2 p-4', isMobile ? 'flex-grow' : '')}>
    {navItems.map((item) => (
      <NavLink
        key={item.to}
        to={item.to}
        end
        className={({ isActive }) =>
          cn(
            'flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-accent',
            isActive && 'bg-accent text-primary font-semibold',
          )
        }
      >
        <item.icon className="h-5 w-5" />
        {item.label}
      </NavLink>
    ))}
  </nav>
)

export const Sidebar = () => {
  return (
    <aside className="hidden md:flex md:flex-col h-full w-60 border-r bg-card">
      <div className="flex h-16 items-center border-b px-6">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <PiggyBank className="h-7 w-7 text-primary" />
          <span>CT Financeiro</span>
        </Link>
      </div>
      <div className="flex-1">
        <SidebarNav />
      </div>
    </aside>
  )
}
