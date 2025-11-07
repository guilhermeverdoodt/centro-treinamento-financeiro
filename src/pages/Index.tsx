import { Link } from 'react-router-dom'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { ArrowUpRight, PlusCircle, Landmark } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltipContent,
} from '@/components/ui/chart'

const cashFlowData = [
  { month: 'Out', entry: 4000, exit: 2400 },
  { month: 'Nov', entry: 3000, exit: 1398 },
  { month: 'Dez', entry: 5200, exit: 3800 },
  { month: 'Jan', entry: 2780, exit: 3908 },
  { month: 'Fev', entry: 1890, exit: 4800 },
  { month: 'Mar', entry: 2390, exit: 3800 },
]
const chartConfig: ChartConfig = {
  entry: { label: 'Entradas', color: 'hsl(var(--chart-2))' },
  exit: { label: 'Saídas', color: 'hsl(var(--chart-1))' },
}

const expenseData = [
  { name: 'Alimentação', value: 400, fill: 'hsl(var(--chart-1))' },
  { name: 'Moradia', value: 300, fill: 'hsl(var(--chart-2))' },
  { name: 'Transporte', value: 200, fill: 'hsl(var(--chart-3))' },
  { name: 'Lazer', value: 278, fill: 'hsl(var(--chart-4))' },
  { name: 'Outros', value: 189, fill: 'hsl(var(--chart-5))' },
]

const recentTransactions = [
  {
    id: 1,
    type: 'Saída',
    description: 'Supermercado',
    category: 'Alimentação',
    date: '05/11/2025',
    value: -350.75,
  },
  {
    id: 2,
    type: 'Entrada',
    description: 'Salário',
    category: 'Salário',
    date: '05/11/2025',
    value: 5000.0,
  },
  {
    id: 3,
    type: 'Saída',
    description: 'Aluguel',
    category: 'Moradia',
    date: '05/11/2025',
    value: -1500.0,
  },
]

const Index = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Saldo Atual</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">R$ 12.450,75</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total de Entradas (Mês)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-entry">R$ 5.800,00</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total de Saídas (Mês)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-exit">R$ 2.345,25</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Fluxo de Caixa Mensal</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <BarChart data={cashFlowData}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <Tooltip content={<ChartTooltipContent />} />
                <Bar dataKey="entry" fill="var(--color-entry)" radius={4} />
                <Bar dataKey="exit" fill="var(--color-exit)" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Categorias de Despesas</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}} className="h-[300px] w-full">
              <PieChart>
                <Tooltip content={<ChartTooltipContent nameKey="name" />} />
                <Pie
                  data={expenseData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Últimas Transações</CardTitle>
            <Button asChild variant="link" className="gap-1">
              <Link to="/cash-flow">
                Ver Todas <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Descrição</TableHead>
                  <TableHead>Categoria</TableHead>
                  <TableHead className="text-right">Valor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentTransactions.map((t) => (
                  <TableRow key={t.id}>
                    <TableCell>{t.description}</TableCell>
                    <TableCell>{t.category}</TableCell>
                    <TableCell
                      className={`text-right font-medium ${t.value > 0 ? 'text-entry' : 'text-exit'}`}
                    >
                      R$ {t.value.toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Resumo de Dívidas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">R$ 15.800,00</p>
              <p className="text-sm text-muted-foreground">em dívidas ativas</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link to="/debts">Gerenciar Dívidas</Link>
              </Button>
            </CardFooter>
          </Card>
          <div className="flex flex-col gap-2">
            <Button size="lg">
              <PlusCircle className="mr-2 h-5 w-5" /> Adicionar Transação
            </Button>
            <Button size="lg" variant="secondary">
              <Landmark className="mr-2 h-5 w-5" /> Conectar Banco
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
