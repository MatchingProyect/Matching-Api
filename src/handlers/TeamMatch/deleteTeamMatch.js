const { deleteTeamMatchInDb } = require("../../controllers/deleteInDB");

const deleteTeamMatch = async(req, res) => {
    try {
        const {id} = req.params;
        const teamMatchDeleted = await deleteTeamMatchInDb(id);
        if(teamMatchDeleted) return res.status(200).json({
            status: true,
            message: 'TeamMatch deleted'
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

module.exports = deleteTeamMatch;