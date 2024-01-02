const { Op } = require('sequelize')
const dataBase = require('../dataBase/dataBase')
const { User, Profile, Court, Payment, PaymentType, Reservation, ScoreMatch, TeamMatch, PointEvent, PointSystem, AdvertisingSystem, AdvertisingEvent, PaymentStatus, RatingUser, FriendRequest, UserFriends } = dataBase.models

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

const getAllUsersInDb = async (offset, limit) => {
    try {
        const users = await User.findAll({ 
            offset: offset, 
            limit: limit,
            attributes: { exclude: ['password'] }
        })
        if (users) return users
    } catch (error) {
        throw error.message
    }
}

const getUserInDb = async (id) => {
    try {
        let friends = await UserFriends.findAll({where: {UserId: id}});
        if(!friends.length) friends = await UserFriends.findAll({where: {FriendId: id}});
        const user = await User.findOne({ where: { id }, 
            include: FriendRequest })
            if (user && friends){
            const info = {friends, user}
            console.log(friends)
            return info;
        } 

    } catch (error) {
        throw error.message
    }
}

const getFriendRequestInDb = async (id) => {
    try {
        const user = await FriendRequest.findOne({ 
            where: { FriendRId: id }
        });
        if(user){
            const userQueMando = await User.findOne({
                where: {id: user.userId}
            })
            return {user, userQueMando}
        }
    } catch (error) {
        throw error.message;
    }
}


const searchByName = async (displayName) => {
    try {
        const searchName = await User.findOne({
            where: {
                displayName: {
                    [Op.iLike]: `${displayName}`
                } 
            } 
        });
        if (searchName) return searchName;

    } catch (error) {
        throw error.message;
    }
}

const getAllCourtsInDb = async (offset, limit) => {
    try {
        const courts = await Court.findAll({ offset: offset, limit: limit });
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

const getAllReservationsInDb = async (offset, limit) => {
    try {
        const reservations = await Reservation.findAll({ offset: offset, limit: limit });
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

const scoreMatchInDb = async (id) => {
    try {
        const getScore = await ScoreMatch.findOne({ where: { id } })
        if (getScore) return getScore
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



const getPointEventInDb = async () => {
    try {
        const pointsEvents = await PointEvent.findAll()
        if (pointsEvents) return pointsEvents
    } catch (error) {
        throw error.message;
    }
}

const getPointSystemInDb = async () => {
    try {
        const pointSystem = await PointSystem.findAll();
        if (pointSystem) return pointSystem;
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



const getRatingUserFromDb = async (userId) => {

  try {
    
    const ratingUser = await RatingUser.findOne({where: {userId}});
    if(ratingUser) {
        return ratingUser
      
    }
  } catch (error) {
    throw error.message;
  }
}

const getAllPaymentStatusesFromDb = async () => {
    try {
        const allPaymentStatuses = await PaymentStatus.findAll();
        return allPaymentStatuses;
    } catch (error) {
        throw new Error(error.message);
    }
};


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
    getOneReservationInDb,
    getAllScoreMatchesInDb,
    getAllTeamMatchesInDb,
    getOneTeamMatchInDb,
    getPointEventInDb,
    getPointSystemInDb,
    getAdvertisingSystemInDb,
    getAdvertisingEventByDb,
    getRatingUserFromDb,
    getAllPaymentStatusesFromDb,
    scoreMatchInDb,
    getAllReservationsInDb,
    getFriendRequestInDb
}