import { PageSize } from './examine.types'

// 用户管理
export type UserFilter = {
  username: string
  email: string
  phone: string
} & PageSize

export interface UserTable {
  id: string
  username: string
  email: string
  phone: string | number
  userGroupType: string | number
  userGroupName: string
  roleId: string
  roleName: string
  createTime: string | Date
  status: number
  [key: string]: any
}

export enum UserStatus {
  '已冻结' = 0,
  '正常' = 1,
}

// 用户组管理

export type UserGroupFilter = {
  userGroupName: string
  creater: string
} & PageSize

export interface UserGroupTable {
  id: string
  userGroupName: string
  memberNums: string | number
  creater: string
  createTime: string | Date
  [key: string]: any
}

// 角色管理

export type RoleFilter = {
  roleName: string
  creater: string
} & PageSize

export interface RoleTable {
  id: string
  roleName: string
  creater: string
  createTime: string | Date
  [key: string]: any
}

// 留言管理

export type DepartureFilter = {
  feedbacker: string
  phone: string
  email: string
} & PageSize

export interface DepartureTable {
  feedbacker: string
  phone: string
  email: string
  leavingMessage: string
  feedbackerTime: string | Date
  status: number
  [key: string]: any
}

export enum DepartureStatus {
  '待处理' = 0,
  '已处理' = 1,
}

// 网站信息管理

export type MessageFile = {
  agreement: number
  clause: number
  graphical: number
}

export type FileListItem = {
  name: string
  url: string
  [key: string]: any
}

export type MessageDoc = {
  agreementDoc: string
  clauseDoc: string
  agreemetFileList: FileListItem[]
  clauseFileList: FileListItem[]
}
