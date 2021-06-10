import Router from '@koa/router'
import auth  from './auth'
import user from './user'
import userGroup from './userGroup'
import role from './role'
import member from './member'


const router = new Router()

router.use(auth.routes())
router.use(user.routes())
router.use(userGroup.routes())
router.use(role.routes())
router.use(member.routes())

export default router