const { User } = require('../models')
const middleware = require('../middleware')
const { raw } = require('body-parser')

const getUsers = async (req, res) => {
  const users = await User.findAll()
  res.send(users)
}

const getUserById = async (req, res) => {
  const user = await User.findOne({
    where: {
      id: req.params.user_Id
    }
  })
  res.send(user)
}

const createUser = async (req, res) => {
  const newUser = await User.create(req.body)
  res.send(newUser)
}

const includeSplits = async (req, res) => {
  const userAndSplits = await User.findOne({
    where: {
      id: req.params.user_Id
    },
    include: 'splits'
  })
  res.send(userAndSplits)
}
const login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email
      },
      raw: true
    })
    if (
      user &&
      (await middleware.comparePassword(user.passwordDigest, req.body.password))
    ) {
      let payload = {
        id: user.id,
        email: user.email
      }
      let token = await middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}
const register = async (req, res) => {
  try {
    const { email, password, username } = req.body

    let passwordDigest = await middleware.hashPassword(password)

    const user = await User.create({ username, passwordDigest, email })

    res.send(user)
  } catch (error) {
    throw error
  }
}

const checkSession = async (req, res) => {
  let { token } = res.locals
  res.send(token)
}

const updatePassword = async (req, res) => {
  const { password } = req.body

  let newPassword = await middleware.hashPassword(password)

  let newPass = await User.update(
    { passwordDigest: newPassword },
    {
      where: {
        id: req.params.user_Id
      }
    }
  )
  res.send('Password Changed')
}
module.exports = {
  getUsers,
  createUser,
  getUserById,
  includeSplits,
  login,
  register,
  checkSession,
  updatePassword
}
