const { getAdvertisingSystemInDb } = require("../../controllers/getInDB")

const getAdvertisingSystem = async(req, res)=>{
    try {
        const allAdvertisingSystem = await getAdvertisingSystemInDb()
        if(allAdvertisingSystem) return res.status(200).json({status: true, allAdvertisingSystem})
        
    } catch (error) {
        return res.status(500).json({status: false, message: error.message})
    }
}

module.exports = getAdvertisingSystem