const {Sequelize} = require('sequelize');
require("dotenv").config();
const UserModel = require('../models/User');
const ProfileModel = require('../models/Profile');
const GuestReservationModel = require('../models/GestReservation');
const SportModel = require('../models/Sport')
const ClubModel = require('../models/Club')
const LocationModel = require('../models/Location')
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
const ValoracionesModel = require('../models/Valoraciones')

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

//const dataBase = new Sequelize(`${DB_CONNECTION}`);
const dataBase = new Sequelize( DB_CONNECTION, {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    dialectOptions: {
      ssl: true, // Desactiva SSL
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
  })
//  const dataBase = new Sequelize(`postgres:${DB_USERNAME}:${DB_PASSWORD}@localhost:${DB_PORT}/${DB_NAME}`, {logging: false});


CourtModel(dataBase);



UserModel(dataBase);
ReservationModel(dataBase);
GuestReservationModel(dataBase);
LocationModel(dataBase);
RatingUserModel(dataBase);
ProfileModel(dataBase);
SportModel(dataBase);
// PointEventModel(dataBase);
// AdvertisingEventModel(dataBase);
PaymentModel(dataBase);
ClubModel(dataBase);
ScoreMatchModel(dataBase);
ShiftScheduleModel(dataBase);
PaymentTypeModel(dataBase);
PaymentStatusModel(dataBase);
TeamMatchModel(dataBase);
MatchResultModel(dataBase);
ReservationTypeModel(dataBase);
MatchTypeModel(dataBase);
// PointSystemModel(dataBase);
// AdvertisingSystemModel(dataBase);
FriendRequestModel(dataBase);
ValoracionesModel(dataBase)


const {User,
    Reservation,
    GuestReservation,
    Location,
    RatingUser,
    Profile,
    Sport,
    Payment,
    Valoraciones,
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
    
    FriendRequest} = dataBase.models;



  // Reservation.drop()
  // .then(() => {
  //   Reservation.sync({ force: true })
  //     .then(() => {
  //       console.log('Tabla Reservations recreada con éxito (con force)');
  //     })
  //     .catch((error) => {
  //       console.error('Error al recrear la tabla Reservations:', error);
  //     });
  // })
  // .catch((error) => {
  //   console.error('Error al borrar la tabla Reservations:', error);
  // });

//User relationships



Club.hasMany(Court); // Un Club tiene muchas Court
Club.belongsToMany(Sport, { through: 'ClubSport' });

Sport.belongsToMany(Club, { through: 'ClubSport' }); // Un Sport pertenece a muchos Club
Sport.hasMany(Court);

User.hasMany(Valoraciones, { foreignKey: 'userIdBeingRated' });
Valoraciones.belongsTo(User, { foreignKey: 'userIdBeingRated' });

Court.belongsTo(Club); 
Court.belongsTo(Sport);

User.hasMany(Reservation);
Reservation.belongsTo(User);

User.belongsToMany(User, {through: 'UserFriends', as: 'Friends'});

User.belongsToMany(User, {through: 'FriendRequest', as: 'FriendR'});

Club.belongsTo(Location);
Location.hasMany(Club);

User.hasMany(FriendRequest);
FriendRequest.belongsTo(User);

User.hasOne(GuestReservation, {foreignKey: 'UserId'});
GuestReservation.belongsTo(User, {foreignKey: 'UserId'});

Location.hasMany(User)
User.belongsTo(Location)

User.hasMany(RatingUser);
RatingUser.belongsTo(User);

User.hasMany(Profile)
Profile.belongsTo(User);

User.belongsToMany(Sport, { through: 'SportUser' });
Sport.belongsToMany(User, { through: 'SportUser' });

// PointEvent.hasMany(User); //?
// User.belongsTo(PointEvent); //?

// AdvertisingEvent.hasMany(User); //?
// User.belongsTo(AdvertisingEvent); //?

// Reservation relationships
Payment.hasOne(Reservation, {foreignKey: 'PaymentId'});
Reservation.belongsTo(Payment, {foreignKey: 'PaymentId'});

Reservation.belongsTo(Court);
Court.hasMany(Reservation);

MatchType.hasOne(Reservation);
Reservation.belongsTo(MatchType);

Reservation.hasOne(GuestReservation, {foreignKey: 'ReservationId'});
GuestReservation.belongsTo(Reservation, {foreignKey: 'ReservationId'});

// ReservationType.hasMany(Reservation);
// Reservation.belongsTo(ReservationType);

Reservation.hasMany(RatingUser);
RatingUser.belongsTo(Reservation);

TeamMatch.hasOne(Reservation, {foreignKey: 'TeamMatchId'});
Reservation.belongsTo(TeamMatch, {foreignKey: 'TeamMatchId'});

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

PaymentType.hasMany(Payment, {foreignKey: 'PaymentTypeId'});
Payment.belongsTo(PaymentType, {foreignKey: 'PaymentTypeId'});

PaymentStatus.hasMany(Payment, {foreignKey: 'PaymentStatusId'}); //?
Payment.belongsTo(PaymentStatus, {foreignKey: 'PaymentStatusId'}); //?

// TeamMatch relationships
TeamMatch.hasOne(MatchResult, { onDelete: 'CASCADE' });
MatchResult.belongsTo(TeamMatch);

MatchResult.hasOne(ScoreMatch, { foreignKey: 'MatchResultId' });
ScoreMatch.belongsTo(MatchResult, { foreignKey: 'MatchResultId' });

TeamMatch.hasOne(GuestReservation, {foreignKey: 'TeamMatchId'});
GuestReservation.belongsTo(TeamMatch, {foreignKey: 'TeamMatchId'});

TeamMatch.belongsToMany(User, {through: 'UserMatch'});
User.belongsToMany(TeamMatch, {through: 'UserMatch'});

// PointSystem relationships
// PointSystem.hasOne(PointEvent);
// PointEvent.belongsTo(PointSystem);

// User.hasOne(PointEvent);
// PointEvent.belongsTo(User);

// User.hasOne(AdvertisingEvent);
// AdvertisingEvent.belongsTo(User);

// AdvertisingSystem relationships
// AdvertisingSystem.hasOne(AdvertisingEvent);
// AdvertisingEvent.belongsTo(AdvertisingSystem);

module.exports = dataBase;