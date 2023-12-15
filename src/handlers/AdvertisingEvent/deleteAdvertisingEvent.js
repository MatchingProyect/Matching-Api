const { deleteAdvertisingEventInDb } = require("../../controllers/deleteInDB")

const deleteAdvertisingEvent = async(req, res)=>{
    try {
        const {id} = req.body
        const deletedAdvertisingEve = await deleteAdvertisingEventInDb(id)
        if(deletedAdvertisingEve) return res.status(200).json({status: true, deletedAdvertisingEve})
    } catch (error) {
        return res.status(500).json({status: false, message: error.message})
    }
}

module.exports = deleteAdvertisingEvent