const { getAllGuestReservationInDbByUserId } = require("../../controllers/getInDB");

const getAllGuestReservation = async(req, res)=>{
    try {
        const {id} = req.params;
        const guestReservationFound = await getAllGuestReservationInDbByUserId(id);
        if(guestReservationFound) return res.status(200).json({status: true, guestReservationFound});
        
    } catch (error) {
        return res.status(500).json({status: false, message: error.message})
    }
}

module.exports = getAllGuestReservation;