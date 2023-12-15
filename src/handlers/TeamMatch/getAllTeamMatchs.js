const { response } = require("express");
const { getAllTeamMatchesInDb } = require("../../controllers/getInDB");

const getAllTeamMatches = async(req, res) => {
    try {
        const allTeamMatches = await getAllTeamMatchesInDb();
        if(allTeamMatches) return res.status(200).json({
            status: true,
            allTeamMatches
        })
        else return res.status(404).json({
            status: false,
            message: 'TeamMatches not found'
        })
    } catch (error) { 
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

module.exports = getAllTeamMatches;