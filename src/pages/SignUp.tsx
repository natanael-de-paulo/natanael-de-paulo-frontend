import { Navigate, useNavigate } from 'react-router-dom'
import { AuthForm } from '../components/AuthForm'
import { useState, useEffect } from 'react'

import { useContextAuth } from '../contexts/useAuth'
import { api } from '../services/api'
import { SignUpUserProps } from '../services/types'
import { DesktopComponent } from '../components/AuthForm/DesktopComponent'
import { MobileComponent } from '../components/AuthForm/MobileComponent'

export function SignUp() {
  const { isAuthenticated } = useContextAuth()
  const [step, setStep] = useState(1)
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(
    window.innerWidth < 768
  )

  const navigate = useNavigate()

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)

    // Limpar o evento ao desmontar o componente
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (isAuthenticated) {
    return <Navigate to="/home" replace />
  }

  const handleRegisterUser = async (data: SignUpUserProps) => {
    try {
      await api.post('/security/register', {
        user: data.email,
        password: data.password,
        name: data.profile.firstName + ' ' + data.profile.lastName
      })
      navigate('/')
    } catch (error) {
      console.error(error)
      alert('Erro na criação de usuario')
    }
  }

  const commandStep = {
    nextStep() {
      setStep(step + 1)
    },
    returnStep() {
      setStep(step - 1)
    }
  }

  const Comp = isSmallScreen ? (
    <MobileComponent
      nextStep={commandStep.nextStep}
      returnStep={commandStep.returnStep}
      step={step}
    />
  ) : (
    <DesktopComponent />
  )

  return (
    <main className="mx-auto w-full  h-full max-w-screen-xl sm:flex sm:justify-center sm:items-center dark:bg-black">
      <AuthForm
        routeName="/"
        formDescription="Cadastre-se e começe a usar!"
        formTitle="CADASTRE-SE"
        className="flex flex-col h-50%"
        linkDescription={['Já possui uma conta?', 'Entre agora']}
        submitFormButtonAction={handleRegisterUser}
        typeSubmit="signup"
      >
        <>{Comp}</>
      </AuthForm>
    </main>
  )
}
