const { getPointEventInDb } = require("../../controllers/getInDB")



const getPointEvent = async(req, res) =>{
    try {
        const pointEvent = await getPointEventInDb()

        if(pointEvent) return res.status(200).json({status: true, pointEvent})


    } catch (error) {
        return res.status(500).json({status: false, message: error.message})
    }
}

module.exports = getPointEvent