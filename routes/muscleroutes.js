const router = require('express').Router()
const controller = require('../controllers/musclecontrollers')

router.post('/create', controller.createMuscle)
router.get('/muscles', controller.getMuscles)
router.get('/:muscle_Id', controller.getOneMuscle)
module.exports = router
