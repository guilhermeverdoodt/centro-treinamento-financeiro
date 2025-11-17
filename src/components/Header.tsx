import { Link, useLocation } from 'react-router-dom'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu, PiggyBank, Settings, User, LogOut } from 'lucide-react'
import { SidebarNav } from './Sidebar'

const pageTitles: { [key: string]: string } = {
  '/': 'Dashboard',
  '/cash-flow': 'Fluxo de Caixa',
  '/open-finance': 'Open Finance',
  '/debts': 'Gestão de Dívidas',
  '/whatsapp': 'Integração WhatsApp',
  '/settings': 'Configurações',
  '/profile': 'Meu Perfil',
}

export const Header = () => {
  const location = useLocation()
  const pageTitle =
    pageTitles[location.pathname] || 'Centro de Treinamento Financeiro'

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/95 px-4 backdrop-blur-sm md:px-6 shadow-header-shadow">
      <div className="flex items-center gap-4 md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col p-0">
            <div className="flex h-16 items-center border-b px-6">
              <Link to="/" className="flex items-center gap-2 font-semibold">
                <PiggyBank className="h-6 w-6 text-primary" />
                <span>CT Financeiro</span>
              </Link>
            </div>
            <SidebarNav isMobile={true} />
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex-1 text-center md:text-left">
        <h1 className="text-lg font-semibold">{pageTitle}</h1>
      </div>

      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="h-10 w-10 cursor-pointer border-2 border-primary">
              <AvatarImage
                src="https://img.usecurling.com/ppl/medium?gender=male&seed=1"
                alt="Avatar"
              />
              <AvatarFallback>UE</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to="/profile">
                <User className="mr-2 h-4 w-4" />
                <span>Meu Perfil</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/settings">
                <Settings className="mr-2 h-4 w-4" />
                <span>Configurações</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Sair</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
