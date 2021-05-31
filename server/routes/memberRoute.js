const memberController = require('../controllers/memberController.js')
const Router = require('koa-router')
const router = new Router()

router.post('/list', async (ctx) => {
  let data = await memberController.getMemberList()
  ctx.body = data
})

module.exports = router
