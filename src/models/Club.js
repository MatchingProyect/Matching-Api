const {DataTypes} = require('sequelize');

module.exports = (dataBase) => {
    dataBase.define('Club', {
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        showers: {
            type: DataTypes.STRING,
            allowNull: false
        },
        grills: {
            type: DataTypes.STRING,
            allowNull: false
        },
        parking: {
            type: DataTypes.STRING,
            allowNull: false
        },
        security: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {timestamps: false})
}