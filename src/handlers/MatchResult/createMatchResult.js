const { addMatchResultInDb } = require("../../controllers/addInDB");

const createMatchResult = async(req, res)=>{
    try {
        const {name} = req.body;
        const newResultMatch = await addMatchResultInDb(name)
        if(newResultMatch) return res.status(200).json({status: true, newResultMatch})
    } catch (error) {
        return res.status(500).json({status: false, message: error.message})
    }
}

module.exports = createMatchResult