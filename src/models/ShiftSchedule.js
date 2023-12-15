const {DataTypes} = require('sequelize');

module.exports = (dataBase) => {
    dataBase.define('ShiftSchedule', {
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
        weekDay: {
            type: DataTypes.STRING,
            allowNull: false
        },
        timeStart: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeEnd: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        partnerPriority: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {timestamps: false})
}