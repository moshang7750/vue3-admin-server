import Router from '@koa/router'
import { updateUserGroupControll, getUserGroupControll, getAllUserGroupControll, deleteUserGroupControll, getOneUserGroupUserControll, getUserGroupInfoControll } from '../controller/userGroup'

const router = new Router({
  prefix: '/userGroup'
})


/** 
 *用户组分页查询
 * /userGroup/getUserGroup
 */

router.get('/getUserGroup', async ctx => {
  ctx.body = await getUserGroupControll(ctx.request.body)
})

/**
 * 查询所有用户组
 */
router.get('/getAllUserGroup', async ctx => {
  ctx.body = await getAllUserGroupControll()
})

/**
 * 查询某一组下所有的用户
 */

router.get('/getOneUserGroupUser', async ctx => {
  ctx.body = await getOneUserGroupUserControll(ctx.request.body.id)
})

/**
 * 根据id 查用户组详情
 */

router.get('/getUserGroupInfo', async ctx => {
  ctx.body = await getUserGroupInfoControll(ctx.request.body.id)
})

router.post('/updateUserGroup', async ctx => {
  ctx.body = await updateUserGroupControll(ctx.request.body, ctx.state.user)
})

router.post('/deleteUserGroup', async ctx => {
  ctx.body = await deleteUserGroupControll(ctx.request.body.id)
})

export default router