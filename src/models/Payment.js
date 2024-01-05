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
            allowNull: false,
            defaultValue: 'Reserva_Cancha'
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        estado:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }
    })
}