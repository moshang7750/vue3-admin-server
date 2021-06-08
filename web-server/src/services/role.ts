import { IAddRole, IGetRole } from "../controller/role";
import sequelize,  { QueryTypes } from 'sequelize';
import { UserModel } from "../db/models";
import RoleModel, { RoleModelProps } from '../db/models/role'
import { SequelizeOp } from "../utils/sequelizeCommon";
import { ICurrentUserInfo, ITableData } from "./types";
import { SuccessCode } from "./success.type";
import { ErrorResponse } from "../utils/Response";
import seqDb from '../db/db'
type IGetProp = {
  roleName?: string
  username?: string
}

/**
 * 
 * @param param0 角色分页查询
 * @returns 
 */

export const getRole = async (
  { roleName, username, page, size } : IGetRole) :Promise<ITableData<RoleModelProps> | null> => {
  let where: IGetProp = {}
  if(roleName) where.roleName = roleName
  if(username) where.username = username
  UserModel.hasOne(RoleModel, { foreignKey: 'id'})
  RoleModel.belongsTo(UserModel);
  const result = await RoleModel.findAndCountAll({
    limit: size, //每页10条
    offset: (page - 1) * size, //第x页*每页个数
    subQuery: false,
    order: [
      ['createTime', 'DESC']
    ],
    where: {
      roleName: {
        [SequelizeOp.like]: `%${roleName}%`
      }
    },
    include: [
      { 
        model: UserModel,
        where: {
          username:  {
            [SequelizeOp.like]: `%${username}%`
          }, 
        },
      }
    ],
    attributes: [
      'id',
      'roleName',
      'menus',
      'remark',
      'userId',
      [sequelize.col('user.username'), 'username'],
      'createTime',
    ]
  })
  console.log('result', result)
  return result
}

/**
 * 更新角色
 * @param param0 
 * @param userState 
 * @returns 
 */

export const addRole = async ({roleName, menus, remark}: IAddRole, userState: ICurrentUserInfo) => {
  let result: any
  try{
    result = await RoleModel.create({
      roleName,
      menus,
      remark,
      userId: userState.id
    })
  } catch(err) {
    return new ErrorResponse(SuccessCode.e, err)
  }
  return result
}

/**
 * 更新角色
 * @param param0 
 * @returns 
 */

export const updateRole = async ({id, roleName, menus, remark}: IAddRole) => {
  const result =  await RoleModel.update(
    { roleName, menus, remark },
    { where: {id}}
  )
  return result
}


/**
 * 角色删除接口
 * @param id 
 * @returns 
 */

export const deleteRole = async (id: number) => {
  const result = await RoleModel.destroy({
    where: { id }
  })
  return result
}


/**
 * 查询某角色下所有用户
 * @param id 
 * @returns 
 */
export const getRoleAllUser = async (id: number): Promise<RoleModelProps[] | null> => {
  const result = await seqDb.query(
    'SELECT `id`, `username`, `email`, `phone`, `userGroupId`, `userGroupName`, `roleId`, `roleName`, `status`, `createTime` FROM `user` WHERE `user`.`roleId` = ' + id,  { type: QueryTypes.SELECT }
  )
  if (result == null) return null
 
  return result as  RoleModelProps[]
}

