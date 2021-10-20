'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Mom.belongsTo(models.Dad, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      });
      models.Dad.hasOne(Mom);
    }
  };
  Mom.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Mom',
  });

  return Mom;
};