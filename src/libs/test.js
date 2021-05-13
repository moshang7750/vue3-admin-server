const findPatentValue = (
  array,
  value,
  valueName = 'link',
  childrenName = 'children'
) => {
  if (!value || !Array.isArray(array)) return []
  const result = []
  const resultData = []
  let valid = false
  const seek = (array, value) => {
    let parentValue
    let parent
    const up = (array, value, lastValue) => {
      array.forEach((v) => {
        const val = v[valueName]
        const child = v[childrenName]
        if (val === value) {
          valid = true
          parentValue = lastValue
          parent = v
          return
        }
        if (child && child.length) up(child, value, val)
      })
    }
    up(array, value)
    if (parentValue) {
      result.unshift(parentValue)
      resultData.unshift(parent)
      seek(array, parentValue)
    }
  }
  seek(array, value)
  return valid ? [...resultData] : []
}
let arrTree = [
  {
    name: '1',
    children: [
      {
        name: '1-1',
        children: [
          {
            name: '1-1-1',
          },
        ],
      },
    ],
  },
]
console.log(findPatentValue(arrTree, '1-1-1', 'name'))
