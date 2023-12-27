const {DataTypes} = require('sequelize');

module.exports = (dataBase) => {
    dataBase.define('User', {
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        gender:{
            type: DataTypes.STRING,
            allowNull: false
        },
        dayBirth:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        phone:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        creditCardWarranty:{
            type: DataTypes.INTEGER
        },
        avatarImg:{
            type: DataTypes.STRING,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        description:{
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {timestamps: false})
}