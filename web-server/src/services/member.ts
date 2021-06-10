import MemberModel, {
  MemberModelProps,
  RegisterMemberModel,
} from '../db/models/member';
// import { createMd5 } from '../utils/createMD5';
import { SequelizeOp } from '../utils/sequelizeCommon';
import { IPageSize, ITableData, IUserStatus, MemberWhereProps } from './types';

/**
 * 创建会员
 */
export const createMember = async ({
  name,
  password,
  email,
  phone,
}: RegisterMemberModel) => {
  const result = await MemberModel.create({
    name,
    password,
    email,
    phone,
    company: '',
    position: '',
    status: 1,
    isPay: 0,
  });
  return result.toJSON();
};

export type IGetMemberProps = {
  name?: string;
  email?: string;
  phone?: string;
} & IPageSize;

/**
 * 分页获取会员列表
 * @param param0
 * @returns
 */

export const getAllMember = async ({
  name,
  email,
  phone,
  page,
  size,
}: IGetMemberProps): Promise<ITableData<MemberModelProps> | null> => {
  let where: Omit<IGetMemberProps, 'page' | 'size'> = {};
  if (name) where.name = name;
  if (email) where.email = email;
  if (phone) where.phone = phone;
  const result = await MemberModel.findAndCountAll({
    attributes: {
      exclude: ['password'],
    },
    limit: size, //每页10条
    offset: (page - 1) * size, //第x页*每页个数
    order: [['createTime', 'DESC']],
    where: {
      name: {
        [SequelizeOp.like]: `%${name}%`,
      },
      email: {
        [SequelizeOp.like]: `%${email}%`,
      },
      phone: {
        [SequelizeOp.like]: `%${phone}%`,
      },
    },
  });
  if (result == null) return null;
  return result as ITableData<MemberModelProps>;
};

// 查询用户信息
export type IMemberIdParams = Pick<MemberModelProps, 'id'>;
export const getMemberInfo = ({ name, password, id }: MemberWhereProps) => {
  const where: MemberWhereProps = {
    name,
  };
  if (password) {
    // where.password = createMd5(password);
    where.password = password;
  }
  if (typeof id != 'undefined') {
    where.id = id;
  }
  const result = MemberModel.findOne({
    attributes: {
      exclude: ['password', 'createdAt', 'updatedAt'],
    },
    where,
  });
  if (result == null) return null;
  return result;
};

// 修改会员信息
export const updateMember = async (params: MemberModelProps) => {
  const { id } = params;
  const result = await MemberModel.update(params, { where: { id } });
  return result;
};

// 修改会员状态
export const setMemberStatus = async (params: IUserStatus) => {
  const { id } = params;
  const result = await MemberModel.update(params, { where: { id } });
  return result;
};

// 删除会员
export const deleteMember = async (params: IMemberIdParams) => {
  const result = await MemberModel.destroy({ where: { ...params } });
  return result;
};
