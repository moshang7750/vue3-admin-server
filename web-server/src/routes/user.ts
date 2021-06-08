import Router from '@koa/router'
import { deleteUserController, getOneUserController, getUserController, setUserStatusController, updateUserController } from '../controller/user'

const router = new Router({
  prefix: '/user'
})

/**
 * 获取用户 分页查询
 * /user/getUser
 */
router.get('/getUser', async ctx => {
  ctx.body = await getUserController(ctx.request.body)
})

// 获取单个用户信息
router.get('/getOneUser', async ctx => {
  ctx.body = await getOneUserController(ctx.request.body)
})

// 获取当前用户信息
router.get('/getCurrentUser', async ctx => {
  ctx.body = await getOneUserController({id: ctx.state.user.id})
})


// 更改用户状态
router.post('/setUserStatus',  async ctx => {
  ctx.body = await setUserStatusController(ctx.request.body)
})

// 更改用户信息
router.post('/updateUser', async ctx => {
  ctx.body = await updateUserController(ctx.request.body)
})

// 删除用户
router.post('/deleteUser', async ctx => {
  ctx.body = await deleteUserController(ctx.request.body)
})


export default router