const path = require('path'),
  Koa = require('koa'),
  cors = require('koa2-cors'),
  koaRouter = require('koa-router'),
  bodyparser = require('koa-bodyparser'), // 对于 POST 请求，将 koa2 上下文的 formData 数据解析到 ctx.request.body
  logger = require('koa-logger'), // 日志中间件
  koaStatic = require('koa-static'),
  historyApiFallback = require('koa-history-api-fallback')

// 接口路径
const memberRoutes = require('./routes/memberRoute.js')

let app = new Koa()
const router = new koaRouter()
app.use(cors())
app.use(bodyparser())
app.use(logger())
app.use(historyApiFallback())

// koa 错误处理
app.on('error', function (err, ctx) {
  console.log('server error: ', err)
})
// 挂载到 koa-router 上
router.use(memberRoutes.routes())

app.use(router.routes()) // 将路由规则挂载到Koa上。
app.use(async (ctx, next) => {
  // 之前的逻辑
  await next()
  console.log('访问我了')
  console.log(ctx.URL, 'ctx')
  // 之后的逻辑
})

// router.post('/member/list', async (ctx, next) => {
//   console.log(2)
//   ctx.body = 'user/remove2'
// })

app.listen(3000, () => {
  console.log('Koa is listening on port 3000')
})

module.exports = app
