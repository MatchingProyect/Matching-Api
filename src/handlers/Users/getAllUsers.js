const { getAllUsersInDb } = require("../../controllers/getInDB")



const getAllUsers = async(req, res) =>{
    try {
        const allUsers = await getAllUsersInDb()
        if(allUsers){
            return res.status(200).json({status: true, allUsers})
        }else{
            return res.status(404).json({status: false, message: 'not found'})
        }
    } catch (error) {
        return res.status(500).json({status: false, message: error.message})
    }
}

module.exports= getAllUsers