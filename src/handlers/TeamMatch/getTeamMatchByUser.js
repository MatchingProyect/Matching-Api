const { getTeamMatchByUserId } = require("../../controllers/getInDB");

const getTeamMatchByUser = async(req, res) => {
 try {
    const {id} = req.params;
    const teamMatchByUser = await getTeamMatchByUserId(id);
    if(teamMatchByUser.length > 0) return res.status(200).json({
        status: true,
        teamMatchByUser
    })
    else return res.status(404).json({
        status: false,
        message: 'TeamMatch not found'
    })
 } catch (error) {
    res.status(500).json({
        status: false,
        message: error.message
    })
 }   
}

module.exports = getTeamMatchByUser;