const dataBase = require('../dataBase/dataBase')
const {User,AdvertisingEvent,MatchResult, Profile, Sport, Club, Location, PointSystem, PointEvent, AdvertisingSystem} = dataBase.models

const addUserInDb = async(name, lastName, gender, dayBirth, email, phone, creditCardWarranty, avatarImg, password) =>{
    try {
        if(!name || !lastName || !dayBirth || !email || !phone || !creditCardWarranty || !password) return "faltan datos"
        const [newUser, create] = await User.findOrCreate({where: {name}, 
            defaults: {name, lastName, gender, dayBirth, email, phone, creditCardWarranty, avatarImg, password}
        })

        if(!create)return "este usuario ya existe"

        return newUser

    } catch (error) {
        throw error.message
    }
}

const addProfileInDb = async(laterality, courtSide, matchType, dayPreference, timePreference, categoryLvl)=>{
    try {

        const newProfile = await Profile.create({laterality, courtSide, matchType, dayPreference, timePreference, categoryLvl})

        if(newProfile) return newProfile
    } catch (error) {
        throw error.message
    }
}

const addSportInDb = async(name)=>{
    try {
        if(!name) return "faltan datos"
        const sportAdding = await Sport.create({name})
        if(sportAdding) return sportAdding
    } catch (error) {
        throw error.message
    }
}

const addClubInDb = async(name, showers, grills, parking, security)=>{
    try {
        const addClub = await Club.create({name, showers, grills, parking, security})
        if(addClub) return addClub
    } catch (error) {
        throw error.message
    }
}

const addLocationInDb = async(name, adress, city, state, postalCode, country)=>{
    try {
        const addLocation = await Location.create({name, adress, city, state, postalCode, country})
        if(addLocation) return addLocation
    } catch (error) {
        throw error.message
    }
}

const addPointSystemInDb = async(name, description, pointsQuantityGain)=>{
    try {
        const newPointSys = await PointSystem.create({name, description, pointsQuantityGain})
        if(newPointSys) return newPointSys
    } catch (error) {
        throw error.message
    }
}

const addPointEventInDb = async(dateTime, qrCode)=>{
    try {
        const newPointEve = await PointEvent.create({dateTime, qrCode})
        if(newPointEve) return newPointEve
    } catch (error) {
        throw error.message
    }
}

const addAdvertisingSystem = async(name, descriptionDiscount, pointsQuantityRedeem) =>{
    try {
        const addedAdvertisingSys = await AdvertisingSystem.create({name, descriptionDiscount, pointsQuantityRedeem})
        if(addedAdvertisingSys) return addedAdvertisingSys
    } catch (error) {
        throw error.message
    }
}

const addAdvertisingEventInDb = async(dateTime, qrCode)=>{
    try {
        const addAdvertising = await AdvertisingEvent.create({dateTime, qrCode})
        if(addAdvertising) return addAdvertising
    } catch (error) {
        throw error.message
    }
}

const createMatchResultInDb = async(name)=>{
    try {
        const resultMatched = await MatchResult.create({name})
        if(resultMatched) return resultMatched
    } catch (error) {
        throw error.message
    }
}
//samir

const addMatchInDB = async (type) => {
  try {
    const matchType = new Match({
      type
    })
    return await matchType.save();
  } catch (error) {
       throw error; 
  }
}
module.exports= {
    createMatchResultInDb,
    addUserInDb,
    addProfileInDb,
    addSportInDb,
    addClubInDb,
    addLocationInDb,

    addPointSystemInDb,
    addPointEventInDb,
    addAdvertisingSystem,
    addAdvertisingEventInDb
    addCourtInDb,
    addPaymentInDb,
    addPaymentTypeInDb,
    addReservationInDb,
    addScoreMatchInDb,
    addTeamMatchesInDb
}