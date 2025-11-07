import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'

const Settings = () => {
  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Configurações</h2>
        <p className="text-muted-foreground">
          Gerencie as configurações da sua conta e preferências do aplicativo.
        </p>
      </div>
      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Perfil</CardTitle>
          <CardDescription>Atualize suas informações pessoais.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome</Label>
            <Input id="name" defaultValue="Usuário Exemplo" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              defaultValue="usuario@exemplo.com"
              disabled
            />
          </div>
          <Button>Salvar Alterações</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notificações</CardTitle>
          <CardDescription>
            Escolha como você quer ser notificado.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="email-notifications">
                Notificações por Email
              </Label>
              <p className="text-sm text-muted-foreground">
                Receba resumos semanais e alertas importantes.
              </p>
            </div>
            <Switch id="email-notifications" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="push-notifications">Notificações Push</Label>
              <p className="text-sm text-muted-foreground">
                Receba alertas de vencimentos e transações.
              </p>
            </div>
            <Switch id="push-notifications" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Segurança</CardTitle>
          <CardDescription>Gerencie a segurança da sua conta.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline">Alterar Senha</Button>
          <Button variant="destructive">Excluir Conta</Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default Settings
