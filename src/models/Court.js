const {DataTypes} = require('sequelize');

module.exports = (dataBase) => {
    dataBase.define('Court', {
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
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        priceFee: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        warrantyReservation: {
            type: DataTypes.STRING,
            allowNull: false
        },
        grassType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lighting: {
            type: DataTypes.STRING,
            allowNull: false
        },
        doorsType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        wallsType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        reputation: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {timestamps: false})
}