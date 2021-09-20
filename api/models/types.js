'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Types extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Types.hasMany(models.Pets, {
        foreignKey: 'type_ID'
      })
    }
  };
  Types.init({
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Types',
  });
  return Types;
};