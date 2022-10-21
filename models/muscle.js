'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Muscle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Muscle.belongsToMany(models.Split, {
        through: models.Split_muscle,
        as: 'splits',
        foreignKey: 'muscleId'
      })
    }
  }
  Muscle.init(
    {
      name: DataTypes.STRING,
      porp: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Muscle',
      tableName: 'muscles'
    }
  )
  return Muscle
}
