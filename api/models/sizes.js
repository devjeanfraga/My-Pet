'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sizes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Sizes.hasMany(models.Pets, {
        foreignKey: 'size_ID'
      })
    }
  };
  Sizes.init({
    size: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sizes',
  });
  return Sizes;
};