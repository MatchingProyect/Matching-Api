const { addReservationTypeInDb } = require("../../controllers/addInDB");

const createReservationType = async(req, res)=>{
    try {
        const {permanent} = req.body;
        const newReservationType = await addReservationTypeInDb(permanent);
        if(newReservationType) return res.status(200).json({status: true, newReservationType});
    } catch (error) {
        return res.status(500).json({status: false, message: error.message});
    }
}

module.exports = createReservationType;
