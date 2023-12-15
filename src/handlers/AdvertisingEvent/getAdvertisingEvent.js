const { getAdvertisingEventByDb } = require("../../controllers/getInDB")

const getAdvertisingEvent = async(req, res)=>{
    try {
        const allAdvertisingEvent = await getAdvertisingEventByDb()
        if(allAdvertisingEvent) res.status(200).json({status: true, allAdvertisingEvent})
    } catch (error) {
        return res.status(500).json({status: false, message: error.message})
    }
}

module.exports = getAdvertisingEvent