import UserGroupModel, { UserGroupModelProps }   from '../db/models/user_group'
import { ICurrentUserInfo, IPageSize, ITableData } from './types'
import { SequelizeOp } from '../utils/sequelizeCommon';
import { UserModel } from '../db/models';
import { IAddUserGroup } from '../controller/userGroup';
import { UserModelProps } from '../db/models/user';
import seqDb from '../db/db'
import  { QueryTypes } from 'sequelize';
const sequelize = require('sequelize')

interface IGetUserGroup {
  groupName?: string
  username?: string
}

type IGetUserGroupProps = IGetUserGroup & IPageSize

export const getUserGroup = async ({ groupName,  username, page, size }: IGetUserGroupProps): Promise<ITableData<UserGroupModelProps> | null> => {
  const queryData = await seqDb.query(`select c.id,c.groupName,c.userNums,us.username,c.createTime from 
    (SELECT  ug.id,ug.groupName,u.userNums,ug.userId,ug.createTime FROM user_group ug 
    left join (select userGroupId,count(1) userNums from user group by userGroupId ) u on u.userGroupId = ug.id) c left join user us
    on c.userId = us.id where c.groupName like "%${groupName}%" and us.username like "%${username}%"  order by c.createTime desc limit ${ (page - 1) * size},${page * size};`,  { type: QueryTypes.SELECT })
    const counts: Array<{counts: number}> = await seqDb.query(`SELECT COUNT(*) AS counts FROM user_group;`,  { type: QueryTypes.SELECT })
    let result = {
      rows: queryData,
      count: counts[0]!.counts
    } 
  // let where: IGetUserGroup = {}
  // if (groupName) where.groupName = groupName
  // if (username) where.username = username
  // UserGroupModel.hasMany(UserModel, { foreignKey: 'userGroupId'})
  // UserModel.belongsTo(UserGroupModel)
  // const result = await UserGroupModel.findAndCountAll({
  //   limit: size, //每页10条
  //   offset: (page - 1) * size, //第x页*每页个数
  //   subQuery: false,
  //   order: [
  //     ['createTime', 'DESC']
  //   ],
  //   where: {
  //     groupName: {
  //       [SequelizeOp.like]: `%${groupName}%`
  //     }
  //   },
  //   include: [{
  //     model: UserModel,
  //     attributes: {
  //       exclude:  ['password']
  //     },
  //     where: {
  //       username:  {
  //         [SequelizeOp.like]: `%${username}%`
  //       }, 
  //     },
  //     // required: false, //默认为true  当userRoom表没有数据  回调将会返回为空  fasle 的时候返回用户信息 userRoom表有信息则添加一个字段 没有则之返回用户信息
  //   }],
  // }).then(value => {
  //   // value = cloneDeeps(value)
  //   value.rows.forEach((row: UserGroupModelProps) => {
  //     row.userNums = row.users?.length
  //   });
  //   return value
  // })
  return result as any
}

export const getAllUserGroup = async (): Promise<UserGroupModelProps[] | null>  => {
  UserModel.hasOne(UserGroupModel, { foreignKey: 'id'})
  UserGroupModel.belongsTo(UserModel);
  const result = await UserGroupModel.findAll({
    subQuery:   false,
    include: [{
      model: UserModel,
    }],  
    attributes:  [
      'id',
      'groupName',
      'username',
      'userId',
      'remark',
      'createTime',
      [sequelize.col('user.username'), 'username'],
    ],  
  })
  return result 
}

export const updateUserGroup = async ({id, groupName, remark } : IAddUserGroup, userState: ICurrentUserInfo) => {
  let result: any;
  if(!id) {
    result = await UserGroupModel.create({
      groupName,
      remark,
      userId: userState.id
    })
  } else {
    result = await UserGroupModel.update({
      groupName, remark}, 
      { where: { id } 
    })
  }
  return result
}

export const getUserGroupInfo = async (id: number): Promise<UserModelProps[] | null> => {

  const result = await seqDb.query('SELECT `id`, `username`, `email`, `phone`, `userGroupId`, `userGroupName`, `roleId`, `roleName`, `status`, `createTime` FROM `user` WHERE `user`.`userGroupId` = ' + id,  { type: QueryTypes.SELECT })

  // const result = await UserModel.findAll({
  //   attributes: {
  //     exclude: ['password']
  //   },
  //   where: {
  //     userGroupId: id
  //   }
  // })
  if (result == null) return null
  return result as UserModelProps[] 
}


export const deleteUserGroup =  async (id: number): Promise<number> => {
  const result = await UserGroupModel.destroy({
    where: { id }
  })
  return result
}


