const memberMoudel = require('../models/member')

const getMemberList = async function () {
  const result = await memberMoudel.getMemberList()
  return {
    code: 200,
    success: true,
    total: result.count,
    list: result.rows,
    msg: '获取会员列表成功！',
  }
}

module.exports = {
  getMemberList,
}
