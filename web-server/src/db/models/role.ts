import Sequelize,  { Model, DataTypes, Optional } from 'sequelize';
import seq from '../db';

export interface RoleModelProps {
  id: number;
  roleName: string;
  menus: Array<string>;
  remark?: string;
  userId: number;
  createTime?: string | Date
}

interface RoleCreationAttributes
  extends Optional<RoleModelProps, 'id' | 'remark'> {}

  
interface RoleGroupInstance
extends Model<RoleModelProps, RoleCreationAttributes>,
RoleModelProps {}

const Role = seq.define<RoleGroupInstance>('role',
  {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    roleName: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    menus: {
      type: DataTypes.JSON,
      allowNull: false,
      comment: "拥有菜单权限的JSON"
    },
    remark: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.NOW
    },
  },{
    freezeTableName: true,
})

export default Role
