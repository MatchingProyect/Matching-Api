const {DataTypes} = require('sequelize');

module.exports = (dataBase) => {
    dataBase.define('Payment', {
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
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dateTimeUpdated: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {timestamps: false})
}