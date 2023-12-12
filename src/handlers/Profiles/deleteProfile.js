const { deleteProfileInDb } = require("../../controllers/deleteInDB");

const deleteProfile = async(req, res)=>{
    try {
        const {id}= req.params;
        const deletProf = await deleteProfileInDb(id)
        if(deletProf) return res.status(200).json({status: true, deletProf})
    } catch (error) {
        return res.status(500).json({status: false, deletProf})
    }
}

module.exports = deleteProfile