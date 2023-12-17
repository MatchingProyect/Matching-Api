const { addMatchTypeInDb } = require("../../controllers/addInDB");

const createMatchType = async(req, res)=>{
    try {
        const {name, description} = req.body;
        const newMatchType = await addMatchTypeInDb(name, description);
        if(newMatchType) return res.status(200).json({status: true, newMatchType});
    } catch (error) {
        return res.status(400).json({status: false, message: error.message});
    }
}


module.exports = createMatchType;