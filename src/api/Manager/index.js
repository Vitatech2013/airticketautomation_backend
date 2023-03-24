import { Router } from 'express'

import {

 Addflights,
  Showflights,
  deleteflights,
  Showusers,
  addmanager,
  managerlogin,
  updateflights,
  ShowReservation,
  showCancelReservation,
  updatepassword,
  forgotpassword
  
} from './controller'

const router = new Router()

router.post('/Addflight',Addflights)

router.post('/Addmanager',addmanager)
router.get('/managerlogin', managerlogin)
router.get('/forgotpassword', forgotpassword)
router.get('/showflights', Showflights)
router.get('/showuser', Showusers)
router.get('/ShowReservation', ShowReservation)
router.get('/showCancelReservation', showCancelReservation)


router.delete('/flightdel/:id', deleteflights)
router.put('/flightupdate/:id',updateflights)
router.put('/updatepassword/:id',updatepassword)
export default router
