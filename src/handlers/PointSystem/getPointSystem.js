const { getPointSystemInDb } = require("../../controllers/getInDB")



const getPointSystem = async(req, res) =>{
    try {
        const pointSystem = await getPointSystemInDb()

        if(pointSystem) return res.status(200).json({status: true, pointSystem})


    } catch (error) {
        return res.status(500).json({status: false, message: error.message})
    }
}

module.exports = getPointSystem