export interface OperateFilter {
  page: number
  size: number
  type: string
  title: string
  publisher: string
}

export interface OperateTable {
  id: string
  type?: string
  typeName: string
  title: string
  publisher: string
  createTime: string
  status: number
  [key: string]: any
}

export enum StatusData {
  '待审核' = 0,
  '已发布' = 1,
  '下架审核' = 2,
  '已下架' = 3,
}

// 资料管理
export type MeansFilter = {
  meansName: string
  meansType: string
  openType: string
  page: number
  size: number
}

export interface MeansTable {
  id: string
  meansName: string
  meansTypeName: string
  publisher: string
  createTime: string
  status: number
  [key: string]: any
}

// 活动管理

export type ActiveFilter = {
  activeName: string
  activeType: string
  page: number
  size: number
}
export interface ActiveTable {
  id: string
  activeName: string
  activeTypeName: string
  publisher: string
  createTime: string
  status: number
  [key: string]: any
}

// 工具管理

export type ToolFilter = {
  toolName: string
  toolType: string
  page: number
  size: number
}

export interface ToolTable {
  id: string
  toolName: string
  toolTypeName: string
  openTypeName: string
  publisher: string
  createTime: string
  status: number
  [key: string]: any
}

// 栏位管理

export type FieldFilter = {
  id: string
  fieldName: string
  page: number
  size: number
}

export interface FieldTable {
  id: string | number
  fieldName: string
  sort?: number
  path?: string
  children?: FieldTable[]
}
