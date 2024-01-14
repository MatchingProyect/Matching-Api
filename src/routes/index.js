const updateCourt = require('../handlers/Court/updateCourt');
const createCourt = require('../handlers/Court/createCourt');
const deleteCourt = require('../handlers/Court/deleteCourt');
const getAllCourts = require('../handlers/Court/getAllCourts');
const createAdvertisingEvent = require('../handlers/AdvertisingEvent/createAdvertisingEvent');
const createLocation = require('../handlers/Location/createLocation');
const getAllLocations = require('../handlers/Location/getAllLocations');
const createMatchResult = require('../handlers/MatchResult/createMatchResult');
const getMatchResult = require('../handlers/MatchResult/getMatchResult');
const createPointEvent = require('../handlers/PointEvent/createPointEvent');
const deletePointEvent = require('../handlers/PointEvent/deletePointEvent');
const getPointEvent = require('../handlers/PointEvent/getPointEvent');
const createPointSystem = require('../handlers/PointSystem/createPointSystem');
const getPointSystem = require('../handlers/PointSystem/getPointSystem');
const createProfile = require('../handlers/Profiles/createProfile');
const deleteProfile = require('../handlers/Profiles/deleteProfile');
const getAllProfiles = require('../handlers/Profiles/getAllProfiles');
const getProfile = require('../handlers/Profiles/getProfile');
const updateProfile = require('../handlers/Profiles/updateProfile');
const createSport = require('../handlers/Sport/createSport');
const getAllSport = require('../handlers/Sport/getAllSport');
const createUser = require('../handlers/Users/createUser');
const deleteUser = require('../handlers/Users/deleteUser');
const getAllUsers = require('../handlers/Users/getAllUsers');
const getUser = require('../handlers/Users/getUser');
const updateUser = require('../handlers/Users/updateUser');
const deleteAdvertisingEvent = require('../handlers/AdvertisingEvent/deleteAdvertisingEvent');
const getAdvertisingEvent = require('../handlers/AdvertisingEvent/getAdvertisingEvent');
const createAdvertisingSystem = require('../handlers/AdvertisingSystem/createAdvertisingSystem');
const getAdvertisingSystem = require('../handlers/AdvertisingSystem/getAdvetisingSystem');
const createMatchType = require("../handlers/MatchType/createMatchType") 
const createShiftSheadule = require("../handlers/ShiftSchedule/createShiftSchedule")
const createReservationType = require("../handlers/ReservationType/CreatereservationType")
const createRatingUser = require("../handlers/RatingUser/createRatingUser")
const createPaymentStatus = require("../handlers/PaymentStatus/createPaymentStatus")
const getAllMatchTypes = require("../handlers/MatchType/getAllMatchType")
const getAllReservation = require("../handlers/ReservationType/getAllReservation")
const updatedReservationTypes = require("../handlers/ReservationType/updateReservationType")
const getRatingUser = require("../handlers/RatingUser/getRatingUser")

const { register, login, loginGoogle, resetPassword, logout, deletedAllUsers } = require("../controllers/authController");
const getAllPayments = require('../handlers/Payment/getAllPayments');
const getPayment = require('../handlers/Payment/getPayment');
const getAllPaymentsTypes = require('../handlers/PaymentType/getAllPaymentTypes');
const getAllReservations = require('../handlers/Reservation/getAllReservations');
const getReservation = require('../handlers/Reservation/getReservation');
const getAllScoreMatches = require('../handlers/ScoreMatch/getAllScoreMatchs');
const getAllTeamMatches = require('../handlers/TeamMatch/getAllTeamMatchs');
const getTeamMatch = require('../handlers/TeamMatch/getTeamMatch');
const createPayment = require('../handlers/Payment/createPayment');
const createPaymentType = require('../handlers/PaymentType/createPaymentType');
const createReservation = require('../handlers/Reservation/createReservation');
const createScoreMatch = require('../handlers/ScoreMatch/createScoreMatch');
const createTeamMatches = require('../handlers/TeamMatch/createTeamMatch');
const updatePayment = require('../handlers/Payment/updatePayment');
const deletePayment = require('../handlers/Payment/deletePayment');
const deleteReservation = require('../handlers/Reservation/deleteReservation');
const deleteTeamMatch = require('../handlers/TeamMatch/deleteTeamMatch');
const getPaymentStatus = require("../handlers/PaymentStatus/getPaymentStatus");

const getScoreMatch = require('../handlers/ScoreMatch/getScoreMatch');
const getAllClubs = require('../handlers/Club/getAllClubs');
const createClub = require('../handlers/Club/createClub');
const getClubById = require('../handlers/Club/getClubById');
const {relationUser, addFriend, friendRequest, getAllFriendsReq, allFriends} = require('../handlers/Users/relationUser');
const {createOrder, notify} = require('../handlers/MercadoPago/createOrder');
const updatePaymentStatus = require('../handlers/PaymentStatus/updatePaymentStatus');
const updatePaymentType = require('../handlers/PaymentType/updatePaymentType');
const borradoLogicoUser = require('../handlers/Users/borradoLogico');
const borradoLogicoLocation = require('../handlers/Location/borradoLogico');
const borradoLogicoReservation = require('../handlers/Reservation/borradoLogico');
const borradoLogicoSport = require('../handlers/Sport/borradoLogico');
const borradoLogicoTeamMatch = require('../handlers/TeamMatch/borradoLogico');
const borradoLogico = require('../handlers/Users/borradoLogico');
const borradoLogicoClub = require('../handlers/Club/borradoLogico');
const borradoLogicoCourt = require('../handlers/Court/borradoLogicoCourt');
const getLocationsById = require('../handlers/Location/getLocationById');
const updateClub = require('../handlers/Club/updateClub');
const volverAdm = require('../handlers/Users/volverAdm');
const online = require('../handlers/Users/online');
const { deleteRequestInDb } = require('../controllers/deleteInDB');
const updatePassword = require('../handlers/Users/updatePassword');
const { getAllFriendsById, getResultMatch } = require('../controllers/getInDB');
const bringSportsProfiles = require('../handlers/Users/bringSportProfiles');
const updateSport = require('../handlers/Sport/updateSport');
const getAllGuestReservation = require('../handlers/GuestReservation/getOneGuestReservation');
const deleteMatchType = require('../handlers/MatchType/deleteMatchType');
const getTeamMatchByUser = require('../handlers/TeamMatch/getTeamMatchByUser');
const getReservationByTeamMatch = require('../handlers/Reservation/getReservationByTeamMatch');
const getValoracionesByUserId = require('../handlers/Valoraciones/valoracionesById');
const createValoracion = require('../handlers/Valoraciones/crearValoraciones');
const usersByTeamMatch = require('../handlers/Users/usersByTeamMatch');
const obtenerReservasPorTipo = require('../handlers/Reservation/reservaByMatchType');
const { crearMatchResultYScoreMatch, createRelationUserByTeam } = require('../controllers/addInDB');
const getCourt = require('../handlers/Court/getCourt');
const updateLocation = require('../handlers/Location/updateLocation');


const router = require("express").Router();

router.get('/clubs', getAllClubs)
router.get('/clubs', getAllClubs)
router.get('/clubs/:id', getClubById)
router.get('/profiles', getAllProfiles);
router.get('/profiles/:id', getProfile);
router.get('/userProfiles/:id', bringSportsProfiles);
router.get('/users', getAllUsers);
router.get('/users/:id', getUser);
router.get('/sports', getAllSport);
router.get('/locations', getAllLocations);
router.get('/locations/:id', getLocationsById);
router.get('/courts', getAllCourts);

router.get('/courts/:id', getCourt);

router.get('/payments', getAllPayments);
router.get('/payment', getPayment);
router.get('/paymentsTypes', getAllPaymentsTypes);
router.get('/reservations', getAllReservations);
router.get('/reservations/:id', getReservation);
router.get('/scoreMatches', getAllScoreMatches);
router.get('/scoreMatches/:id', getScoreMatch)
router.get('/teamMatches', getAllTeamMatches);
router.get('/teamMatch/:id', getTeamMatch);
router.get('/teamMatchByUser/:id', getTeamMatchByUser);
router.get('/advertisingEvent', getAdvertisingEvent);
router.get('/advertisingSystem', getAdvertisingSystem);
router.get('/matchResult', getMatchResult);
router.get('/pointEvent', getPointEvent);
router.get('/pointSystem', getPointSystem);
router.get("/matchType", getAllMatchTypes)
router.get("/reservationType", getAllReservation)
router.get("/paymentStatus", getPaymentStatus)
router.get("/ratingUser", getRatingUser)
router.get('/friendRequest/:id', friendRequest);
router.get('/friendRequest', getAllFriendsReq)
router.get('/friends',  allFriends)
router.get('/friends/:id', getAllFriendsById)
router.get('/guestReservations/:id', getAllGuestReservation);
router.get('/reservationTeamMatch/:id', getReservationByTeamMatch)
router.get('/valoraciones/:id', getValoracionesByUserId)
router.get('/usersByTeam/:id', usersByTeamMatch)
router.get('/reservaByMatchType/:id', obtenerReservasPorTipo)
router.get('/resultadoMarcador/:id', getResultMatch)

router.post('/valoraciones/:id', createValoracion)
router.post('/logout', logout)
router.post('/clubs', createClub)
router.post("/paymentStatus", createPaymentStatus)
router.post("/ShiftSheadule", createShiftSheadule)
router.post("/reservationType", createReservationType)
router.post("/ratingUser", createRatingUser)
router.post("/matchType", createMatchType)
router.post('/locations', createLocation);
router.post('/sports', createSport);
router.post('/profiles', createProfile);
router.post('/users', createUser);
router.post('/courts', createCourt);
router.post('/payments', createPayment);
router.post('/paymentsTypes', createPaymentType);
router.post('/reservations', createReservation);
router.post('/scoreMatches', createScoreMatch);
router.post('/teamMatches', createTeamMatches);
router.post("/resetPasword", resetPassword); //!FireBase
router.post("/deletedAllUsers", deletedAllUsers); //!FireBase
router.post("/loginGoogle", loginGoogle); //!FireBase
router.post('/login', login); //!FireBase
router.post('/register', register); //!FireBase
router.post('/locations', createLocation);
router.post('/advertisingEvent', createAdvertisingEvent);
router.post('/advertisingSystem', createAdvertisingSystem);
router.post('/matchResult', createMatchResult);
router.post('/pointEvent', createPointEvent);
router.post('/pointSystem', createPointSystem);
router.post('/friendRequest', relationUser);
router.post('/addFriend', addFriend);
router.post('/createOrder', createOrder);
router.post('/notify', notify);
router.post('/resultadoMarcador/:id', crearMatchResultYScoreMatch)
router.post('/addUserInTeam', createRelationUserByTeam)

router.put('/restartPassword', updatePassword);
router.put("/reservation/:id", updatedReservationTypes);
router.put('/profiles/:id', updateProfile);
router.put('/updateSport/:id', updateSport);
router.put('/updateLocation/:id', updateLocation);
router.put('/users/:id', updateUser);
router.put('/courts/:id', updateCourt);
router.put('/clubs/:id', updateClub);
router.put('/payments/:id', updatePayment);
router.put('/paymentStatus/:id', updatePaymentStatus);
router.put('/paymentType/:id', updatePaymentType);
router.put('/userEstado/:id', borradoLogicoUser);
router.put('/location/:id', borradoLogicoLocation);
router.put('/reservation/:id', borradoLogicoReservation);
router.put('/sport/:id', borradoLogicoSport);
router.put('/teamMatch/:id', borradoLogicoTeamMatch);
router.put('/userEstado/:id', borradoLogico)
router.put('/clubEstado/:id', borradoLogicoClub)
router.put('/courtEstado/:id', borradoLogicoCourt)
router.put('/volverAdm/:id', volverAdm)
router.put('/userOnline', online)

router.delete('/profiles/:id', deleteProfile);
router.delete('/users/:id', deleteUser);
router.delete('/courts/:id', deleteCourt);
router.delete('/payments/:id', deletePayment);
router.delete('/reservations/:id', deleteReservation);
router.delete('/teamMatches/:id', deleteTeamMatch);
router.delete('/advertisingEvent/:id', deleteAdvertisingEvent);
router.delete('/pointEvent/:id', deletePointEvent);
router.delete('/friendRequest/:id', deleteRequestInDb)
router.delete('/matchType/:id', deleteMatchType);

module.exports = router;