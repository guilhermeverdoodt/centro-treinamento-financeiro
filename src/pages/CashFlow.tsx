import { useState } from 'react'
import {
  PlusCircle,
  MoreHorizontal,
  Edit,
  Trash2,
  ArrowUpDown,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { format } from 'date-fns'

const mockTransactions = [
  {
    id: 1,
    date: '2025-11-05',
    description: 'Salário Mensal',
    category: 'Salário',
    type: 'Entrada',
    value: 5000.0,
    origin: 'Manual',
  },
  {
    id: 2,
    date: '2025-11-05',
    description: 'Aluguel',
    category: 'Moradia',
    type: 'Saída',
    value: 1500.0,
    origin: 'Banco X',
  },
  {
    id: 3,
    date: '2025-11-06',
    description: 'Supermercado',
    category: 'Alimentação',
    type: 'Saída',
    value: 350.75,
    origin: 'WhatsApp',
  },
  {
    id: 4,
    date: '2025-11-07',
    description: 'Freelance Website',
    category: 'Renda Extra',
    type: 'Entrada',
    value: 800.0,
    origin: 'Manual',
  },
  {
    id: 5,
    date: '2025-11-08',
    description: 'Conta de Luz',
    category: 'Contas',
    type: 'Saída',
    value: 120.5,
    origin: 'Banco Y',
  },
]

const CashFlow = () => {
  const [date, setDate] = useState<Date>()

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Filtros e Pesquisa</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Input placeholder="Pesquisar por descrição..." />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Filtrar por tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas</SelectItem>
              <SelectItem value="entry">Entradas</SelectItem>
              <SelectItem value="exit">Saídas</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Filtrar por categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="salary">Salário</SelectItem>
              <SelectItem value="housing">Moradia</SelectItem>
              <SelectItem value="food">Alimentação</SelectItem>
            </SelectContent>
          </Select>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                {date ? format(date, 'PPP') : <span>Selecione uma data</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Transações</CardTitle>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" /> Adicionar Nova Transação
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Nova Transação</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="type" className="text-right">
                    Tipo
                  </Label>
                  <Select>
                    <SelectTrigger className="col-span-3">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="entry">Entrada</SelectItem>
                      <SelectItem value="exit">Saída</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Descrição
                  </Label>
                  <Input id="description" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="value" className="text-right">
                    Valor
                  </Label>
                  <Input id="value" type="number" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="date" className="text-right">
                    Data
                  </Label>
                  <Input id="date" type="date" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="category" className="text-right">
                    Categoria
                  </Label>
                  <Select>
                    <SelectTrigger className="col-span-3">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="food">Alimentação</SelectItem>
                      <SelectItem value="housing">Moradia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Salvar</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <Button variant="ghost">
                    Data <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>Descrição</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Origem</TableHead>
                <TableHead className="text-right">Valor</TableHead>
                <TableHead>
                  <span className="sr-only">Ações</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockTransactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>
                    {format(new Date(transaction.date), 'dd/MM/yyyy')}
                  </TableCell>
                  <TableCell className="font-medium">
                    {transaction.description}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{transaction.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <span
                      className={
                        transaction.type === 'Entrada'
                          ? 'text-entry'
                          : 'text-exit'
                      }
                    >
                      {transaction.type}
                    </span>
                  </TableCell>
                  <TableCell>{transaction.origin}</TableCell>
                  <TableCell
                    className={`text-right font-semibold ${transaction.type === 'Entrada' ? 'text-entry' : 'text-exit'}`}
                  >
                    R$ {transaction.value.toFixed(2)}
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
                          <Edit className="mr-2 h-4 w-4" /> Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" /> Excluir
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

export default CashFlow
