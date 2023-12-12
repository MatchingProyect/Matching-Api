const { getProfileInDb } = require("../../controllers/getInDB");

const getProfile = async(req, res)=>{
    try {
        const {id} = req.params;
        const profileFound = await getProfileInDb(id)
        if(profileFound) return res.status(200).json({status: true, profileFound})
        
    } catch (error) {
        return res.status(500).json({status: false, message: error.message})
    }
}

module.exports = getProfile