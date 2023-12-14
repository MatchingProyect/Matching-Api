const { addLocationInDb } = require("../../controllers/addInDB");

const createLocation= async(req, res)=>{
    try {
        const {name, adress, city, state, postalCode, country} = req.body;
        const newLocation = await addLocationInDb(name, adress, city, state, postalCode, country)
        if(newLocation) return res.status(200).json({status: true, newLocation})
    } catch (error) {
        return res.status(500).json({status: false, message: error.message})
    }
}

module.exports = createLocation

