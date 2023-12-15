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

const { register, login } = require("../controllers/authController");
const loginValidators = require("../middlewares/validators");
const getAllPayments = require('../handlers/Payment/getAllPayments');
const getPayment = require('../handlers/Payment/getPayment');
const getAllPaymentsTypes = require('../handlers/PaymentType/getAllPaymentTypes');
const getAllReservations = require('../handlers/Reservation/getAllReservations');
const getReservation = require('../handlers/Reservation/getReservation');
const getAllScoreMatches = require('../handlers/ScoreMatch/getAllScoreMatchs');
const getAllTeamMatches = require('../handlers/TeamMatch/getAllTeamMatchs');
const getTeamMatch = require('../handlers/TeamMatch/getTeamMatch');

const {register, login} = require("../controllers/authController");
const loginValidators = require("../middlewares/validators");

const router = require("express").Router();

router.get('/profiles', getAllProfiles);
router.get('/profiles/:id', getProfile);
router.get('/users', getAllUsers);
router.get('/users/:id', getUser);
router.get('/sports', getAllSport);
router.get('/locations', getAllLocations);
router.get('/courts', getAllCourts);
router.get('/payments', getAllPayments);
router.get('/payment', getPayment);
router.get('/paymentsTypes', getAllPaymentsTypes);
router.get('/reservations', getAllReservations);
router.get('/reservation', getReservation);
router.get('/scoreMatches', getAllScoreMatches);
router.get('/teamMatches', getAllTeamMatches);
router.get('/teamMatch', getTeamMatch);


router.post('/locations', createLocation);
router.post('/sports', createSport);
router.post('/profiles', createProfile);
router.post('/users', createUser);
router.post('courts', createCourt);
router.post('/payments', createPayment);
router.post('/paymentsTypes', createPaymentType);
router.post('/reservations', createReservation);
router.post('/scoreMatches', createScoreMatch);
router.post('/teamMatches', createTeamMatches);
router.post('/login', loginValidators, login);
router.post('/register', register) ;

router.put('/profiles/:id', updateProfile);
router.put('/users/:id', updateUser);
router.put('/courts/:id', updateCourt);
router.put('/payments/:id', updatePayment);

router.delete('/profiles/:id', deleteProfile);
router.delete('/users/:id', deleteUser);
router.delete('/courts/:id', deleteCourt);
router.delete('/payments/:id', deletePayment);
router.delete('/reservation/:id', deleteReservation);
router.delete('/teamMatches/:id', deleteTeamMatch);

router.post('/advertisingEvent', createAdvertisingEvent);
router.delete('/advertisingEvent/:id', deleteAdvertisingEvent);
router.get('/advertisingEvent', getAdvertisingEvent);
router.post('/advertisingSystem', createAdvertisingSystem);
router.get('/advertisingSystem', getAdvertisingSystem);
router.post('/matchResult', createMatchResult);
router.get('/matchResult', getMatchResult);
router.post('/pointEvent', createPointEvent);
router.delete('/pointEvent/:id', deletePointEvent);
router.get('/pointEvent', getPointEvent);
router.post('/pointSystem', createPointSystem);
router.get('/pointSystem', getPointSystem);

module.exports = router;