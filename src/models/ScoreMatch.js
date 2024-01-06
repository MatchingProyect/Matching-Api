const {DataTypes} = require('sequelize');

module.exports = (dataBase) => {
    dataBase.define('ScoreMatch', {
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        firstSet: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        secondSet: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        thirdSet: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {timestamps: false})
}