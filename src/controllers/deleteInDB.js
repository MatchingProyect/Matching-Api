const dataBase = require('../dataBase/dataBase')

const {User, Profile, PointEvent, AdvertisingEvent} = dataBase.models

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
     destroyPointEvent,
     deleteAdvertisingEventInDb
}