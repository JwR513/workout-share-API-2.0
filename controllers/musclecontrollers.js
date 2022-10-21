const { Muscle } = require('../models')

const createMuscle = async (req, res) => {
  const muscle = await Muscle.create(req.body)
  res.send(muscle)
}
const getMuscles = async (req, res) => {
  const muscles = await Muscle.findAll()
  res.send(muscles)
}
const getOneMuscle = async (req, res) => {
  const muscle = await Muscle.findOne({
    where: {
      id: req.params.muscle_Id
    }
  })
  res.send(muscle)
}
module.exports = {
  createMuscle,
  getMuscles,
  getOneMuscle
}
