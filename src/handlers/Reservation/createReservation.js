const { addReservationInDb, addGuestReservationInDb } = require("../../controllers/addInDB");

const createReservation = async (req, res) => {
    try {
        const { dateTimeStart, dateTimeEnd, totalCost, teamMatch, UserId, CourtId, MatchTypeId, FriendsId } = req.body;
        const reservationCreated = await addReservationInDb(dateTimeStart, dateTimeEnd, totalCost, teamMatch, UserId, CourtId, MatchTypeId, FriendsId);

        const {addReservation, addPayment, addPaymentStatus, addPaymentType, addTeamMatch} = reservationCreated;


        if (reservationCreated) {

            await addGuestReservationInDb({ UserId, ReservationId: addReservation.dataValues.id, TeamMatchId: addTeamMatch.get('id') });

            return res.status(200).json({
                status: true,
                addReservation,
                addPayment,
                addPaymentStatus,
                addPaymentType,
                addTeamMatch,
                idReserva: addReservation.get('id')
            });
        } else console.log('No se creó 404')
        
    } catch (error) {
        res.status(500).json({
            status: false,
            message: console.log(error)
        })
    }
}

module.exports = createReservation;