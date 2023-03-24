import { Router } from 'express'

import {
  registration,
  viewProfile,
  userLogins,
  showflights,
  Showregs,
updateProfile,
bookingflights,
Showbooking,
updatestatus,
ShowReservation,showCancelReservation,
searchFlights,
forgotpassword

} from './controller'


const router = new Router()

router.post('/reg', registration)
router.post('/booking', bookingflights)
router.get('/userlogin', userLogins)
router.get('/forgotpassword', forgotpassword)
router.get('/showbooking', Showbooking)
router.get('/ShowReservation', ShowReservation)
router.get('/showCancelReservation', showCancelReservation)
router.get('/searchFlights', searchFlights)
router.get('/showUsers', Showregs)
router.get('/viewprofile', viewProfile)
router.put('/updateprofile/:id', updateProfile)
router.get('/showflight', showflights)

router.put('/updatestatus/:id', updatestatus)
export default router
