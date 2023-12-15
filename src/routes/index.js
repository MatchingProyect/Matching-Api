const createAdvertisingEvent = require('../handlers/AdvertisingEvent/createAdvertisingEvent');
const deleteAdvertisingEvent = require('../handlers/AdvertisingEvent/deleteAdvertisingEvent');
const getAdvertisingEvent = require('../handlers/AdvertisingEvent/getAdvertisingEvent');
const createAdvertisingSystem = require('../handlers/AdvertisingSystem/createAdvertisingSystem');
const getAdvertisingSystem = require('../handlers/AdvertisingSystem/getAdvetisingSystem');
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
const router = require("express").Router();
router.post('/advertisingEvent', createAdvertisingEvent)
router.delete('/advertisingEvent/:id', deleteAdvertisingEvent)
router.get('/advertisingEvent', getAdvertisingEvent)
router.post('/advertisingSystem', createAdvertisingSystem)
router.get('/advertisingSystem', getAdvertisingSystem)
router.post('/matchResult', createMatchResult)
router.get('/matchResult', getMatchResult)
router.post('/pointEvent', createPointEvent)
router.delete('/pointEvent/:id', deletePointEvent)
router.get('/pointEvent', getPointEvent)
router.post('/pointSystem', createPointSystem)
router.get('/pointSystem', getPointSystem)






router.get('/profiles', getAllProfiles)
router.get('/profiles/:id', getProfile)
router.get('/users', getAllUsers)
router.get('/users/:id', getUser)
router.get('/sports', getAllSport)
router.get('/locations', getAllLocations)

router.post('/login', loginValidators, login)
router.post('/register', register) 
router.post('/locations', createLocation)
router.post('/sports', createSport)
router.post('/profiles', createProfile)
router.post('/users', createUser)
router.delete('/profiles/:id', deleteProfile)
router.delete('/users/:id', deleteUser)
router.put('/profiles/:id', updateProfile)
router.put('/users/:id', updateUser)


module.exports = router;