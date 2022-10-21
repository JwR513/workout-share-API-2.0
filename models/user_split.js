'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User_Split extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  User_Split.init(
    {
      userId: DataTypes.INTEGER,
      splitId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'User_Split',
      tableName: 'user_splits'
    }
  )
  return User_Split
}
