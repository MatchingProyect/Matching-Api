const {DataTypes} = require('sequelize');

module.exports = (dataBase) => {
    dataBase.define('PointEvent', {
        id:{
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
       },
       estado:{
           type: DataTypes.BOOLEAN,
           defaultValue: true,
           allowNull: false
       }
       
    }, {timestamps: false})
}