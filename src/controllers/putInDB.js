const dataBase = require('../dataBase/dataBase')
const {User, Profile} = dataBase.models

const putProfile = async(id, laterality, courtSide, matchType, dayPreference, timePreference, categoryLvl)=>{
    try {
        const updatedProfile = await Profile.update({laterality, courtSide, matchType, dayPreference, timePreference, categoryLvl}, {where: {id}})
        if(updatedProfile) return updatedProfile
    } catch (error) {
        return error.message
    }
}

const putUser = async(id,lastName, gender, dayBirth, email, phone, creditCardWarranty, avatarImg, password)=>{
    try {
        const updatedUser = await User.update({name, lastName, gender, dayBirth, email, phone, creditCardWarranty, avatarImg, password}, {where: {id}})
        if(updatedUser) return updatedUser
    } catch (error) {
        return error.message
    }
}

module.exports = {
    putProfile,
    putUser
}