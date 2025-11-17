import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { MoreHorizontal, PlusCircle, HandCoins, Eye } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { format } from 'date-fns'

const mockDebts = [
  {
    id: 1,
    name: 'Empréstimo Carro',
    creditor: 'Banco X',
    originalValue: 30000,
    remainingValue: 12500,
    dueDate: '2028-12-31',
  },
  {
    id: 2,
    name: 'Cartão de Crédito',
    creditor: 'Banco Y',
    originalValue: 5000,
    remainingValue: 4500,
    dueDate: '2025-11-25',
  },
  {
    id: 3,
    name: 'Financiamento Apto',
    creditor: 'Caixa',
    originalValue: 250000,
    remainingValue: 210000,
    dueDate: '2045-01-15',
  },
]

const Debts = () => {
  const totalDebts = mockDebts.reduce(
    (acc, debt) => acc + debt.remainingValue,
    0,
  )

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Total de Dívidas</CardTitle>
            <CardDescription>
              Soma de todas as suas dívidas ativas.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">R$ {totalDebts.toFixed(2)}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Próximos Vencimentos</CardTitle>
            <CardDescription>
              Fique de olho nas suas próximas contas.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {mockDebts.slice(0, 2).map((debt) => (
              <div key={debt.id} className="flex justify-between items-center">
                <span>{debt.name}</span>
                <span className="font-semibold">
                  {format(new Date(debt.dueDate), 'dd/MM/yyyy')}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Dívidas Ativas</CardTitle>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" /> Adicionar Dívida
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Nova Dívida</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" placeholder="Ex: Empréstimo Carro" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="creditor">Credor</Label>
                  <Input id="creditor" placeholder="Ex: Banco X" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="value">Valor Original</Label>
                  <Input id="value" type="number" placeholder="R$ 0,00" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="due-date">Vencimento</Label>
                  <Input id="due-date" type="date" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Salvar Dívida</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          <div className="hidden md:block">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome da Dívida/Credor</TableHead>
                  <TableHead>Valor Restante</TableHead>
                  <TableHead>Progresso</TableHead>
                  <TableHead>Vencimento</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockDebts.map((debt) => {
                  const progress =
                    ((debt.originalValue - debt.remainingValue) /
                      debt.originalValue) *
                    100
                  return (
                    <TableRow key={debt.id}>
                      <TableCell>
                        <div className="font-medium">{debt.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {debt.creditor}
                        </div>
                      </TableCell>
                      <TableCell>R$ {debt.remainingValue.toFixed(2)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={progress} className="w-[100px]" />
                          <span>{progress.toFixed(0)}%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        {format(new Date(debt.dueDate), 'dd/MM/yyyy')}
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" /> Ver Detalhes
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <HandCoins className="mr-2 h-4 w-4" /> Registrar
                              Pagamento
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>
          <div className="space-y-4 md:hidden">
            {mockDebts.map((debt) => {
              const progress =
                ((debt.originalValue - debt.remainingValue) /
                  debt.originalValue) *
                100
              return (
                <Card key={debt.id} className="p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-1">
                      <p className="font-medium">{debt.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {debt.creditor}
                      </p>
                      <p className="text-sm text-muted-foreground pt-1">
                        Vence em: {format(new Date(debt.dueDate), 'dd/MM/yyyy')}
                      </p>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0 -mr-2">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" /> Ver Detalhes
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <HandCoins className="mr-2 h-4 w-4" /> Registrar
                          Pagamento
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="text-lg font-semibold">
                        R$ {debt.remainingValue.toFixed(2)}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {progress.toFixed(0)}% pago
                      </span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                </Card>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Debts
