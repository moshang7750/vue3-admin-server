import { ErrorResponse, SuccessResponse } from '../utils/Response'
import errorInfo from '../constants/errorInfo'
import { deleteUser, getOneUser, getUser, setUserStatus, updateUser } from '../services/user'
import { IPageSize, IUserStatus } from '../services/types'
import { SuccessCode, SuccessTypeInfo } from '../services/success.type'
import { UserModelProps } from '../db/models/user'


const { getUserListFailInfo, editUserInfoFailInfo, deleteUserInfoFailInfo, getUserInfoFailInfo } = errorInfo

type IGetUser = {
  username: string
  email: string
  phone: string
} & IPageSize

export const getUserController = async (params: IGetUser) => {
  try{
    const data = await getUser(params)
    return new SuccessResponse(SuccessCode.x, SuccessTypeInfo.search, data)
  } catch(err) {
    const { code, message } =  getUserListFailInfo
    return new ErrorResponse(code, message)
  }
}

// 获取单个用户
export const getOneUserController = async ({ id } : { id: number}) => {
  try{
    const data  =  await getOneUser(id)
    return new SuccessResponse(SuccessCode.x, SuccessTypeInfo.search, data)
  } catch(err) {
    const { code, message } =  getUserInfoFailInfo
    return new ErrorResponse(code, message)
  }
}


// 设置用户状态
export const setUserStatusController = async (params: IUserStatus) => {
  const { status } = params
  if(status != 0 && status != 1) {
    return new ErrorResponse(SuccessCode.e, 'status 只能为0或1')
  }
  try{
    await setUserStatus(params)
    return new SuccessResponse(SuccessCode.x, SuccessTypeInfo.update)
  } catch(err) {
    const { code, message } =  editUserInfoFailInfo
    return new ErrorResponse(code, message)
  }
}

// 更新用户信息
export const updateUserController = async (params: UserModelProps) => {
  try{
    await updateUser(params)
    return new SuccessResponse(SuccessCode.x, SuccessTypeInfo.update)
  } catch(err) {
    const { code, message } =  editUserInfoFailInfo
    return new ErrorResponse(code, message)
  }
}

// 删除用户信息
export const deleteUserController = async ({ id } : { id: number}) => {
  try{
    await deleteUser(id)
    return new SuccessResponse(SuccessCode.x, SuccessTypeInfo.delete)
  } catch(err) {
    const { code, message } =  deleteUserInfoFailInfo
    return new ErrorResponse(code, message)
  }
}