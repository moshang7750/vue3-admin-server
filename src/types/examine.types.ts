export enum ExamineTypeStatus {
  '上架审核' = 1,
  '下架审核' = 2,
}

export enum ExamineStatus {
  '待审核' = 0,
  '审核通过' = 1,
  '审核不通过' = 2,
}

export type PageSize = {
  page: number
  size: number
}
interface ExamineCommon {
  examiner: string
  createTime: string | Date
  status: number
  [key: string]: any
}

// 内容审核
export type ContentFilter = {
  contentType: string
  contentName: string
} & PageSize

export interface ContentTable extends ExamineCommon {
  id: string
  contentTypeName: string
  contentName: string
  examineTypeName?: string
}

// 资料审核
export type MeansCompontFilter = {
  meansType: string | number
  meansName: string
} & PageSize

export interface MeansCompontTable extends ExamineCommon {
  id: string
  meansType: string | number
  meansTypeName: string
  meansName: string
  examineTypeName?: string
  examineType: string | number
}

// 活动审核
export type ActiveCompontFilter = {
  activeType: string | number
  activeName: string
} & PageSize

export interface ActiveCompontTable extends ExamineCommon {
  id: string
  activeType: string | number
  activeTypeName: string
  activeName: string
  examineTypeName?: string
  examineType: string | number
}

// 申请审核

export type ApplyCompontFilter = {
  applyType: string | number
  applyName: string
} & PageSize

export interface ApplyCompontTable extends ExamineCommon {
  id: string
  applyType: string | number
  applyTypeName: string
  applyName: string
  affairName: string
}
