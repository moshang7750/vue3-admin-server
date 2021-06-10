export interface UserWhereProps {
  username: string
  password?: string
  id?: number
}

export interface MemberWhereProps {
  name: string
  password?: string
  id?: number
}

export interface  ITableData<T> {
  rows: T[]
  count: number
} 

export interface IPageSize {
  page: number
  size: number
}

export interface IUserStatus {
  id: number
  status: 0 | 1
}

export interface ICurrentUserInfo {
  id: number
  username: string
  iat: number | Date
  exp: number | Date
}