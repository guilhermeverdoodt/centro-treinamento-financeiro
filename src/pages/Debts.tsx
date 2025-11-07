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
                <PlusCircle className="mr-2 h-4 w-4" /> Adicionar Nova Dívida
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Nova Dívida</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Nome
                  </Label>
                  <Input id="name" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="creditor" className="text-right">
                    Credor
                  </Label>
                  <Input id="creditor" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="value" className="text-right">
                    Valor Original
                  </Label>
                  <Input id="value" type="number" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="due-date" className="text-right">
                    Vencimento
                  </Label>
                  <Input id="due-date" type="date" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Salvar Dívida</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome da Dívida/Credor</TableHead>
                <TableHead>Valor Restante</TableHead>
                <TableHead>Progresso</TableHead>
                <TableHead>Vencimento</TableHead>
                <TableHead>
                  <span className="sr-only">Ações</span>
                </TableHead>
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
                    <TableCell>
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
        </CardContent>
      </Card>
    </div>
  )
}

export default Debts
