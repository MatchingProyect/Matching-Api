const {DataTypes} = require('sequelize');

module.exports = (dataBase) => {
    dataBase.define('Club', {
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
        showers: {
            type: DataTypes.STRING,
            allowNull: false
        },
        grills: {
            type: DataTypes.STRING,
            allowNull: false
        },
        parking: {
            type: DataTypes.STRING,
            allowNull: false
        },
        security: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imgClub: {
            type: DataTypes.STRING,
            defaultValue: 'https://res.cloudinary.com/dbffmtz0y/image/upload/v1704318585/360_F_332320458_OFW95fppmZAYYs3lT8CwDfK2HdQLF7RU_gmvtja.jpg'
        },
        estado:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }
    }, {timestamps: false})
}