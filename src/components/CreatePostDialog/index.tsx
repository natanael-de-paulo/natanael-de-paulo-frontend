import { FormEvent, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

// import { Button } from '../Button'
import { Text } from '../Text'
import { api } from '../../services/api'
// import { Input } from '../AuthForm/Input'
import { AiOutlineUser } from 'react-icons/ai'
import { AuthHeader } from '../../services/AuthHeader'
import { WrapperInput } from '../WrapperInput'
import { DropZone } from '../DropZone'
import { Btn } from '../Btn'
// import { DropZone } from '../DropZone'

interface CreatePostDialogProps {
  closeDialog: () => void
  user: string | null
  refreshListPost: () => Promise<void>
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface FormElements extends HTMLFormControlsCollection {
  title: HTMLInputElement
  description: HTMLInputElement
  image: HTMLInputElement
}

interface FormElement extends HTMLFormElement {
  readonly elements: FormElements
}

export function CreatePostDialog({
  closeDialog,
  user,
  refreshListPost
}: CreatePostDialogProps) {
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined)
  const authHeader = AuthHeader()

  const handleSubmit = async (event: FormEvent<FormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData()

    data.append('title', form.elements.title.value)
    data.append('description', form.elements.description.value)

    if (selectedFile) {
      data.append('file', selectedFile)
    }

    try {
      console.log('retete', data)
      await api.post('/posts', data, authHeader)
      closeDialog()
      refreshListPost()
      setSelectedFile(undefined)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

      <Dialog.Content
        className="
          bg-[#2A2634] 
          py-8 px-10 
          text-white 
          fixed 
          top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          rounded-lg w-[30em]
          shadow-lg shadow-black/25
        "
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <AiOutlineUser size={32} className="text-slate-50" />
            {user}
          </div>
          <Dialog.Title className="text-2x1 font-black">
            {' '}
            Novo Post{' '}
          </Dialog.Title>
        </div>
        <form className="mt-8 space-y-2" onSubmit={handleSubmit}>
          <WrapperInput
            htmlFor="title"
            placeholder="Escolha um titulo para seu post..."
            typeInput="text"
            id="title"
          >
            <Text> Titulo </Text>
          </WrapperInput>
          <label htmlFor="description" className="flex flex-col gap-2">
            <Text> O que você está pensando? </Text>
            <textarea
              placeholder="Diga o que está pensando..."
              id="description"
              className="w-full bg-transparent outline-none flex-1 text-gray-100 text-xs placeholder:text-gray-400 shadow appearance-none focus:outline-none focus:shadow-outline  autofill:bg-transparent break-words whitespace-pre-wrap"
            ></textarea>
          </label>

          <DropZone
            onFileUploaded={setSelectedFile}
            selectedFile={selectedFile}
          />

          <footer className="flex justify-between gap-4">
            <Btn type="submit" className="max-w-[10em]">
              Postar
            </Btn>
            <Dialog.Close
              type="button"
              className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600 "
            >
              Fechar
            </Dialog.Close>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
