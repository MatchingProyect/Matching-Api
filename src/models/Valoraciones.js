const {DataTypes} = require('sequelize');

module.exports = (dataBase) => {
    dataBase.define('Valoraciones', {
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        valoracion:{
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