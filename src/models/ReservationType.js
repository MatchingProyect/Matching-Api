const {DataTypes} = require('sequelize');

module.exports = (dataBase) => {
    dataBase.define('ReservationType', {
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        permanent: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        estado:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }
       
    }, {timestamps: false})
}