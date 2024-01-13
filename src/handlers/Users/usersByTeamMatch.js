const { getUserByTeamMatchId } = require("../../controllers/getInDB");


const usersByTeamMatch = async(req, res) =>{
    try {
        const {id} = req.params
        const userByTeam = await getUserByTeamMatchId(id)
        if(userByTeam) return res.status(200).json({status: true, userByTeam})
    } catch (error) {
        return res.status(500).json({status: false, message: error.message})
    }
}

module.exports = usersByTeamMatch