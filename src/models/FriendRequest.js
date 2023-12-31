const {DataTypes} = require('sequelize');

module.exports = (dataBase) => {
    dataBase.define('FriendRequest', {
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: "pending"
        },
        estado:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }
    }, {timestamps: false})
}