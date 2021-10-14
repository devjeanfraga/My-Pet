'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sexes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Sexes.belongsToMany(models.Pets, {
        foreignKey: 'sex_id',
        through: 'Pets_Sexes',
        as: 'animals',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      })
    }
  };
  Sexes.init({
    gender: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sexes',
  });
  return Sexes;
};