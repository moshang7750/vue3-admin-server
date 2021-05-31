const path = require('path'),
  Koa = require('koa'),
  cors = require('koa2-cors'),
  bodyparser = require('koa-bodyparser'), // 对于 POST 请求，将 koa2 上下文的 formData 数据解析到 ctx.request.body
  logger = require('koa-logger'), // 日志中间件
  koaStatic = require('koa-static'),
  historyApiFallback = require('koa-history-api-fallback'),
  errorHandler = require('./error/index')

// 接口路径
const router = require('./routes/index')

let app = new Koa()
app.use(cors())
app.use(bodyparser())
app.use(logger())
app.use(historyApiFallback())
errorHandler(app)

// // koa 错误处理
// app.on('error', function (err, ctx) {
//   console.log('server error: ', err)
// })
app.use(router.routes())

app.listen(3000, () => {
  console.log('Koa is listening on port 3000')
})

module.exports = app
