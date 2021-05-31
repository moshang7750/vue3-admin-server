const Router = require('koa-router')
const member = require('./memberRoute')

const router = new Router()

router.use('/member', member.routes())

module.exports = router
