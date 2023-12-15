const dataBase = require('../dataBase/dataBase')
const {User, Profile, Court, Payment} = dataBase.models

const putProfile = async(id, laterality, courtSide, matchType, dayPreference, timePreference, categoryLvl)=>{
    try {
        const updatedProfile = await Profile.update({laterality, courtSide, matchType, dayPreference, timePreference, categoryLvl}, {where: {id}})
        if(updatedProfile) return updatedProfile
    } catch (error) {
        throw error.message
    }
}

const putUser = async(id, name, lastName, gender, dayBirth, email, phone, creditCardWarranty, avatarImg, password)=>{
    try {
        const updatedUser = await User.update({name, lastName, gender, dayBirth, email, phone, creditCardWarranty, avatarImg, password}, {where: {id}})
        if(updatedUser) return updatedUser
    } catch (error) {
        throw error.message
    }
}

const putCourt = async(id, name, description, priceFee, warrantyReservation, grassType, lighting, doorsType, wallsType, reputation) => {
    try {
        const courtUpdated = await Court.update({name, description, priceFee, warrantyReservation, grassType, lighting, doorsType, wallsType, reputation}, {where: {id}});
        if(courtUpdated) return courtUpdated;
    } catch (error) {
        throw error.message;
    }
}

const putPayment = async(id, name, amount, dateTimeUpdated) => {
    try {
        const paymentUpdated = await Payment.update({name, amount, dateTimeUpdated}, {where: {id}});
        if(paymentUpdated) return paymentUpdated;
    } catch (error) {
        throw error.message;
    }
}

module.exports = {
    putProfile,
    putUser,
    putCourt,
    putPayment
}