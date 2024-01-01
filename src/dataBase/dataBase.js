const {Sequelize} = require('sequelize');
require("dotenv").config();
const UserModel = require('../models/User');
const ProfileModel = require('../models/Profile');
const GuestReservationModel = require('../models/GestReservation');
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
const FriendRequestModel = require('../models/FriendRequest');

// const {admin, auth} = require('../config/firebase');

const appName = 'matching';

const { firestore } = require('../config/firebase');

const obtenerDatos = async () => {
  try {
    const snapshot = await firestore.collection('matching').get();
    snapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
    });
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
};

// Llama a la función después de inicializar Firebase
obtenerDatos();


const {DB_USERNAME, DB_PASSWORD, DB_PORT, DB_NAME, DB_CONNECTION} = process.env;

// const dataBase = new Sequelize(`${DB_CONNECTION}`);
const dataBase = new Sequelize( DB_CONNECTION, {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    dialectOptions: {
      ssl: true, // Desactiva SSL
    },
  });
// const dataBase = new Sequelize(`postgres:${DB_USERNAME}:${DB_PASSWORD}@localhost:${DB_PORT}/${DB_NAME}`, {logging: false});

UserModel(dataBase);
ReservationModel(dataBase);
GuestReservationModel(dataBase);
LocationModel(dataBase);
RatingUserModel(dataBase);
ProfileModel(dataBase);
SportModel(dataBase);
PointEventModel(dataBase);
AdvertisingEventModel(dataBase);
PaymentModel(dataBase);
CourtModel(dataBase);
ClubModel(dataBase);
ScoreMatchModel(dataBase);
ShiftScheduleModel(dataBase);
PaymentTypeModel(dataBase);
PaymentStatusModel(dataBase);
TeamMatchModel(dataBase);
MatchResultModel(dataBase);
ReservationTypeModel(dataBase);
MatchTypeModel(dataBase);
PointSystemModel(dataBase);
AdvertisingSystemModel(dataBase);
FriendRequestModel(dataBase);


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
    AdvertisingSystem,
    FriendRequest} = dataBase.models;

// User relationships
User.hasMany(Reservation);
Reservation.belongsTo(User);

User.belongsToMany(User, {through: 'UserFriends', as: 'Friends'});

User.belongsToMany(User, {through: 'FriendRequest', as: 'FriendR'});

User.hasMany(FriendRequest);
FriendRequest.belongsTo(User);

User.hasMany(GuestReservation);
GuestReservation.belongsTo(User);

Location.hasMany(User)
User.belongsTo(Location)

User.hasMany(RatingUser);
RatingUser.belongsTo(User);

User.hasMany(Profile)
Profile.belongsTo(User);

User.belongsToMany(Sport, { through: 'SportUser' });
Sport.belongsToMany(User, { through: 'SportUser' });

PointEvent.hasMany(User); //?
User.belongsTo(PointEvent); //?

AdvertisingEvent.hasMany(User); //?
User.belongsTo(AdvertisingEvent); //?

// Reservation relationships
Payment.hasOne(Reservation);
Reservation.belongsTo(Payment);

Reservation.belongsTo(Court);
Court.hasMany(Reservation);

MatchType.hasOne(Reservation);
Reservation.belongsTo(MatchType);

Reservation.hasMany(GuestReservation);
GuestReservation.belongsTo(Reservation);

ReservationType.hasMany(Reservation);
Reservation.belongsTo(ReservationType);

Reservation.hasMany(RatingUser);
RatingUser.belongsTo(Reservation);

// Court relationships
Court.belongsTo(Location);
Location.hasMany(Court);

Club.hasMany(Court);
Court.belongsTo(Club);

Court.hasMany(ShiftSchedule); //?
ShiftSchedule.belongsTo(Court); //?

// Profile relationships
Club.belongsToMany(Profile, {through: 'ClubProfile'});
Profile.belongsToMany(Club, {through: 'ClubProfile'});

Profile.hasMany(RatingUser);
RatingUser.belongsTo(Profile);

Sport.hasMany(Profile);  
Profile.belongsTo(Sport);

// Payment relationships

PaymentType.hasMany(Payment);
Payment.belongsTo(PaymentType);

PaymentStatus.hasMany(Payment); //?
Payment.belongsTo(PaymentStatus); //?

// TeamMatch relationships
TeamMatch.hasOne(MatchResult); //?
MatchResult.belongsTo(TeamMatch); //?

TeamMatch.hasOne(ScoreMatch); //?
ScoreMatch.belongsTo(TeamMatch); //?

TeamMatch.hasMany(GuestReservation);
GuestReservation.belongsTo(TeamMatch);

// PointSystem relationships
PointSystem.hasOne(PointEvent);
PointEvent.belongsTo(PointSystem);

User.hasOne(PointEvent);
PointEvent.belongsTo(User);

User.hasOne(AdvertisingEvent);
AdvertisingEvent.belongsTo(User);

// AdvertisingSystem relationships
AdvertisingSystem.hasOne(AdvertisingEvent);
AdvertisingEvent.belongsTo(AdvertisingSystem);

module.exports = dataBase;