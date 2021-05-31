import auth  from './auth'
import Router from '@koa/router'

const router = new Router()

router.use(auth.routes())

module.exports = router


export default router