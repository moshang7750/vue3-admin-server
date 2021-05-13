export interface AsideItem {
  name: string
  link?: string
  id?: number
  children?: AsideItem[]
  [key: string]: any
}

// tabItem 类型
export interface TabItem {
  name: string
  type: number
}

// member TableData

export interface TableDataItemMember {
  name?: string
  email?: string
  phone?: string
  company?: string
  position?: string
  createTime?: string
  status?: number
  [key: string]: any
}
