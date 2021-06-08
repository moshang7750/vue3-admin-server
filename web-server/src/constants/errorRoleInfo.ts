import { IErrorInfo } from "./errorInfo"

const errorRoleInfo: IErrorInfo = {
  deleteRoleGroupInfo: {
    code: 10015,
    message: '该用户组内存在用户，若需删除请先移除用户'
  },
  deleteNotUserGroup: {
    code: 10016,
    message: '不存在该角色'
  }
}

export default errorRoleInfo