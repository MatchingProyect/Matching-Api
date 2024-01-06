const {DataTypes} = require('sequelize');

module.exports = (dataBase) => {
    dataBase.define('PaymentType', {
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: null
        }
    }, {timestamps: false})
}