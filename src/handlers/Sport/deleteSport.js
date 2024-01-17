const {deleteSportInDb } = require('../../controllers/deleteInDB');

const deleteSport = async(req, res) => {
    try {
        const { id } = req.params;
        const deleteSport = await deleteSportInDb(id)
        if (deleteSport) return res.status(200).json({status: true, deleteSport})
    } catch (error) {
        return res.status(500).json({status: false, message: error.message})
    }
};

module.exports = deleteSport
