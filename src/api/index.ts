import request from '../axios/index'

export const getMemberList = (data: any) => {
  return request({
    url: '/member/list',
    method: 'POST',
    data,
  })
}
