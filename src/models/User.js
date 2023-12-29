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
            defaultValue: false
        },
        displayName:{
            type: DataTypes.STRING,
            allowNull: false
        },
      
        gender:{
            type: DataTypes.STRING,
            allowNull: false
        },
        dayBirth:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        phone:{
            type: DataTypes.STRING,
            allowNull: false
        },
        creditCardWarranty:{
            type: DataTypes.INTEGER
        },
        avatarImg:{
            type: DataTypes.STRING,
            defaultValue: 'https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg'
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        description:{
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {timestamps: false})
}