import Router from '@koa/router'
import { loginController, loginMemberController, registerController } from '../controller/auth'

const router = new Router({
  prefix: '/auth'
})
/**
 * 用户注册接口
 * /auth/register
 */
router.post('/register', async ctx => {
  ctx.body = await registerController(ctx.request.body)
})


/**
 * 用户登录
 * /auth/login
 */
 router.post('/login', async ctx => {
  const { username, password } = ctx.request.body
  ctx.body = await loginController({ username, password })
})


/**
 * 会员登录
 */

router.post('/memberLogin', async ctx => {
  const { name, password } = ctx.request.body
  ctx.body = await loginMemberController({ name, password })
})

/**
 * 测试接口
 */

router.get('/test', async ctx => {
  // console.log(1111, ctx)
  ctx.body = '1111'
})

router.post('/test2', async ctx => {
  // console.log(ctx.state)
  ctx.body = '2222'
})



export default router