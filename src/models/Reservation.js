const {DataTypes} = require('sequelize');

module.exports = (dataBase) => {
    dataBase.define('Reservation', {
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        dateTimeStart: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dateTimeEnd: {
            type: DataTypes.STRING,
            allowNull: false
        },
        totalCost: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
}