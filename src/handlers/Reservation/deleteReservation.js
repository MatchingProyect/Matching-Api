const { deleteReservationInDb } = require("../../controllers/deleteInDB");

const deleteReservation = async(req, res) => {
try {
    const {id} = req.params;
    const reservationDeleted = await deleteReservationInDb(id);
    if(reservationDeleted) return res.status(200).json({
        status: true,
        message: 'Reservation deleted'
    })
} catch (error) {
    res.status(500).json({
        status: false,
        message: error.message
    })
}
}

module.exports = deleteReservation;