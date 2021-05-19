const Sequelize = require('sequelize')

const sequelizeInterance = new Sequelize(
  'mysql://web:archforce@172.31.132.52:3306/web',
  {
    define: {
      timestamps: false, // 取消Sequelzie自动给数据表添加的 createdAt 和 updatedAt 两个时间戳字段
    },
  }
)

;(async () => {
  try {
    await sequelizeInterance.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
})()

module.exports = { sequelizeInterance }
