import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const Onboarding = () => {
  const navigate = useNavigate()
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const onboardingSteps = [
    {
      title: 'Bem-vindo ao Centro de Treinamento Financeiro!',
      description:
        'Sua jornada para a maestria financeira começa aqui. Vamos organizar suas finanças de forma inteligente.',
      image: 'https://img.usecurling.com/p/400/300?q=financial%20planning',
    },
    {
      title: 'Controle seu Fluxo de Caixa',
      description:
        'Registre suas entradas e saídas de forma simples e visualize para onde seu dinheiro está indo.',
      image: 'https://img.usecurling.com/p/400/300?q=cash%20flow%20chart',
    },
    {
      title: 'Conecte-se ao Open Finance',
      description:
        'Integre suas contas bancárias em tempo real para uma visão completa e automatizada de suas finanças.',
      image: 'https://img.usecurling.com/p/400/300?q=bank%20connection',
    },
    {
      title: 'Gerencie suas Dívidas',
      description:
        'Acompanhe e planeje o pagamento de suas dívidas, alcançando a liberdade financeira mais rápido.',
      image: 'https://img.usecurling.com/p/400/300?q=debt%20management',
    },
    {
      title: 'Comece sua Jornada Financeira',
      description:
        'Crie sua conta ou faça login para começar a transformar sua vida financeira hoje mesmo.',
      isLogin: true,
    },
  ]

  const handleLogin = () => {
    // Simulate Google OAuth login
    console.log('Redirecting to Google OAuth...')
    // On successful login, redirect to dashboard
    navigate('/')
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Carousel setApi={setApi} className="w-full max-w-md">
        <CarouselContent>
          {onboardingSteps.map((step, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center aspect-square">
                    {step.image && (
                      <img
                        src={step.image}
                        alt={step.title}
                        className="mb-6 rounded-lg w-64 h-48 object-cover"
                      />
                    )}
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      {step.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {step.description}
                    </p>
                    {step.isLogin && (
                      <Button onClick={handleLogin} className="w-full">
                        <img
                          src="https://img.usecurling.com/i?q=google&color=white"
                          alt="Google"
                          className="w-5 h-5 mr-2"
                        />
                        Entrar com Google
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default Onboarding
