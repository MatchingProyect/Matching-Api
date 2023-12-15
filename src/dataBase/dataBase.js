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

const admin =require('../config/firebase');

// Importa la biblioteca de Firebase


// Ruta al archivo JSON que contiene las credenciales de servicio de Firebase
const serviceAccount = require('../../firebase.json');

const appName = 'matching';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
}, appName);

const db = admin.firestore();

// Firestore para obtener datos
const obtenerDatos = async () => {
  try {
    const snapshot = await db.collection('matching').get();
    snapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
    });
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
};

// Llama a la función después de inicializar Firebase
obtenerDatos();

const {DB_USERNAME, DB_PASSWORD, DB_PORT, DB_NAME} = process.env;

const dataBase = new Sequelize(`postgres:${DB_USERNAME}:${DB_PASSWORD}@localhost:${DB_PORT}/${DB_NAME}`);

UserModel(dataBase);
ReservationModel(dataBase);
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



const {User,
    Reservation,
    // GuestReservation,
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

// User.hasMany(GuestReservation);
// GuestReservation.belongsTo(User);

Location.hasMany(User)
User.belongsTo(Location)

User.hasMany(RatingUser);
RatingUser.belongsTo(User);

User.hasMany(Profile)
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

// GuestReservation.hasMany(Reservation);
// Reservation.belongsTo(GuestReservation);

Reservation.hasMany(ReservationType)
ReservationType.belongsTo(Reservation)

Reservation.hasMany(RatingUser)
RatingUser.belongsTo(Reservation)

// Court relationships
Court.belongsTo(Location);
Location.hasMany(Court);

Club.hasMany(Court);
Court.belongsTo(Club);

Court.hasMany(ShiftSchedule)
ShiftSchedule.belongsTo(Court);

// Profile relationships
Club.belongsToMany(Profile, {through: 'ClubProfile'});
Profile.belongsToMany(Club, {through: 'ClubProfile'});

Profile.hasMany(RatingUser)
RatingUser.belongsTo(Profile)

Profile.belongsToMany(Sport, { through: 'ProfileSport' });
Sport.belongsToMany(Profile, { through: 'ProfileSport' });

// Payment relationships

Payment.hasMany(PaymentType)
PaymentType.belongsTo(Payment)

Payment.hasMany(PaymentStatus)
PaymentStatus.belongsTo(Payment)

// TeamMatch relationships
TeamMatch.hasOne(MatchResult);
MatchResult.belongsTo(TeamMatch);

TeamMatch.hasOne(ScoreMatch);
ScoreMatch.belongsTo(TeamMatch);

// TeamMatch.belongsTo(GuestReservation);
// GuestReservation.hasMany(TeamMatch);

// PointSystem relationships
PointSystem.hasOne(PointEvent);
PointEvent.belongsTo(PointSystem);

// AdvertisingSystem relationships
AdvertisingSystem.hasOne(AdvertisingEvent);
AdvertisingEvent.belongsTo(AdvertisingSystem);

module.exports = dataBase;