import Sequelize, { Model, DataTypes, Optional } from 'sequelize';
import seq from '../db';

export interface MemberModelProps {
  id: number;
  name: string;
  password?: string;
  email: string;
  phone: string;
  company?: string;
  position?: string;
  isPay?: 0 | 1;
  status: 0 | 1;
  createTime?: string | Date;
}

export type RegisterMemberModel = Omit<
  MemberModelProps,
  'id' | 'isPay' | 'status' | 'company' | 'position'
>;

// 在“Member.build”和“Member.create”调用中，有些属性是可选的
interface MemberCreationAttributes
  extends Optional<
    MemberModelProps,
    'id' | 'status' | 'isPay' | 'company' | 'position'
  > {}

interface MemberInstance
  extends Model<MemberModelProps, MemberCreationAttributes>,
    MemberModelProps {}

const MemberModel = seq.define<MemberInstance>(
  'member',
  {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING(11),
      allowNull: true,
    },
    company: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    isPay: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    freezeTableName: true,
    tableName: 'member',
  }
);

export default MemberModel;
