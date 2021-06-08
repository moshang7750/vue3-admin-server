import { ErrorResponse, SuccessResponse } from '../utils/Response'
import errorInfo from '../constants/errorInfo'
import { SuccessCode, SuccessTypeInfo } from '../services/success.type'
import { ICurrentUserInfo, IPageSize } from '../services/types'
import { deleteUserGroup, getAllUserGroup, getUserGroup, getUserGroupInfo, updateUserGroup } from '../services/userGroup'

const { getUserListFailInfo,  addFailInfo, updateFailInfo, deleteUserInfoFailInfo, deleteUserGroupInfo, deleteNotUserGroup} = errorInfo

type IGetUserGroup = {
  groupName: string,
  username: string
} & IPageSize

export const getUserGroupControll = async (params: IGetUserGroup) => {
  try{
    const data = await getUserGroup(params)
    return new SuccessResponse(SuccessCode.x, SuccessTypeInfo.search, data)
  } catch(err) {
    console.log('err', err)
    // const { code, message } =  getUserListFailInfo
    return new ErrorResponse(SuccessCode.e, err)
  }
}

export const getAllUserGroupControll = async () => {
  try{
    const data = await getAllUserGroup()
    return new SuccessResponse(SuccessCode.x, SuccessTypeInfo.search, data)
  } catch(err) {
    // const { code } =  getUserListFailInfo
    return new ErrorResponse(SuccessCode.e, err)
  }
}

export const getOneUserGroupUserControll= async (id: number) => {
  try{
    const data = await getUserGroupInfo(id)
    return new SuccessResponse(SuccessCode.x, SuccessTypeInfo.search, data)
  } catch(err) {
    const { code, message } =  getUserListFailInfo
    return new ErrorResponse(code, message)
  }
}


export  interface IAddUserGroup {
  id?: number
  groupName: string
  remark?: string
}

export const updateUserGroupControll = async (params: IAddUserGroup, userState: ICurrentUserInfo) => {
  try{
    let result:number =  await updateUserGroup(params, userState)
    if(result && !params.id) {
      return new SuccessResponse(SuccessCode.x, SuccessTypeInfo.create)
    } else {
      return new SuccessResponse(SuccessCode.x, SuccessTypeInfo.update)
    }
  } catch(err) {
    if(!params.id) {
      const { code, message } =  addFailInfo
      return new ErrorResponse(code, err)
    } else {
      const { code, message } =  updateFailInfo
      return new ErrorResponse(code, err)
    }
  }
}

export const  deleteUserGroupControll = async (id:number) => {
  const userInfo = await getUserGroupInfo(id)
  if(userInfo?.length) {
    const { code, message } = deleteUserGroupInfo
    return new ErrorResponse(code, message)
  }
  try {
    const result =  await deleteUserGroup(id)
    if(result) {
      return new SuccessResponse(SuccessCode.x, SuccessTypeInfo.delete)
    } else {
      const { code, message } = deleteNotUserGroup
      return new ErrorResponse(code, message)
    }
  } catch {
    const { code, message } = deleteUserInfoFailInfo
    return new ErrorResponse(code, message)
  }
}

export const getUserGroupInfoControll = async (id: number) => { 
  try {
  let data =   await getUserGroupInfo(id)
    return new SuccessResponse(SuccessCode.x, SuccessTypeInfo.search, data)
  } catch(err) {
    return new ErrorResponse(SuccessCode.e, err)
  }
}




