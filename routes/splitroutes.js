const router = require('express').Router()
const controller = require('../controllers/splitcontroller')
const middleware = require('../middleware')

router.post(
  '/create',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createSplit
)
router.get('/', controller.getSplits)
router.put(
  '/:split_Id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updatename
)
router.get('/:split_Id', controller.getOneSplit)
router.get('/w/:split_Id', controller.includemuscles)
router.delete('/:split_Id', controller.deleteSplit)

module.exports = router
