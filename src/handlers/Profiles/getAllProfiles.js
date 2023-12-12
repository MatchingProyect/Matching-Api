const { getAllProfInDb } = require("../../controllers/getInDB")




const getAllProfiles = async(req, res)=>{
    try {
        const allProfiles = await getAllProfInDb()
        if(allProfiles){
            return res.status(200).json({status: true, allProfiles})
        }else{
            return res.status(404).json({status: false, message: "not found"})
        }
    } catch (error) {
        return res.status(500).json({status: false, message: error.message})
    }
}

module.exports= getAllProfiles