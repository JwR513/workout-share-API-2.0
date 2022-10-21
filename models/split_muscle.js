'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Split_muscle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Split_muscle.init(
    {
      splitId: DataTypes.INTEGER,
      muscleId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Split_muscle',
      tableName: 'split_muscles'
    }
  )
  return Split_muscle
}
