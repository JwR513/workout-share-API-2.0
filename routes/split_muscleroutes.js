const router = require('express').Router()
const controller = require('../controllers/split_musclecontroller')

router.post('/create', controller.createThrough)
router.get('/', controller.getThroughs)
router.delete('/:split_Id', controller.deleteAll)
module.exports = router
