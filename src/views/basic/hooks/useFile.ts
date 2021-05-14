import { FileListItem } from '@/types/jurisdiction.type'

export const useAreementFile = () => {
  const handleRemoveAgreement = (
    file: FileListItem,
    fileList: FileListItem[]
  ) => {
    console.log(file, fileList)
  }
  return { handleRemoveAgreement }
}
