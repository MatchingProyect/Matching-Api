const { getOneReservationInDb } = require("../../controllers/getInDB");

const getReservation = async(req, res) => {
 try {
    const {id} = req.params;
    const oneReservation = await getOneReservationInDb(id);
    if(oneReservation) return res.status(200).json({
        status: true,
        oneReservation
    })
    else return res.status(404).json({
        status: false,
        message: 'Reservation not found'
    })
 } catch (error) {
    res.status(500).json({
        status: false,
        message: error.message
    })
 }   
}

module.exports = getReservation;