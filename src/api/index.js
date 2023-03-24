import { Router } from 'express'
 import manager from './Manager'
import user from './User'




const router = new Router()

router.use('/user', user)
router.use('/manager', manager)
export default router
