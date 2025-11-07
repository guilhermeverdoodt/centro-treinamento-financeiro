import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Banknote, Link, Power, PowerOff } from 'lucide-react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

const connectedBanks = [
  {
    id: 1,
    name: 'Banco Neon',
    logo: 'https://img.usecurling.com/i?q=neon%20bank',
    status: 'Ativa',
    lastSync: 'Hoje, às 14:30',
  },
  {
    id: 2,
    name: 'Banco Inter',
    logo: 'https://img.usecurling.com/i?q=inter%20bank',
    status: 'Expirada',
    lastSync: 'Ontem, às 09:15',
  },
]

const OpenFinance = () => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Bancos Conectados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {connectedBanks.map((bank) => (
            <Card key={bank.id}>
              <CardHeader className="flex flex-row items-start justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={bank.logo}
                    alt={`${bank.name} logo`}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <CardTitle>{bank.name}</CardTitle>
                    <CardDescription>
                      Última sincronização: {bank.lastSync}
                    </CardDescription>
                  </div>
                </div>
                <Badge
                  variant={bank.status === 'Ativa' ? 'default' : 'destructive'}
                >
                  {bank.status}
                </Badge>
              </CardHeader>
              <CardFooter className="flex justify-end gap-2">
                {bank.status === 'Expirada' && (
                  <Button variant="outline">Reautenticar</Button>
                )}
                <Button variant="secondary">Ver Transações</Button>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive">
                      <PowerOff className="h-4 w-4" />{' '}
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Desconectar {bank.name}?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        Tem certeza que deseja desconectar o {bank.name}? Todas
                        as transações importadas permanecerão, mas novas não
                        serão sincronizadas.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancelar</AlertDialogCancel>
                      <AlertDialogAction>Desconectar</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <Card className="bg-secondary/30 border-dashed">
          <CardHeader>
            <CardTitle>Conecte-se a Novos Bancos</CardTitle>
            <CardDescription>
              Aproveite os benefícios do Open Finance. Conecte suas contas
              bancárias para ter uma visão completa e em tempo real de suas
              finanças, tudo em um só lugar.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center text-center p-8">
              <div className="p-4 bg-primary rounded-full mb-4">
                <Banknote className="w-10 h-10 text-primary-foreground" />
              </div>
              <p className="text-muted-foreground mb-6">
                O processo é seguro e leva apenas alguns minutos.
              </p>
              <Button size="lg">
                <Link className="mr-2 h-5 w-5" />
                Conectar Banco via Open Finance
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

export default OpenFinance
