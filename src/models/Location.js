const {DataTypes} = require('sequelize');

module.exports = (dataBase) => {
    dataBase.define('Location', {
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}