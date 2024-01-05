const { addReservationInDb } = require("../../controllers/addInDB");

const createReservation = async (req, res) => {
    try {
        const { dateTimeStart, dateTimeEnd, totalCost, UserId, CourtId, MatchTypeId, ReservationTypeId } = req.body;
        const reservationCreated = await addReservationInDb(dateTimeStart, dateTimeEnd, totalCost, UserId, CourtId, MatchTypeId, ReservationTypeId);

        const {addReservation, addPayment, addPaymentStatus, addPaymentType} = reservationCreated;
        
        if (reservationCreated) return res.status(200).json({
            status: true,
            addReservation,
            addPayment,
            addPaymentStatus,
            addPaymentType,
            idReserva: addReservation.id
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

module.exports = createReservation;