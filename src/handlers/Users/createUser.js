const {addUserInDb} = require("../../controllers/addInDB")


const createUser = async(req, res)=>{
    try {
        const {name, lastName, gender, dayBirth, email, phone, creditCardWarranty, avatarImg, password}= req.body

        const userCreated = await addUserInDb(name, lastName, gender, dayBirth, email, phone, creditCardWarranty, avatarImg, password)
        
        if(userCreated) return res.status(200).json({status: true, userCreated})
    } catch (error) {
        return res.status(500).json({status: true, message: error.message})
    }
}

module.exports = createUser