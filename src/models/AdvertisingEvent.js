const { DataTypes } = require('sequelize');

module.exports = (dataBase) => {
    dataBase.define('AdvertisingEvent', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        dateTime: {
            type: DataTypes.STRING,
            allowNull: false
        },
        qrCode: {
            type: DataTypes.STRING,
            allowNull: false
        }

    }, { timestamps: false })
}