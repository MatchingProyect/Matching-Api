const dataBase = require('../dataBase/dataBase')
const {User, Profile, Sport, Club, Location, Court, Payment, PaymentType, Reservation, ScoreMatch, TeamMatch} = dataBase.models

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
        throw error.message;
    }
}

const addCourtInDb = async(name, description, priceFee, warrantyReservation, grassType, lighting, doorsType, wallsType, reputation) => {
    try {
        const addCourt = await Court.create({name, description, priceFee, warrantyReservation, grassType, lighting, doorsType, wallsType, reputation})
        if(addCourt) return addCourt;
    } catch (error) {
        throw error.message;
    }
}

const addPaymentInDb = async(name, amount, dateTimeUpdated) => {
    try {
        const addPayment = await Payment.create({name, amount, dateTimeUpdated});
        if(addPayment) return addPayment;
    } catch (error) {
        throw error.message;
    }
}

const addPaymentTypeInDb = async(name) => {
    try {
        const addPaymentType = await PaymentType.create({name});
        if(addPaymentType) return addPaymentType;
    } catch (error) {
        throw error.message;
    }
}

const addReservationInDb = async(dateTimeStart, dateTimeEnd, totalCost) => {
    try {
        const addReservation = await Reservation.create({dateTimeStart, dateTimeEnd, totalCost});
        if(addReservation) return addReservation;
    } catch (error) {
        throw error.message;
    }
}

const addScoreMatchInDb = async(firstSet, secondSet ,thirdSet) => {
    try {
        const addScoreMatch = await ScoreMatch.create({firstSet, secondSet ,thirdSet});
        if(addScoreMatch) return addScoreMatch;
    } catch (error) {
        throw error.message;
    }
}

const addTeamMatchesInDb = async(name) => {
    try {
        const addTeamMatch = await TeamMatch.create({name});
        if(addTeamMatch) return addTeamMatch;
    } catch (error) {
        throw error.message;
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
    addUserInDb,
    addProfileInDb,
    addSportInDb,
    addClubInDb,
    addLocationInDb,
    addCourtInDb,
    addPaymentInDb,
    addPaymentTypeInDb,
    addReservationInDb,
    addScoreMatchInDb,
    addTeamMatchesInDb,
    addMatchInDB
}