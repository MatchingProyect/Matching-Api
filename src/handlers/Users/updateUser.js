const { putUser } = require("../../controllers/putInDB")

const updateUser = async(req, res)=>{
    try {

        const {id} = req.params
        const {admin, displayName, gender, dayBirth, email, phone, creditCardWarranty, avatarImg, password, description, onLine} = req.body

        const userUpdated = await putUser(id, admin, displayName, gender, dayBirth, email, phone, creditCardWarranty, avatarImg, password, description, onLine)
        
        if(userUpdated) return res.status(200).json({status: true, userUpdated})

    } catch (error) {
        return res.status(500).json({status: false, message: error.message})
    }
}

module.exports = updateUser