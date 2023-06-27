import {
  MdOutlineEmail,
  MdOutlineLock,
  MdOutlinePersonOutline
} from 'react-icons/md'
import { Btn } from '../../Btn'
import { WrapperInput } from '../../WrapperInput'

interface ModibeProps {
  step: number
  nextStep: () => void
  returnStep: () => void
}

export function MobileComponent({ step, nextStep, returnStep }: ModibeProps) {
  return (
    <div className="flex flex-col gap-4">
      {step === 1 && (
        <>
          <WrapperInput
            icon={MdOutlineEmail}
            htmlFor="email"
            typeInput="email"
            id="email"
            placeholder="Digite seu email"
          />
          <WrapperInput
            icon={MdOutlineLock}
            htmlFor="password"
            typeInput="password"
            id="password"
            placeholder="Digite sua senha"
          />
        </>
      )}

      {step === 2 && (
        <>
          <WrapperInput
            icon={MdOutlinePersonOutline}
            htmlFor="firstName"
            typeInput="text"
            id="firstName"
            placeholder="Digite sua nome"
          />
          <WrapperInput
            icon={MdOutlinePersonOutline}
            htmlFor="lastName"
            typeInput="text"
            id="lastName"
            placeholder="Digite seu sobrenome"
          />
        </>
      )}

      <div>
        {step > 1 && step <= 2 && (
          <div className="flex gap-4">
            <Btn
              type="button"
              onClick={returnStep}
              className="w-56 mt-2 py-2.5 mx-auto bg-[#81D8F7] rounded-3xl hover:brightness-75"
            >
              Voltar
            </Btn>
            <Btn
              type="submit"
              className="w-56 mt-2 py-2.5 mx-auto bg-[#81D8F7] rounded-3xl hover:brightness-75"
            >
              Cadastrar
            </Btn>
          </div>
        )}
        {step === 1 && step < 2 && (
          <Btn
            onClick={nextStep}
            className="w-56 mt-2 py-2.5 mx-auto bg-[#81D8F7] rounded-3xl hover:brightness-75"
          >
            Próximo
          </Btn>
        )}
      </div>
    </div>
  )
}
