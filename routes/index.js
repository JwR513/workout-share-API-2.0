const router = require('express').Router()
const userroutes = require('./userroutes')
const splitroutes = require('./splitroutes')
const usersplitroutes = require('./user_splitroutes')
const muscleroutes = require('./muscleroutes')
const splitmuscleroutes = require('./split_muscleroutes')

router.use('/user', userroutes)
router.use('/split', splitroutes)
router.use('/usersplit', usersplitroutes)
router.use('/muscle', muscleroutes)
router.use('/splitmuscle', splitmuscleroutes)

module.exports = router
