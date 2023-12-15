const { addTeamMatchesInDb } = require("../../controllers/addInDB");

const createTeamMatches = async(req, res) => {
    try {
        const {name} = req.body;
        const teamMatchCreated = await addTeamMatchesInDb(name);
        if(teamMatchCreated) return res.status(200).json({
            status: true,
            teamMatchCreated
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

module.exports = createTeamMatches;