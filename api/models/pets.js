'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pets.belongsTo(models.People, {
        foreignKey: 'owner_ID'
      })

      Pets.belongsTo(models.Types, {
        foreignKey: 'type_ID'
      })

      Pets.belongsTo(models.Sizes, {
        foreignKey: 'size_ID'
      })

      Pets.hasMany(models.Diagnoses, {
       foreignKey: 'FK_Pets_Diagnoses'
      })
    }
  };
  Pets.init({
    name: DataTypes.STRING,
    breed: DataTypes.STRING,
    age: DataTypes.INTEGER,
    weight: DataTypes.STRING,
    sex: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pets',
  });
  return Pets;
};