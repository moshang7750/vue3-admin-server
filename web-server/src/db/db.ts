import { Sequelize } from 'sequelize'

// const sequelizeInterance = new Sequelize(
//   'mysql://web:archforce@172.31.132.52:3306/web',
//   {
//     define: {
//       timestamps: false, // 取消Sequelzie自动给数据表添加的 createdAt 和 updatedAt 两个时间戳字段
//     },
//   }
// )

const sequelize = new Sequelize('web', 'web', 'archforce', {
  host: '172.31.132.52', // 主机名称
  port: 3306,
  dialect: 'mysql', // 连什么类型数据库
  timezone: '+08:00', // 东八时区
  pool: { // 连接池
    max: 5, // 最大连接数量
    min: 0,
    idle: 10000 // 一个连接池10s之内 没有被使用 则释放
  },
  define: {
    timestamps: false // 取消Sequelzie自动给数据表添加的 createdAt 和 updatedAt 两个时间戳字段
  }
})
export default  sequelize
