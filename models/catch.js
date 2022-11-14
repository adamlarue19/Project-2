const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Catch extends Model {}

Catch.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    species: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type: DataTypes.STRING,
    },
    length: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'project',
  }
);

module.exports = Catch;