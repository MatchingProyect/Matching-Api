const { addSportInDb } = require("../../controllers/addInDB")


const createSport = async(req, res)=>{
    try {
        const {name} = req.body
        const newSport = await addSportInDb(name)
        if(newSport) return res.status(200).json({status: true, newSport})
    } catch (error) {
        return res.status(500).json({status: false, message: error.message})
    }
}

module.exports = createSport