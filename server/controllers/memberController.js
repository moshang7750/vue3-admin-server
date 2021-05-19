const memberMoudel = require('../models/member')

const getMemberList = async function () {
  // const result = await memberMoudel.getMemberList()

  this.body = {
    success: true,
    total: 10,
    list: [],
    msg: '获取会员列表成功！',
  }
}

module.exports = {
  getMemberList,
}
