'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Diagnoses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Diagnoses.hasMany(models.Pets, {
        foreignKey: 'diagnostic_ID'
      })

      Diagnoses.belongsTo( models.People, {
        foreignKey: 'ownerPet_ID'
      })
    }
  };
  Diagnoses.init({
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Diagnoses',
  });
  return Diagnoses;
};