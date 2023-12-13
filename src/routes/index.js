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

router.get('/profiles', getAllProfiles)
router.get('/profiles/:id', getProfile)
router.get('/users', getAllUsers)
router.get('/users/:id', getUser)
router.get('/sports', getAllSport)

router.post('/sports', createSport)
router.post('/profiles', createProfile)
router.post('/users', createUser)
router.delete('/profiles/:id', deleteProfile)
router.delete('/users/:id', deleteUser)
router.put('/profiles/:id', updateProfile)
router.put('/users/:id', updateUser)


module.exports = router;