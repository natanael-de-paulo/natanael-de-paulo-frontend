import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
// import { MdOutlineUploadFile } from 'react-icons/md'
import { AiOutlineFileImage } from 'react-icons/ai'
import { Text } from '../Text'
interface IDropZoneProps {
  onFileUploaded: (file: File) => void
  selectedFile: File | undefined
}

export function DropZone({ onFileUploaded, selectedFile }: IDropZoneProps) {
  const [selectedFileUrl, setSelectedFileUrl] = useState('')
  const onDrop = useCallback(
    (acceptedFiles: any[]) => {
      const file = acceptedFiles[0]
      const fileUrl = URL.createObjectURL(file)

      setSelectedFileUrl(fileUrl)
      onFileUploaded(file)
    },
    [onFileUploaded]
  )
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  console.log('selectedFileUrl', selectedFileUrl)

  return (
    <div className="flex items-center gap-2" {...getRootProps()}>
      <input {...getInputProps()} />

      {selectedFileUrl ? (
        <div className="p-2 border border-slate-400 rounded">
          <img
            src={selectedFileUrl}
            alt="Foto"
            id="file"
            width={100}
            height={100}
          />
        </div>
      ) : (
        <AiOutlineFileImage size={24} />
      )}

      {isDragActive
        ? !selectedFile && (
            <Text className="text-slate-400 ">Solte os arquivos aqui...</Text>
          )
        : !selectedFileUrl && (
            <Text className="text-slate-400">
              {' '}
              Arraste e solte arquivos aqui ou clique para selecionar os
              arquivos...{' '}
            </Text>
          )}
    </div>
  )
}
