const { addRatingUserInDb } = require("../../controllers/addInDB");

const createRatingUser = async(req, res)=>{
    try {
        const {categoryLvl, defense, attack, control} = req.body;
        const newRatingUser = await addRatingUserInDb(categoryLvl, defense, attack, control);
        if(newRatingUser) return res.status(200).json({status: true, newRatingUser});
    } catch (error) {
        return res.status(500).json({status: false, message: error.message});
    }
}

module.exports = createRatingUser;