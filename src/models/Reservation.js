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
            type: DataTypes.DATE,
            allowNull: false
        },
        dateTimeEnd: {
            type: DataTypes.DATE,
            allowNull: false
        },
        totalCost: {
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