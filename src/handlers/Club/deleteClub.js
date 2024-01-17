const { deleteClubInDb } = require("../../controllers/deleteInDB");

const deleteClub = async(req, res) => {
    try {
        const { id } = req.params;
        const deleteClub = await deleteClubInDb(id)
        if (deleteClub) return res.status(200).json( {status: true, deleteClub})
    } catch (error) {
console.log('handler', error.message);
        return res.status(500).json({status: false, message: error.message})
    }
};

module.exports = deleteClub