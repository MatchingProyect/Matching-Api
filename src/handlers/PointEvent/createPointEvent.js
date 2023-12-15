const {  addPointEventInDb } = require("../../controllers/addInDB")

const createPointEvent = async(req, res)=>{
    try {
        const {dateTime, qrCode} = req.body
        const newPointEvent = await addPointEventInDb(dateTime, qrCode)
        if(newPointEvent) return res.status(200).json({status: true, newPointEvent})
    } catch (error) {
        return res.status(500).json({status: false, message: error.message})
    }
}

module.exports = createPointEvent