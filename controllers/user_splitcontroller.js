const { User_Split } = require('../models')

const createUserSplit = async (req, res) => {
  const usersplit = await User_Split.create(req.body)
  res.send(usersplit)
}
const getByUser = async (req, res) => {
  const usersplits = await User_Split.findAll({
    where: {
      userId: req.params.user_Id
    }
  })
  res.send(usersplits)
}

const getAll = async (req, res) => {
  const all = await User_Split.findAll()
  res.send(all)
}

const getThroughBySplitId = async (req, res) => {
  const throughs = await User_Split.findOne({
    where: {
      splitId: req.params.split_Id
    }
  })
  res.send(throughs)
}
module.exports = {
  createUserSplit,
  getByUser,
  getAll,
  getThroughBySplitId
}
