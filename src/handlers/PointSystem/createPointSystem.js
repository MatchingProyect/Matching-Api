const { addPointSystemInDb } = require("../../controllers/addInDB")



const createPointSystem = async(req, res)=>{
    try {
        const {name, description, pointsQuantityGain} = req.body
        const newPointSystem = await addPointSystemInDb(name, description, pointsQuantityGain)
        if(newPointSystem) return res.status(200).json({status: true, newPointSystem})
    } catch (error) {
        return res.status(500).json({status: false, message: error.message})
    }
}

module.exports = createPointSystem