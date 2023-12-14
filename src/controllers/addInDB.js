const dataBase = require('../dataBase/dataBase')
const {User, Profile, Sport, Club} = dataBase.models

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
        return error.message
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

module.exports= {
    addUserInDb,
    addProfileInDb,
    addSportInDb,
    addClubInDb
}