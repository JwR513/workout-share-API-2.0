const { Split } = require('../models')

const createSplit = async (req, res) => {
  let newSplit = await Split.create(req.body)
  res.send(newSplit)
}
const getSplits = async (req, res) => {
  let splits = await Split.findAll({
    include: [{ all: true }]
  })
  res.send(splits)
}
const getOneSplit = async (req, res) => {
  let split = await Split.findOne({
    where: {
      id: req.params.split_Id
    }
  })
  res.send(split)
}

const includemuscles = async (req, res) => {
  const muscles = await Split.findAll({
    where: {
      id: req.params.split_Id
    },
    include: 'muscles'
  })
  res.send(muscles)
}

const updatename = async (req, res) => {
  let name = await Split.update(
    { name: req.body.name },
    {
      where: {
        id: req.params.split_Id
      }
    }
  )
  res.send(name)
}

const deleteSplit = async (req, res) => {
  await Split.destroy({
    where: {
      id: req.params.split_Id
    }
  })
  res.send('Split Deleted')
}

module.exports = {
  createSplit,
  getSplits,
  updatename,
  getOneSplit,
  includemuscles,
  deleteSplit
}
