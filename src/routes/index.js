const updateCourt = require('../handlers/Court/updateCourt');
const createCourt = require('../handlers/Court/createCourt');
const deleteCourt = require('../handlers/Court/deleteCourt');
const getAllCourts = require('../handlers/Court/getAllCourts');
const createLocation = require('../handlers/Location/createLocation');
const getAllLocations = require('../handlers/Location/getAllLocations');
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
const getAllPayments = require('../handlers/Payment/getAllPayments');
const getPayment = require('../handlers/Payment/getPayment');
const createPayment = require('../handlers/Payment/createPayment');
const deletePayment = require('../handlers/Payment/deletePayment');
const updatePayment = require('../handlers/Payment/updatePayment');
const getAllPaymentsTypes = require('../handlers/PaymentType/getAllPaymentTypes');
const createPaymentType = require('../handlers/PaymentType/createPaymentType');
const getAllReservations = require('../handlers/Reservation/getAllReservations');
const createReservation = require('../handlers/Reservation/createReservation');
const deleteReservation = require('../handlers/Reservation/deleteReservation');
const getAllScoreMatches = require('../handlers/ScoreMatch/getAllScoreMatchs');
const createScoreMatch = require('../handlers/ScoreMatch/createScoreMatch');
const getAllTeamMatches = require('../handlers/TeamMatch/getAllTeamMatchs');
const createTeamMatches = require('../handlers/TeamMatch/createTeamMatch');
const deleteTeamMatch = require('../handlers/TeamMatch/deleteTeamMatch');
const getReservation = require('../handlers/Reservation/getReservation');
const getTeamMatch = require('../handlers/TeamMatch/getTeamMatch');

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

router.delete('/profiles/:id', deleteProfile);
router.delete('/users/:id', deleteUser);
router.delete('/courts/:id', deleteCourt);
router.delete('/payments/:id', deletePayment);
router.delete('/reservation/:id', deleteReservation);
router.delete('/teamMatches/:id', deleteTeamMatch);

router.put('/profiles/:id', updateProfile);
router.put('/users/:id', updateUser);
router.put('/courts/:id', updateCourt);
router.put('/payments/:id', updatePayment);


module.exports = router;