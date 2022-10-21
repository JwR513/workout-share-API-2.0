'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Split extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Split.belongsToMany(models.User, {
        through: models.User_Split,
        as: 'users',
        foreignKey: 'splitId'
      })
      Split.belongsToMany(models.Muscle, {
        through: models.Split_muscle,
        as: 'muscles',
        foreignKey: 'splitId'
      })
    }
  }
  Split.init(
    {
      name: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Split',
      tableName: 'splits'
    }
  )
  return Split
}
