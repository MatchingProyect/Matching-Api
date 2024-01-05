const {DataTypes} = require('sequelize');

module.exports = (dataBase) => {
    dataBase.define('Profile', {
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        laterality:{
            type: DataTypes.STRING,
            allowNull: false
        },
        courtSide:{
            type: DataTypes.STRING,
            allowNull: false
        },
        matchType:{
            type: DataTypes.STRING,
            allowNull: false
        },
        dayPreference:{
            type: DataTypes.STRING,
            allowNull: false
        },
        timePreference:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        categoryLvl:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        estado:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }
    }, {timestamps: false})
}