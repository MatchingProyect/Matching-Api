const { getAllScoreMatchesInDb } = require("../../controllers/getInDB");

const getAllScoreMatches = async(req, res) => {
    try {
        const allScoreMatches = await getAllScoreMatchesInDb();
        if(allScoreMatches) return res.status(200).json({
            status: true,
            allScoreMatches
        })
        else return res.status(404).json({
            status: false,
            message: 'ScoreMatches not found'
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

module.exports = getAllScoreMatches;