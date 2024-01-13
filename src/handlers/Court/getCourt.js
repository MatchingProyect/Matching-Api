const { getOneCourtInDb } = require("../../controllers/getInDB");

const getCourt = async(req, res)=>{
    try {
        const {id} = req.params;
        console.log(id)
        const courtFound = await getOneCourtInDb(id)
        if(courtFound) return res.status(200).json({status: true, courtFound})
        
    } catch (error) {
        return res.status(500).json({status: false, message: error.message})
    }
}

module.exports = getCourt;