const {DataTypes} = require('sequelize');

module.exports = (dataBase) => {
    dataBase.define('PaymentStatus', {
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'pending'
        },
        estado:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }
    }, {timestamps: false})
}