const { scoreMatchInDb } = require("../../controllers/getInDB");

const getScoreMatch = async(req, res) =>{
    try {
        const {id} = req.params;
        const score = await scoreMatchInDb(id)
        if(score) return res.status(200).json({status: true, score})
    } catch (error) {
        return res.status(500).json({status: false, message: error.message})
    }
}

module.exports = getScoreMatch