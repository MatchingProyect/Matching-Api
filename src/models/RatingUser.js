const {DataTypes} = require('sequelize');

module.exports = (dataBase) => {
    dataBase.define('RatingUser', {
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        categoryLvl: {
        type: DataTypes.INTEGER,
        allowNull: false
       },
       defense: {
        type: DataTypes.INTEGER,
            allowNull: false
       },
       attack: {
        type: DataTypes.INTEGER,
            allowNull: false
       },
       control: {
        type: DataTypes.INTEGER,
            allowNull: false
       }
       
    }, {timestamps: false})
}