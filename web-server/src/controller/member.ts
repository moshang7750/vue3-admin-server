import errorInfo from '../constants/errorInfo'
import { MemberModelProps, RegisterMemberModel } from '../db/models/member'
import { createMember, deleteMember, getAllMember, getMemberInfo, IGetMemberProps, IMemberIdParams, setMemberStatus, updateMember } from '../services/member'
import { SuccessCode, SuccessTypeInfo } from '../services/success.type'
import { IUserStatus } from '../services/types'
import { createMd5 } from '../utils/createMD5'
import { ErrorResponse, SuccessResponse } from '../utils/Response'

const { registerUserNameExistInfo, registerFailInfo, loginFailInfo,  getUserListFailInfo, getUserInfoFailInfo, editUserInfoFailInfo, deleteUserInfoFailInfo} = errorInfo

// 注册会员
export const addMemberController = async (params: RegisterMemberModel) => {
  const {name, password} = params
  // 首先查看会员是否存在
  const memberInfo = await getMemberInfo({name})
  if(memberInfo) {
    // 会员已注册
    const { code, message } = registerUserNameExistInfo
    return new ErrorResponse(code, message)
  }
  try {
    await createMember({
      ...params,
      password: createMd5(password)
    })
    return new SuccessResponse(SuccessCode.x, SuccessTypeInfo.create)

  } catch(err) {
    console.log('Member', err)
    const { code, message } = registerFailInfo
    return new ErrorResponse(code, message)
  }
}

// 查询会员列表
export const getMemberController = async (params: IGetMemberProps) => {
  try {
    const data = await getAllMember(params)
    return new SuccessResponse(SuccessCode.x, SuccessTypeInfo.search, data)
  } catch(err) {
    const { code, message } =  getUserListFailInfo
    return new ErrorResponse(code, message)
  }
}

// 查询会员信息
type IMemberInfo = { name: string, id: number }
export const getMemberInfoController = async (params: IMemberInfo) =>{
  try {
    const data = await getMemberInfo(params)
    return new SuccessResponse(SuccessCode.x, SuccessTypeInfo.search, data)
  } catch(err) {
    const { code, message } =  getUserInfoFailInfo
    return new ErrorResponse(code, message)
  }
}

// 设置会员状态
export const setMemberStatusController = async (params: IUserStatus)  => {
  const { status } = params
  if(status != 0 && status != 1) {
    return new ErrorResponse(SuccessCode.e, 'status 只能为0或1')
  }
  try {
    await setMemberStatus(params)
    return new SuccessResponse(SuccessCode.x, SuccessTypeInfo.update)
  } catch(err) {
    const { code, message } =  editUserInfoFailInfo
    return new ErrorResponse(code, message)
  }
}

// 更新会员信息
export const updateMemberController = async (params: MemberModelProps) => {
  try{
    await updateMember(params)
    return new SuccessResponse(SuccessCode.x, SuccessTypeInfo.update)
  } catch(err) {
    const { code, message } =  editUserInfoFailInfo
    return new ErrorResponse(code, message)
  }
}


// 删除会员信息
export const deleteMemberController = async (params :IMemberIdParams) => {
  try{
    await deleteMember(params)
    return new SuccessResponse(SuccessCode.x, SuccessTypeInfo.delete)
  } catch(err) {
    const { code, message } =  deleteUserInfoFailInfo
    return new ErrorResponse(code, message)
  }
}

