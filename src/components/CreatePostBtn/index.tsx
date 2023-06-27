import * as Dialog from '@radix-ui/react-dialog'

interface Iprops {
  user: string | null
}

export function CreatePostBtn({ user }: Iprops) {
  return (
    <Dialog.Trigger className="py-2 px-4 bg-sky-500 transition-colors hover:bg-cyan-300 container rounded-full max-w-sm text-sm">
      No que você está pensando, {user}?
    </Dialog.Trigger>
  )
}
