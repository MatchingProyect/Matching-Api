const { putUser } = require("../../controllers/putInDB")

const updateUser = async(req, res)=>{
    try {
        const {id} = req.params
        const {name, lastName, gender, dayBirth, email, phone, creditCardWarranty, avatarImg, password} = req.body
        const userUpdated = await putUser(name, lastName, gender, dayBirth, email, phone, creditCardWarranty, avatarImg, password, id)

        if(userUpdated) return res.status(200).json({status: true, userUpdated})

    } catch (error) {
        return res.status(500).json({status: false, message: error.message})
    }
}

module.exports = updateUser