const { getUserInDb } = require("../../controllers/getInDB");

const getUser = async(req, res)=>{
    try {
        const {id} = req.params;
        const userFound = await getUserInDb(id)
        if(userFound) return res.status(200).json({status: true, userFound})
        
    } catch (error) {
        return res.status(500).json({status: false, message: error.message})
    }
}

module.exports = getUser