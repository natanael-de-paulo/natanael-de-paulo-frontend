import { PropsWithChildren, useEffect, useState } from 'react'
import { Navigation } from '../Navigation'
import logo from '../../assets/parrotLogo.svg'
import { Text } from '../Text'

export function Theme({ children }: PropsWithChildren) {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false)

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 636)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="flex relative mx-auto sm:max-w-screen-xl w-full sm:gap-4 sm:px-4 ">
      <aside className="fixed bottom-0 z-5 w-full sm:relative sm:flex sm:w-full sm:max-w-[25%] sm:flex-col sm:px-2 sm:gap-8">
        {isSmallScreen ? null : (
          <div className="flex items-center bg-white rounded-b-md h-auto p-1 sm:sticky sm:top-0">
            <img
              src={logo}
              alt="Imagem de papagaio sysmap"
              width={48}
              height={48}
            />
            <Text
              size="lg"
              className="font-bold text-[#81D8F7] tracking-[.4em]"
            >
              Parrot
            </Text>
          </div>
        )}
        <Navigation />
      </aside>
      <main className="flex w-full flex-col gap-4 pb-8 sm:max-w-xl ">
        {children}
      </main>
    </div>
  )
}