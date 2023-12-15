const { addAdvertisingSystem } = require("../../controllers/addInDB")

const createAdvertisingSystem = async(req, res)=>{
    try {
        const {name, descriptionDiscount, pointsQuantityRedeem} = req.body 
        const newAdvertisingSystem = await addAdvertisingSystem(name, descriptionDiscount, pointsQuantityRedeem)
        if(newAdvertisingSystem) return res.status(200).json({status: true, newAdvertisingSystem})
    } catch (error) {
        return res.status(500).json({status: false, message: error.message})
    }
}

module.exports = createAdvertisingSystem