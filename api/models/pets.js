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
      Pets.belongsTo(models.Clients, {
        foreignKey: 'client_id',
        as: 'client',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      })

      Pets.hasMany(models.Images, {
        foreignKey: 'pet_id',
        as: 'pet',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      })

      Pets.belongsToMany( models.Sexes, {
        foreignKey:'pet_id', 
        through: 'Pets_Sexes',
        as: 'sexes',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      })
    }
  };
  Pets.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    breed: DataTypes.STRING,
    weight: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pets',
  });
  return Pets;
};