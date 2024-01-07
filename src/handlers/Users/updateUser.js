const { putUser } = require("../../controllers/putInDB")

const updateUser = async(req, res)=>{
    try {
        console.log(req.body)
        console.log(req.params)

        const {id} = req.params
        const {admin, displayName, gender, dayBirth, email, phone, creditCardWarranty, avatarImg, password, onLine} = req.body

        const userUpdated = await putUser(id, admin, displayName, gender, dayBirth, email, phone, creditCardWarranty, avatarImg, password, onLine)
        console.log(userUpdated)
        if(userUpdated) return res.status(200).json({status: true, userUpdated})

    } catch (error) {
        console.log(error)
        return res.status(500).json({status: false, message: error.message})
    }
}

module.exports = updateUser