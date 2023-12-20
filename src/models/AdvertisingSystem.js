const {DataTypes} = require('sequelize');

module.exports = (dataBase) => {
    dataBase.define('AdvertisingSystem', {
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
       descriptionDiscount: {
        type: DataTypes.STRING,
            allowNull: false
       },
       pointsQuantityRedeem: {
        type: DataTypes.INTEGER,
            allowNull: false
       }
       
    }, {timestamps: false})
}