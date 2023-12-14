const { addClubInDb } = require("../../controllers/addInDB");

const createClub = async(req, res)=>{
    try {
        const {name, showers, grills, parking, security} = req.body;
        const newClub = await addClubInDb(name, showers, grills, parking, security)
        if(newClub) return res.status(200).json({status: true, newClub})
    } catch (error) {
        return res.status(500).json({status: true, message: error.message})
    }
}

module.exports = createClub

