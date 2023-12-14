const {DataTypes} = require('sequelize');

module.exports = (dataBase) => {
    dataBase.define('RatingUser', {
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        permanent: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
       
    }, {timestamps: false})
}