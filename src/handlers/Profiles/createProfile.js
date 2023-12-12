const {addProfileInDb} = require("../../controllers/addInDB")


const createProfile= async(req, res)=>{
    try {
        const {laterality, courtSide, matchType, dayPreference, timePreference, categoryLvl}= req.body

        const profileCreated = await addProfileInDb(laterality, courtSide, matchType, dayPreference, timePreference, categoryLvl)
        
        if(profileCreated) return res.status(200).json({status: true, profileCreated})
    } catch (error) {
        return res.status(500).json({status: true, message: error.message})
    }
}

module.exports = createProfile