const {Sequelize} = require('sequelize');
require("dotenv").config();
const UserModel = require('../models/User');
const ProfileModel = require('../models/Profile');
const SportModel = require('../models/Sport')
const ClubModel = require('../models/Club')
const LocationModel = require('../models/Location')


const {DB_USERNAME, DB_PASSWORD, DB_PORT, DB_NAME} = process.env;

const dataBase = new Sequelize(`postgres:${DB_USERNAME}:${DB_PASSWORD}@localhost:${DB_PORT}/${DB_NAME}`);

UserModel(dataBase);
ProfileModel(dataBase);
SportModel(dataBase)
ClubModel(dataBase)
LocationModel(dataBase)

const {User, Profile} = dataBase.models;

User.hasMany(Profile);
Profile.belongsTo(User);

module.exports = dataBase;