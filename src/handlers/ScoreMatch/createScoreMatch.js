const { addScoreMatchInDb } = require("../../controllers/addInDB");

const createScoreMatch = async(req, res) => {
    try {
        const {firstSet, secondSet ,thirdSet} = req.body;
        const scoreMatchCreated = await addScoreMatchInDb(firstSet, secondSet ,thirdSet);
        if(scoreMatchCreated) return res.status(200).json({
            status: true,
            scoreMatchCreated
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

module.exports = createScoreMatch;