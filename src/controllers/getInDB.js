const dataBase = require('../dataBase/dataBase')
<<<<<<< HEAD


const {User, Profile, PointSystem, PointEvent,AdvertisingEvent, AdvertisingSystem} = dataBase.models
=======
const {User, Profile, Sport, Club, Court, Payment, PaymentType, Reservation, ScoreMatch, TeamMatch} = dataBase.models
>>>>>>> 0adea7635286ed86d57a480c03866e06ebd994fe

const getAllProfInDb = async()=>{
    try {
        const profiles = await Profile.findAll()
        if(profiles){
            return profiles
        }
    } catch (error) {
        throw error.message
    }
}

const getProfileInDb = async(id)=>{
    try {
        const profile = await Profile.findOne({where: {id}})
        if(profile) return profile
    } catch (error) {
        throw error.message
    }
}

const getAllUsersInDb = async()=>{
    try {
        const users = await User.findAll()
        if(users) return users
    } catch (error) {
        throw error.message
    }
}

const getUserInDb = async(id)=>{
    try {
        const user = await User.findOne({where: {id}})
        if(user) return user
    } catch (error) {
        throw error.message
    }
}


const searchByName = async(name) => {
    try {
        const searchName = await User.findOne({where: {name}});
        if(searchName) return searchName;
        
    } catch (error) {
        throw error.message;
    }
}

<<<<<<< HEAD
const getPointSystemInDb = async()=>{
    try {
        const pointSystemDb = await PointSystem.findAll()
        if(pointSystemDb) return pointSystemDb
=======
const getAllCourtsInDb = async() => {
    try {
        const courts = await Court.findAll();
        if(courts) return courts;
>>>>>>> 0adea7635286ed86d57a480c03866e06ebd994fe
    } catch (error) {
        throw error.message;
    }
}
<<<<<<< HEAD
=======

const getAllPaymentsInDb = async() => {
    try {
        const payments = await Payment.findAll();
        if(payments) return payments;
    } catch (error) {
        throw error.message;
    }
}

const getOnePaymentInDb = async(id) => {
    try {
        const onePayment = await Payment.findOne({where: {id}});
        if(onePayment) return onePayment;
    } catch (error) {
        throw error.message;
    }
}

const getAllPaymentsTypesInDb = async() => {
    try {
        const paymentsType = await PaymentType.findAll();
        if(paymentsType) return paymentsType;
    } catch (error) {
        throw error.message;
    }
}

const getAllReservationsInDb = async() => {
    try {
        const reservations = await Reservation.findAll();
        if(reservations) return reservations;
    } catch (error) {
        throw error.message;
    }
} 

const getOneReservationInDb = async(id) => {
    try {
        const oneReservation = await Reservation.findOne({where: {id}});
        if(oneReservation) return oneReservation;
    } catch (error) {
        throw error.message
    }
}

const getAllScoreMatchesInDb = async() => {
    try {
        const scoreMatches = await ScoreMatch.findAll();
        if(scoreMatches) return scoreMatches;
    } catch (error) {
        throw error.message;
    }
}

const getAllTeamMatchesInDb = async() => {
    try {
        const teamMatches = await TeamMatch.findAll();
        if(teamMatches) return teamMatches;
    } catch (error) {
        throw error.message;
    }
}

const getOneTeamMatchInDb = async(id) => {
    try {
        const teamMatch = await TeamMatch.findOne({where: {id}});
        if(teamMatch) return teamMatch;
    } catch (error) {
        throw error.message;
    }
}

//FILTROS
>>>>>>> 0adea7635286ed86d57a480c03866e06ebd994fe

const getPointEventInDb = async()=>{
    try {
        const pointsEvents = await PointEvent.findAll()
        if(pointsEvents) return pointsEvents
    } catch (error) {
        throw error.message;
    }
}

const getAdvertisingSystemInDb = async()=>{
    try {
        const advertisingSystem = await AdvertisingSystem.findAll()
        if(advertisingSystem) return advertisingSystem
    } catch (error) {
        throw error.message;
    }
}

const getAdvertisingEventByDb = async()=>{
    try {
        const advertisingEvenAll = await AdvertisingEvent.findAll()
        if(advertisingEvenAll) return advertisingEvenAll
    } catch (error) {
        throw error.message;
    }
}


module.exports = {
    getAllProfInDb,
    getAllUsersInDb,
    getUserInDb,
    getProfileInDb,
    searchByName,
<<<<<<< HEAD
    getPointSystemInDb,
    getPointEventInDb,
    getAdvertisingSystemInDb,
    getAdvertisingEventByDb
=======
    getAllCourtsInDb,
    getAllPaymentsInDb,
    getOnePaymentInDb,
    getAllPaymentsTypesInDb,
    getAllReservationsInDb,
    getOneReservationInDb,
    getAllScoreMatchesInDb,
    getAllTeamMatchesInDb,
    getOneTeamMatchInDb
>>>>>>> 0adea7635286ed86d57a480c03866e06ebd994fe
}