const { deleteMatchTypeInDb } = require("../../controllers/deleteInDB");

const deleteMatchType = async(req, res) => {
    try {
        const {id} = req.params;
        const matchTypeDeleted = await deleteMatchTypeInDb(id);
        if(matchTypeDeleted) return res.status(200).json({
            status: true,
            message: 'MatchType deleted'
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

module.exports = deleteMatchType;