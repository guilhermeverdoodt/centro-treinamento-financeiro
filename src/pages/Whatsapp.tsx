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
import {
  CheckCircle,
  Clock,
  Copy,
  Eye,
  Trash2,
  Upload,
  XCircle,
} from 'lucide-react'
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
import { toast } from '@/hooks/use-toast'

const pendingReceipts = [
  {
    id: 1,
    image: 'https://img.usecurling.com/p/200/300?q=grocery%20receipt',
    date: '2025-11-07T10:00:00Z',
    status: 'Aguardando Revisão',
  },
  {
    id: 2,
    image: 'https://img.usecurling.com/p/200/300?q=supermarket%20bill',
    date: '2025-11-06T15:30:00Z',
    status: 'Erro na Extração',
  },
]

const Whatsapp = () => {
  const whatsappNumber = '+55 11 98765-4321'

  const copyToClipboard = () => {
    navigator.clipboard.writeText(whatsappNumber)
    toast({
      title: 'Número copiado!',
      description:
        'O número de WhatsApp foi copiado para a área de transferência.',
    })
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Envie suas Notas Fiscais via WhatsApp</CardTitle>
          <CardDescription>
            É simples e rápido! Envie uma foto ou PDF da sua nota fiscal para o
            nosso número e nós cuidamos do resto.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-4 p-4 border rounded-lg">
              <span className="text-2xl font-bold text-primary">
                {whatsappNumber}
              </span>
              <Button variant="outline" size="icon" onClick={copyToClipboard}>
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                <span>Salve nosso número em seus contatos.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                <span>
                  Envie uma foto nítida ou o arquivo PDF da sua nota fiscal.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                <span>
                  Aguarde a confirmação e revise os dados extraídos aqui.
                </span>
              </li>
            </ul>
          </div>
          <div className="flex-shrink-0">
            <img
              src="https://img.usecurling.com/p/300/250?q=whatsapp%20chat%20mockup"
              alt="Exemplo de envio"
              className="rounded-lg shadow-md"
            />
          </div>
        </CardContent>
      </Card>

      <section>
        <h2 className="text-2xl font-bold mb-4">
          Notas Pendentes de Processamento
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pendingReceipts.map((receipt) => (
            <Card key={receipt.id}>
              <CardHeader>
                <img
                  src={receipt.image}
                  alt="Nota fiscal"
                  className="rounded-t-lg aspect-[3/4] object-cover"
                />
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge
                    variant={
                      receipt.status === 'Erro na Extração'
                        ? 'destructive'
                        : 'secondary'
                    }
                  >
                    {receipt.status === 'Erro na Extração' ? (
                      <XCircle className="mr-1 h-3 w-3" />
                    ) : (
                      <Clock className="mr-1 h-3 w-3" />
                    )}
                    {receipt.status}
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    {new Date(receipt.date).toLocaleDateString()}
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <Eye className="mr-2 h-4 w-4" /> Revisar
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <DialogHeader>
                      <DialogTitle>Revisar Nota Fiscal</DialogTitle>
                    </DialogHeader>
                    <div className="grid md:grid-cols-2 gap-6 py-4">
                      <img
                        src={receipt.image}
                        alt="Nota fiscal"
                        className="rounded-lg w-full"
                      />
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="market">Nome do Mercado</Label>
                          <Input
                            id="market"
                            defaultValue="Supermercado Exemplo"
                          />
                        </div>
                        <div>
                          <Label htmlFor="date">Data da Compra</Label>
                          <Input
                            id="date"
                            type="date"
                            defaultValue="2025-11-06"
                          />
                        </div>
                        <div>
                          <Label htmlFor="total">Valor Total</Label>
                          <Input
                            id="total"
                            type="number"
                            defaultValue="350.75"
                          />
                        </div>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button>Salvar como Transação</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Whatsapp
