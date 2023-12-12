const dataBase = require('../dataBase/dataBase')
const {User, Profile} = dataBase.models

const deleteProfileInDb = async(id) =>{
    try {
        const deleted = await Profile.destroy({where: {id}})
        if(deleted) return deleted
    } catch (error) {
        return error.message
    }
}

const deleteUserInDb = async(id) =>{
    try {
        const deleting = await User.destroy({where: {id}})
        if(deleting) return deleting
    } catch (error) {
        return error.message
    }
}

module.exports = {
    deleteProfileInDb,
     deleteUserInDb
}