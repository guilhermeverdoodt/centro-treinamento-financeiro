import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Edit } from 'lucide-react'

const Profile = () => {
  const user = {
    name: 'Usuário Exemplo',
    email: 'usuario@exemplo.com',
    avatarUrl: 'https://img.usecurling.com/ppl/large?gender=male&seed=1',
    memberSince: 'Novembro de 2025',
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader className="items-center text-center">
          <div className="relative">
            <Avatar className="w-24 h-24 mb-4">
              <AvatarImage src={user.avatarUrl} alt={user.name} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <Button
              size="icon"
              className="absolute bottom-4 right-0 rounded-full h-8 w-8"
            >
              <Edit className="h-4 w-4" />
            </Button>
          </div>
          <CardTitle className="text-2xl">{user.name}</CardTitle>
          <p className="text-muted-foreground">{user.email}</p>
        </CardHeader>
        <CardContent>
          <div className="text-center text-sm text-muted-foreground">
            Membro desde {user.memberSince}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Informações da Conta</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold">Nome</h4>
            <p>{user.name}</p>
          </div>
          <div>
            <h4 className="font-semibold">Email</h4>
            <p>{user.email}</p>
          </div>
          <Button variant="outline">Editar Perfil</Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default Profile
