import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoaderCircle, PiggyBank } from 'lucide-react'

const Splash = () => {
  const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      // Simulate authentication check
      const userIsLoggedIn = false // Change to true to simulate logged in user
      setIsAuthenticated(userIsLoggedIn)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isAuthenticated !== null) {
      if (isAuthenticated) {
        navigate('/')
      } else {
        navigate('/onboarding')
      }
    }
  }, [isAuthenticated, navigate])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background animate-fade-in">
      <div className="flex flex-col items-center gap-4">
        <div className="p-4 bg-primary rounded-full">
          <PiggyBank className="w-12 h-12 text-primary-foreground" />
        </div>
        <h1 className="text-3xl font-bold text-foreground">
          Centro de Treinamento Financeiro
        </h1>
        <div className="flex items-center gap-2 mt-4 text-muted-foreground">
          <LoaderCircle className="w-5 h-5 animate-spin" />
          <p>Carregando...</p>
        </div>
      </div>
    </div>
  )
}

export default Splash
