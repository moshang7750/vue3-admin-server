import Router from '@koa/router'
import { addMemberController, deleteMemberController, getMemberInfoController, updateMemberController } from '../controller/member'

const router = new Router({
  prefix: '/member'
})

router.get('/getAllMember', async ctx => {
  ctx.body = await addMemberController(ctx.request.body)
})

// 获取单个会员信息
router.get('/getOneMember', async ctx => {
  ctx.body = await getMemberInfoController(ctx.request.body)
})

// 获取当前登录会员信息 会员登录信息存储到全局的ctx.state.member上
router.get('/getCurrentMember', async ctx => {
  ctx.body = await getMemberInfoController({id: ctx.state.user.id, name: ctx.state.user.name })
})


// 注册会员信息
router.post('/addMember', async ctx => {
  ctx.body = await addMemberController(ctx.request.body)
})

router.post('/updateMember', async ctx => {
  ctx.body = await updateMemberController(ctx.request.body)
})

router.post('/deleteMember', async ctx => {
  ctx.body = await deleteMemberController(ctx.request.body)
})
  

export default router