import UserModel, { UserModelProps } from '../db/models/user';
import { IPageSize, ITableData, IUserStatus } from './types';
import { SequelizeOp } from '../utils/sequelizeCommon';
import UserGroup from '../db/models/user_group';
import sequelize, { QueryTypes } from 'sequelize';
import Role from '../db/models/role';

interface IGetUser {
  username?: string;
  email?: string;
  phone?: string;
}

type IGetUserProps =  IGetUser & IPageSize

export const getUser = async ({ username, email, phone, page, size} : IGetUserProps): Promise<ITableData<UserModelProps> | null> => {
  let where :IGetUser  = {}
  if (username) where.username = username
  if (email) where.email = email
  if (phone) where.phone = phone

  UserGroup.hasOne(UserModel, { foreignKey: 'id'})
  UserModel.belongsTo(UserGroup);
  Role.hasOne(UserModel, { foreignKey: 'id'})
  UserModel.belongsTo(Role);
  const result = await UserModel.findAndCountAll({
    // subQuery:  false,
    include: [{
      model: UserGroup,
    },{
      model: Role,
    }],
    attributes: [
      'id',
      'username',
      'email',
      'phone',
      'userGroupId',
      [sequelize.col('user_group.groupName'), 'userGroupName'],
      'roleId',
      [sequelize.col('role.roleName'), 'roleName'],
      'status',
      'createTime'
    ],
    limit: size, //每页10条
    offset: (page - 1) * size, //第x页*每页个数
    order: [
      ['createTime', 'DESC']
    ],
    where: {
      username: {
        [SequelizeOp.like]: `%${username}%`
      },
      email: {
        [SequelizeOp.like]: `%${email}%`
      },
      phone: {
        [SequelizeOp.like]: `%${phone}%`
      }
    }
  })
  if (result == null) return null
  return result as ITableData<UserModelProps>
};


export const getOneUser = async (id: number) =>   {
  const result = await UserModel.findOne({
    where: { id }
  })
  return result as  any
}
export const setUserStatus = async ({id, status} : IUserStatus) => {
  const result = await UserModel.update({ status }, { where: { id } })
  return result
}

export const updateUser = async (params: UserModelProps) => {
  const { id } = params
  const result = await UserModel.update(params, { where: { id } })
  return result
}

export const deleteUser = async (id: number) => {
  const result = await UserModel.destroy({ where: { id } })
  return result
}





