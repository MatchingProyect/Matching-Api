const { deleteUserInDb } = require("../../controllers/deleteInDB");

const deleteUser = async(req, res)=>{
    try {
        const {id}= req.params;
        const deletUs = await deleteUserInDb(id)
        if(deletUs) return res.status(200).json({status: true, deletUs})
    } catch (error) {
        return res.status(500).json({status: false, deletProf})
    }
}

module.exports = deleteUser