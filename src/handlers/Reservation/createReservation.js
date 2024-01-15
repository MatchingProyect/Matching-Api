const { addReservationInDb, addGuestReservationInDb } = require("../../controllers/addInDB");

const createReservation = async (req, res) => {
    try {
        const { dateTimeStart, dateTimeEnd, totalCost, teamMatch, UserId, CourtId, MatchTypeId, FriendsId } = req.body;


        console.log('bros',FriendsId)

        if(!FriendsId && MatchTypeId !== "d81fe1b8-345a-4b4c-97b9-6e64b1116aec" && !Array.isArray(FriendsId)) return res.status(404).json({status: false, message: 'amigos no agregados'})

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