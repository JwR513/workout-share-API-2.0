const { Split_muscle } = require('../models')

const createThrough = async (req, res) => {
  const through = await Split_muscle.create(req.body)
  res.send(through)
}
const getThroughs = async (req, res) => {
  const throughs = await Split_muscle.findAll()
  res.send(throughs)
}

const deleteAll = async (req, res) => {
  await Split_muscle.destroy({
    where: {
      splitId: req.params.split_Id
    }
  })
  res.send('Deleted')
}

module.exports = {
  createThrough,
  getThroughs,
  deleteAll
}
