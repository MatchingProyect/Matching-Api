const dataBase = require('../dataBase/dataBase')
const {User, Profile, Sport} = dataBase.models

const getAllProfInDb = async()=>{
    try {
        const profiles = await Profile.findAll()
        if(profiles){
            return profiles
        }else{
            console.log('error find profiles')
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

const getSportsInDb = async() =>{
    try {
        const sports = await Sport.findAll()

        if(sports) return sports
        
    } catch (error) {
        throw error.message
    }
}

const filterSportInDb = async(sports) =>{
    try {
        const sportsFiltrades = await getSportsInDb()
        if(sportsFiltrades){
            return sportsFiltrades.filter((sport) => {
                sport.name.toLowerCase().includes(sports.toLowerCase())
            })
         
            
        }
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

module.exports = {
    getAllProfInDb,
    getAllUsersInDb,
    getUserInDb,
    getProfileInDb,
    getSportsInDb,
    filterSportInDb,
    searchByName
}