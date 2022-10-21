const router = require('express').Router()
const controller = require('../controllers/user_splitcontroller')
const middleware = require('../middleware')

router.post(
  '/create',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createUserSplit
)
router.get('/user/:user_Id/', controller.getByUser)
router.get('/', controller.getAll)
router.get('/splits/:split_Id/', controller.getThroughBySplitId)
module.exports = router
