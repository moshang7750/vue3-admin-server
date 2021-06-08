import Router from '@koa/router'
import { getAddRoleControll, getAllRoleInfoControll, getRoleControll, getUpdateRoleControll } from '../controller/role'
import { deleteRole } from '../services/role'

const router = new Router({
  prefix: '/role'
})

/**
 * 角色组分页查询
 */

router.get('/getRole', async ctx => {
ctx.body = await getRoleControll(ctx.request.body)
})

router.post('/addRole', async ctx => {
  ctx.body = await getAddRoleControll(ctx.request.body, ctx.state.user)
})


router.post('/updateRole', async ctx => {
  ctx.body = await getUpdateRoleControll(ctx.request.body.id)
})


router.post('/deleteRole', async ctx => {
  ctx.body = await deleteRole(ctx.request.body.id)
})

/**
 * 查询所有属于该角色下的用户
 */
router.get('/getRoleAllUser', async ctx => {
  ctx.body = await getAllRoleInfoControll(ctx.request.body.id)
})



  
export default router