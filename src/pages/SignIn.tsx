import { AuthForm } from '../components/AuthForm'
import { Btn } from '../components/Btn'
import { WrapperInput } from '../components/WrapperInput'
import { MdOutlineEmail, MdOutlineLock } from 'react-icons/md'
import { useContextAuth } from '../contexts/useAuth'
import { Navigate } from 'react-router-dom'

export function SignIn() {
  const { singIn, isAuthenticated } = useContextAuth()

  if (isAuthenticated) {
    return <Navigate to="/home" replace />
  }

  return (
    <main className="mx-auto w-full max-w-screen-xl sm:flex sm:justify-center sm:items-center dark:bg-black">
      <AuthForm
        formTitle="FAÇA LOGIN"
        formDescription="Faça login e começe a usar!"
        className="flex flex-col gap-4"
        linkDescription={['Não possui conta?', 'Crie uma agora']}
        routeName="/signup"
        typeSubmit="login"
        submitFormButtonAction={singIn}
      >
        <div className="flex flex-col">
          <WrapperInput
            icon={MdOutlineEmail}
            htmlFor="email"
            typeInput="email"
            id="email"
            placeholder="Digite seu email"
          />
        </div>

        <div className="flex flex-col">
          <WrapperInput
            icon={MdOutlineLock}
            htmlFor="password"
            typeInput="password"
            id="password"
            placeholder="Digite sua senha"
          />
        </div>

        <Btn
          type="submit"
          className="w-56 mt-2 py-2.5 mx-auto bg-[#81D8F7] rounded-3xl hover:brightness-75"
        >
          Entrar
        </Btn>
      </AuthForm>
    </main>
  )
}
