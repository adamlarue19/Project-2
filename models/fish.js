const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Fish extends Model {}

Fish.init(
    {
        species: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps:false,
        underscored:true,
        modelName: "fish"
    }
);

module.exports = Fish;