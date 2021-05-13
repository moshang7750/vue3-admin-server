export const findPatentValue = (
  array: any,
  value: any,
  valueName = 'link',
  childrenName = 'children'
) => {
  if (!value || !Array.isArray(array)) return []
  const result: any = []
  let valid = false
  const seek = (array: any, value: any) => {
    let parentValue
    const up = (array: any, value: any, lastValue?: any) => {
      array.forEach((v: any) => {
        const val = v[valueName]
        const child = v[childrenName]
        if (val === value) {
          valid = true
          parentValue = lastValue
          return
        }
        if (child && child.length) up(child, value, val)
      })
    }
    up(array, value)
    if (parentValue) {
      result.unshift(parentValue)
      seek(array, parentValue)
    }
  }
  seek(array, value)
  return valid ? [...result, value] : []
}
