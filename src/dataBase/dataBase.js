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

const {User,
    Reservation,
    GuestReservation,
    Location,
    RatingUser,
    Profile,
    Sport,
    PointEvent,
    AdvertisingEvent,
    Payment,
    Court,
    Club,
    ScoreMatch,
    ShiftSchedule,
    PaymentType,
    PaymentStatus,
    TeamMatch,
    MatchResult,
    ReservationType,
    MatchType,
    PointSystem,
    AdvertisingSystem} = dataBase.models;

// User relationships
User.hasMany(Reservation);
Reservation.belongsTo(User);

User.hasMany(GuestReservation);
GuestReservation.belongsTo(User);

User.hasMany(Location);
Location.belongsTo(User);

User.hasMany(RatingUser);
RatingUser.belongsTo(User);

User.hasOne(Profile);
Profile.belongsTo(User);

User.belongsToMany(Sport, { through: 'UserSport' });
Sport.belongsToMany(User, { through: 'UserSport' });

User.belongsToMany(PointEvent, { through: 'UserPointEvent' });
PointEvent.belongsToMany(User, { through: 'UserPointEvent' });

User.belongsToMany(AdvertisingEvent, { through: 'UserAdvertisingEvent' });
AdvertisingEvent.belongsToMany(User, { through: 'UserAdvertisingEvent' });

// Reservation relationships
Reservation.hasOne(Payment);
Payment.belongsTo(Reservation);

Reservation.belongsTo(Court);
Court.hasMany(Reservation);

Reservation.hasOne(MatchType);
MatchType.belongsTo(Reservation);

Reservation.belongsTo(GuestReservation);
GuestReservation.hasMany(Reservation);

Reservation.belongsTo(ReservationType);
ReservationType.hasMany(Reservation);

Reservation.belongsTo(RatingUser);
RatingUser.hasMany(Reservation);

// Court relationships
Court.belongsTo(Location);
Location.hasMany(Court);

Court.belongsTo(Club);
Club.hasMany(Court);

Court.hasOne(ShiftSchedule);
ShiftSchedule.belongsTo(Court);

// Profile relationships
Profile.belongsTo(Club);
Club.hasOne(Profile);

Profile.belongsTo(RatingUser);
RatingUser.hasMany(Profile);

Profile.belongsToMany(Sport, { through: 'ProfileSport' });
Sport.belongsToMany(Profile, { through: 'ProfileSport' });

// Payment relationships
Payment.belongsTo(PaymentType);
PaymentType.hasMany(Payment);

Payment.belongsTo(PaymentStatus);
PaymentStatus.hasMany(Payment);

// TeamMatch relationships
TeamMatch.hasOne(MatchResult);
MatchResult.belongsTo(TeamMatch);

TeamMatch.hasOne(ScoreMatch);
ScoreMatch.belongsTo(TeamMatch);

TeamMatch.belongsTo(GuestReservation);
GuestReservation.hasMany(TeamMatch);

// PointSystem relationships
PointSystem.hasOne(PointEvent);
PointEvent.belongsTo(PointSystem);

// AdvertisingSystem relationships
AdvertisingSystem.hasOne(AdvertisingEvent);
AdvertisingEvent.belongsTo(AdvertisingSystem);

module.exports = dataBase;