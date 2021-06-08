import Sequelize,  { Model, DataTypes, Optional } from 'sequelize';
import seq from '../db';
import { UserModelProps } from './user';

export interface UserGroupModelProps {
  id: number;
  groupName: string;
  userNums?: number;
  userId: number;
  username?: string;
  remark?: string;
  users?: Array<UserModelProps>
  createTime?: string | Date
}

// 在“UserGroup.build”和“UserGroup.create”调用中，有些属性是可选的
interface UserCreationAttributes
  extends Optional<
  UserGroupModelProps,
    'id' | 'userNums' 
  > {}

interface UserGroupInstance
  extends Model<UserGroupModelProps, UserCreationAttributes>,
  UserGroupModelProps {}


const UserGroup = seq.define<UserGroupInstance>('user_group', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    groupName: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    userNums: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "用户个数"
    },
    username: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "创建人",
      references: {
        model: 'User',
        key: 'id'
      }
    },
    remark: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.NOW
    }
  }, {
    freezeTableName: true,
    // tableName: 'user_group',
    // timestamps: false,
    // indexes: [
    //   {
    //     name: "PRIMARY",
    //     unique: true,
    //     using: "BTREE",
    //     fields: [
    //       { name: "id" },
    //     ]
    //   },
    // ]
  });

  export default UserGroup