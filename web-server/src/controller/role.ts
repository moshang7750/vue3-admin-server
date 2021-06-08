import errorInfo from "../constants/errorInfo"
import errorRoleInfo from "../constants/errorRoleInfo"
import { addRole, deleteRole, getRole, getRoleAllUser, updateRole } from "../services/role"
import { SuccessCode, SuccessTypeInfo } from "../services/success.type"
import { ICurrentUserInfo, IPageSize } from "../services/types"
import { ErrorResponse, SuccessResponse } from "../utils/Response"

const { deleteRoleGroupInfo }  = errorRoleInfo
const { deleteNotUserGroup, deleteUserInfoFailInfo } = errorInfo
 
export type IGetRole = {
  roleName?: string;
  username?: string
} & IPageSize

export const getRoleControll = async (params: IGetRole) => {
  try {
    const data  = await getRole(params)
    
    return new SuccessResponse(SuccessCode.x, SuccessTypeInfo.search, data)
  } catch (err) {
    return new ErrorResponse(SuccessCode.e, err)
  }
}

export type IAddRole = {
  id?: number
  roleName: string
  menus: Array<string>
  remark?: string
  userId: number
  username?: string
}


export const getAddRoleControll = async (params: IAddRole, userState: ICurrentUserInfo) => {
  try {
    await addRole(params, userState)
    return new SuccessResponse(SuccessCode.x, SuccessTypeInfo.create)
  } catch(err) {
    return new ErrorResponse(SuccessCode.e, err)
  }
}


export const getUpdateRoleControll = async (params: IAddRole) => {
  try {
    await updateRole(params)
    return new SuccessResponse(SuccessCode.x, SuccessTypeInfo.update)
  } catch(err) {
    return new ErrorResponse(SuccessCode.e, err)
  }
}

export const deleteRoleControll = async (id: number) => {
  const userInfo = await getRoleAllUser(id)
  if(userInfo?.length) {
    const { code, message } = deleteRoleGroupInfo
    return new ErrorResponse(code, message)
  }
  try {
    const result =  await deleteRole(id)
    if(result) {
      return new SuccessResponse(SuccessCode.x, SuccessTypeInfo.delete)
    } else {
      const { code, message } = deleteNotUserGroup
      return new ErrorResponse(code, message)
    }
  } catch(err) {
    const { code, message } = deleteUserInfoFailInfo
    return new ErrorResponse(code, message)
  }
}

/**
 * 查询某角色下所有用户
 * @param id 
 * @returns 
 */

export const getAllRoleInfoControll = async (id: number) => { 
  try {
  let data =  await getRoleAllUser(id)
    return new SuccessResponse(SuccessCode.x, SuccessTypeInfo.search, data)
  } catch(err) {
    return new ErrorResponse(SuccessCode.e, err)
  }
}
