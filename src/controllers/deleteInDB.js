const dataBase = require('../dataBase/dataBase')
const {User, Profile, Court, Payment, Reservation, TeamMatch, PointEvent, PointSystem} = dataBase.models

const deleteProfileInDb = async(id) =>{
    try {
        const deleted = await Profile.destroy({where: {id}})
        if(deleted) return deleted
    } catch (error) {
        throw error.message
    }
}

const deleteUserInDb = async(id) =>{
    try {
        const deleting = await User.destroy({where: {id}})
        if(deleting) return deleting
    } catch (error) {
        throw error.message
    }
}

const deleteCourtInDb = async(id) => {
    try {
        const courtDeleted = await Court.destroy({where: {id}});
        if(courtDeleted) return courtDeleted;
    } catch (error) {
        throw error.message;
    }
}

const deletePaymentInDb = async(id) => {
    try {
        const paymentDeleted = await Payment.destroy({where: {id}});
        if(paymentDeleted) return paymentDeleted;
    } catch (error) {
        throw error.message
    }
}

const deleteReservationInDb = async(id) => {
    try {
        const reservationDeleted = await Reservation.destroy({where: {id}});
        if(reservationDeleted) return reservationDeleted;
        
    } catch (error) {
        throw error.message
    }
}

const deleteTeamMatchInDb = async(id) => {
    try {
        const teamMatchDeleted = await TeamMatch.destroy({where: {id}});
        if(teamMatchDeleted) return teamMatchDeleted;
    } catch (error) {
        throw error.message;
    }
}

const destroyPointEvent = async(id) =>{
    try {
        const deletePoint = await PointEvent.destroy({where: {id}})
        if(deletePoint) return deletePoint
    } catch (error) {
        return error.message
    }
}

const deleteAdvertisingEventInDb = async(id)=>{
    try {
        const deletedInDbAdvertising = await AdvertisingEvent.destroy({where: {id}})
        if(deletedInDbAdvertising) return deletedInDbAdvertising
    } catch (error) {
        return error.message
    }
}

module.exports = {
    deleteProfileInDb,
     deleteUserInDb,
     deleteCourtInDb,
     deletePaymentInDb,
     deleteReservationInDb,
     deleteTeamMatchInDb,
     destroyPointEvent,
     deleteAdvertisingEventInDb
}