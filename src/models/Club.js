const {DataTypes} = require('sequelize');

module.exports = (dataBase) => {
    dataBase.define('Club', {
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        schedule:{
            type: DataTypes.STRING,
            allowNull: false
        },
        price:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
}