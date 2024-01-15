const { userByEmailInDB } = require("../../controllers/getInDB")

const userByEmail = async(req, res) =>{
    try {
        const {email} = req.query 
        console.log('handler', email)
        const userByEmailFound = await userByEmailInDB(email);
        if(userByEmailFound) return res.status(200).json({status: true, userByEmailFound})
    } catch (error) {
        return res.status(500).json({status: false, message: error.message})
    }
}

module.exports = userByEmail