const { addReservationInDb, addGuestReservationInDb } = require("../../controllers/addInDB");

const createReservation = async (req, res) => {
    try {
        const { dateTimeStart, dateTimeEnd, totalCost, teamMatch, UserId, CourtId, MatchTypeId, ReservationTypeId } = req.body;
        const reservationCreated = await addReservationInDb(dateTimeStart, dateTimeEnd, totalCost, teamMatch, UserId, CourtId, MatchTypeId, ReservationTypeId);

        const {addReservation, addPayment, addPaymentStatus, addPaymentType, addTeamMatch, addUserMatch} = reservationCreated;

        console.log('ID_RESERVATION_GET', addReservation.get('id'))

        if (reservationCreated) {

            await addGuestReservationInDb({ UserId, ReservationId: addReservation.dataValues.id, TeamMatchId: addTeamMatch.get('id') });

            return res.status(200).json({
                status: true,
                addReservation,
                addPayment,
                addPaymentStatus,
                addPaymentType,
                addTeamMatch,
                addUserMatch,
                idReserva: addReservation.get('id')
            });
        } else console.log('No se creó 404')
        
    } catch (error) {
        res.status(500).json({
            error: console.error(error),
            status: false,
            message: error.message
        })
    }
}

module.exports = createReservation;