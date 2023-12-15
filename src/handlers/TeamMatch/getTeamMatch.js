const { getOneTeamMatchInDb } = require("../../controllers/getInDB");

const getTeamMatch = async(req, res) => {
 try {
    const {id} = req.params;
    const oneTeamMatch = await getOneTeamMatchInDb(id);
    if(oneTeamMatch) return res.status(200).json({
        status: true,
        oneTeamMatch
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

module.exports = getTeamMatch;