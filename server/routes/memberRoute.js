const memberController = require('../controllers/memberController.js')
const Router = require('koa-router')
const router = new Router()

router.post('/member/list', memberController.getMemberList)
module.exports = router
