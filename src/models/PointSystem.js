const {DataTypes} = require('sequelize');

module.exports = (dataBase) => {
    dataBase.define('PointSystem', {
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
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pointsQuantityGain: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        estado:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }
       
    }, {timestamps: false})
}