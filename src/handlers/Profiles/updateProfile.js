const { putProfile } = require("../../controllers/putInDB")

const updateProfile = async(req, res)=>{
    try {
        const {id} = req.params
        const {laterality, courtSide, matchType, dayPreference, timePreference, categoryLvl} = req.body
        const profileUpdated = await putProfile(id, laterality, courtSide, matchType, dayPreference, timePreference, categoryLvl)

        if(profileUpdated) return res.status(200).json({status: true, profileUpdated})

    } catch (error) {
        return res.status(500).json({status: false, message: error.message})
    }
}

module.exports = updateProfile