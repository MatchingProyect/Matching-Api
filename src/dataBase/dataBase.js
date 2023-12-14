const {Sequelize} = require('sequelize');
require("dotenv").config();
const UserModel = require('../models/User');
const ProfileModel = require('../models/Profile');
const SportModel = require('../models/Sport')
const ClubModel = require('../models/Club')
const LocationModel = require('../models/Location')


const PointSystemModel = require('../models/PointSystem')
const PointEventModel = require('../models/PointEvent')
const AdvertisingSystemModel = require('../models/AdvertisingSystem')
const MatchResultModel = require('../models/MatchResult')
const MatchTypeModel = require('../models/MatchType')
const RatingUserModel = require('../models/RatingUser')
const ReservationTypeModel = require('../models/ReservationType')
const AdvertisingEventModel = require('../models/AdvertisingEvent')


const ShiftScheduleModel = require('../models/ShiftSchedule')
const PaymentStatusModel = require('../models/PaymentStatus')
const ReservationModel = require('../models/Reservation')
const TeamMatchModel = require('../models/TeamMatch')
const ScoreMatchModel = require('../models/ScoreMatch')
const CourtModel = require('../models/Court')
const PaymentModel = require('../models/Payment')
const PaymentTypeModel = require('../models/PaymentType')

const {DB_USERNAME, DB_PASSWORD, DB_PORT, DB_NAME} = process.env;

const dataBase = new Sequelize(`postgres:${DB_USERNAME}:${DB_PASSWORD}@localhost:${DB_PORT}/${DB_NAME}`);

ShiftScheduleModel(dataBase)
PaymentModel(dataBase)
PaymentStatusModel(dataBase)
ReservationModel(dataBase)
TeamMatchModel(dataBase)
ScoreMatchModel(dataBase)
CourtModel(dataBase)
PaymentTypeModel(dataBase)
PointSystemModel(dataBase)
PointEventModel(dataBase)
AdvertisingSystemModel(dataBase)
MatchResultModel(dataBase)
MatchTypeModel(dataBase)
RatingUserModel(dataBase)
ReservationTypeModel(dataBase)
AdvertisingEventModel(dataBase)

UserModel(dataBase);
ProfileModel(dataBase);
SportModel(dataBase)
ClubModel(dataBase)
LocationModel(dataBase)

const {User, Profile} = dataBase.models;

User.hasMany(Profile);
Profile.belongsTo(User);

module.exports = dataBase;