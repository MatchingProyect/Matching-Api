const { putUser } = require("../../controllers/putInDB")

const updateUser = async(req, res)=>{
    console.log("update user")
    try {
        const {id} = req.params
        const {name, lastName, gender, dayBirth, email, phone, creditCardWarranty, avatarImg, password} = req.body
        const userUpdated = await putUser(id, name, lastName, gender, dayBirth, email, phone, creditCardWarranty, avatarImg, password)

        if(userUpdated) return res.status(200).json({status: true, userUpdated})

    } catch (error) {
        return res.status(500).json({status: false, message: error.message})
    }
}

module.exports = updateUser