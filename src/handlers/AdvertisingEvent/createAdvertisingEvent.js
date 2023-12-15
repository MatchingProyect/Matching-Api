const { addAdvertisingEventInDb } = require("../../controllers/addInDB")

const createAdvertisingEvent = async(req, res)=>{
    try {
        const {dateTime, qrCode} = req.body
        const newAdvertisingEvent = await addAdvertisingEventInDb(dateTime, qrCode)
        if(newAdvertisingEvent) return res.status(200).json({status: true, newAdvertisingEvent})
    } catch (error) {
        return res.status(500).json({status: false, message: error.message})
    }
}

module.exports = createAdvertisingEvent