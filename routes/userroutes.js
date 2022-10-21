const router = require('express').Router()
const controller = require('../controllers/usercontrollers')
const middleware = require('../middleware')

router.get('/users', controller.getUsers)
router.post('/create', controller.createUser)
router.get('/:user_Id', controller.getUserById)
router.get('/wsplits/:user_Id', controller.includeSplits)
router.post('/reg', controller.register)
router.post('/login', controller.login)
router.get(
  '/users/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.checkSession
)
router.put(
  '/passUpdate/:user_Id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updatePassword
)
module.exports = router
