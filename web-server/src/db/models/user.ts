import { Model, DataTypes, Optional } from 'sequelize';
import seq from '../db';

// sequelize+typescript 参考文档
// https://sequelize.org/master/manual/typescript.html

export interface UserModelProps {
  id: number;
  username: string;
  password: string;
  email: string | null;
  phone: string | null;
  userGroupId?: number | null;
  userGroupName?: string | null;
  roleId?: number | null;
  roleName?: string | null;
  status: 0 | 1;
  createTime?: string | Date
}

export type RegisterModel = Omit<
  UserModelProps,
  'id' | 'userGroupId' | 'userGroupName' | 'roleId' | 'roleName'
>;

// 在“User.build”和“User.create”调用中，有些属性是可选的
interface UserCreationAttributes
  extends Optional<
    UserModelProps,
    'id' | 'status' | 'userGroupId' | 'userGroupName' | 'roleId' | 'roleName'
  > {}

interface UserInstance
  extends Model<UserModelProps, UserCreationAttributes>,
    UserModelProps {}

const User = seq.define<UserInstance>('user', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    userGroupId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "所属用户组"
    },
    userGroupName: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    roleId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "所属角色"
    },
    roleName: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    freezeTableName: true
  }
  // , {
  //   sequelize,
  //   tableName: 'user',
  //   timestamps: false,
  //   indexes: [
  //     {
  //       name: "PRIMARY",
  //       unique: true,
  //       using: "BTREE",
  //       fields: [
  //         { name: "id" },
  //       ]
  //     },
  //   ]
  // }
  );


  export default User