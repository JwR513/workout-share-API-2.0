'use strict'
const { Model } = require('sequelize')
const { Sequelize } = require('.')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.Split, {
        through: models.User_Split,
        as: 'splits',
        foreignKey: 'userId'
      })
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { isEmail: true },
        unique: true
      },
      passwordDigest: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  )
  return User
}
