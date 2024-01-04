const {addUserInDb} = require("../../controllers/addInDB")


const createUser = async(req, res)=>{
    try {
        const {admin,active,inLine, displayName, gender, dayBirth, email, phone, creditCardWarranty, avatarImg, password, description}= req.body
        

        const userCreated = await addUserInDb(admin,active,inLine, displayName,  gender, dayBirth, email, phone, creditCardWarranty, avatarImg, password, description)
        
        if(userCreated) return res.status(200).json({status: true, userCreated})
    } catch (error) {
        return res.status(500).json({status: false, message: error.message})
    }
}

module.exports = createUser