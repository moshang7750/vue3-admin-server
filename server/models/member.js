const Sequelize = require('sequelize')
const theDatabase = require('../config/db.js').sequelizeInterance
const memberSchema = require('../schema/member.js')(theDatabase, Sequelize)

const getMemberList = async function () {
  return await memberSchema.findAndCountAll() // findAndCount() 用 get 路由访问，会得到 204 状态：无数据返回。改用 post 就行
}

module.exports = {
  getMemberList,
}
