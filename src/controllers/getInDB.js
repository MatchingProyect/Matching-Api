const dataBase = require('../dataBase/dataBase')
const { User, Profile, Sport, Club, Court, Payment, PaymentType, Reservation, ScoreMatch, TeamMatch } = dataBase.models

const getAllProfInDb = async () => {
    try {
        const profiles = await Profile.findAll()
        if (profiles) {
            return profiles
        }
    } catch (error) {
        throw error.message
    }
}

const getProfileInDb = async (id) => {
    try {
        const profile = await Profile.findOne({ where: { id } })
        if (profile) return profile
    } catch (error) {
        throw error.message
    }
}

const getAllUsersInDb = async () => {
    try {
        const users = await User.findAll()
        if (users) return users
    } catch (error) {
        throw error.message
    }
}

const getUserInDb = async (id) => {
    try {
        const user = await User.findOne({ where: { id } })
        if (user) return user
    } catch (error) {
        throw error.message
    }
}


const searchByName = async (name) => {
    try {
        const searchName = await User.findOne({ where: { name } });
        if (searchName) return searchName;

    } catch (error) {
        throw error.message;
    }
}

const getAllCourtsInDb = async () => {
    try {
        const courts = await Court.findAll();
        if (courts) return courts;
    } catch (error) {
        throw error.message;
    }
}

const getAllPaymentsInDb = async () => {
    try {
        const payments = await Payment.findAll();
        if (payments) return payments;
    } catch (error) {
        throw error.message;
    }
}

const getOnePaymentInDb = async (id) => {
    try {
        const onePayment = await Payment.findOne({ where: { id } });
        if (onePayment) return onePayment;
    } catch (error) {
        throw error.message;
    }
}

const getAllPaymentsTypesInDb = async () => {
    try {
        const paymentsType = await PaymentType.findAll();
        if (paymentsType) return paymentsType;
    } catch (error) {
        throw error.message;
    }
}

const getAllReservationsInDb = async () => {
    try {
        const reservations = await Reservation.findAll();
        if (reservations) return reservations;
    } catch (error) {
        throw error.message;
    }
}

const getOneReservationInDb = async (id) => {
    try {
        const oneReservation = await Reservation.findOne({ where: { id } });
        if (oneReservation) return oneReservation;
    } catch (error) {
        throw error.message
    }
}

const getAllScoreMatchesInDb = async () => {
    try {
        const scoreMatches = await ScoreMatch.findAll();
        if (scoreMatches) return scoreMatches;
    } catch (error) {
        throw error.message;
    }
}

const getAllTeamMatchesInDb = async () => {
    try {
        const teamMatches = await TeamMatch.findAll();
        if (teamMatches) return teamMatches;
    } catch (error) {
        throw error.message;
    }
}

const getOneTeamMatchInDb = async (id) => {
    try {
        const teamMatch = await TeamMatch.findOne({ where: { id } });
        if (teamMatch) return teamMatch;
    } catch (error) {
        throw error.message;
    }
}


//FILTROS

const getPointEventInDb = async () => {
    try {
        const pointsEvents = await PointEvent.findAll()
        if (pointsEvents) return pointsEvents
    } catch (error) {
        throw error.message;
    }
}

const getAdvertisingSystemInDb = async () => {
    try {
        const advertisingSystem = await AdvertisingSystem.findAll()
        if (advertisingSystem) return advertisingSystem
    } catch (error) {
        throw error.message;
    }
}

const getAdvertisingEventByDb = async () => {
    try {
        const advertisingEvenAll = await AdvertisingEvent.findAll()
        if (advertisingEvenAll) return advertisingEvenAll
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
    getAllCourtsInDb,
    getAllPaymentsInDb,
    getOnePaymentInDb,
    getAllPaymentsTypesInDb,
    getAllReservationsInDb,
    getOneReservationInDb,
    getAllScoreMatchesInDb,
    getAllTeamMatchesInDb,
    getOneTeamMatchInDb,
    getPointEventInDb,
    getAdvertisingSystemInDb,
    getAdvertisingEventByDb
}