type withSizePage = { size: number; page: number }
type objFun = {
  searchData: () => void
  handleSizeChange: (value: number) => void
  handleCurrentChange: (value: number) => void
}
export const useMethons = <T extends withSizePage>(
  props: any,
  params: T
): objFun => {
  const searchData = () => {
    console.log(params)
  }
  const handleSizeChange = (value: number) => {
    params.size = value
  }
  const handleCurrentChange = (value: number) => {
    params.page = value
  }
  return {
    searchData,
    handleSizeChange,
    handleCurrentChange,
  }
}
