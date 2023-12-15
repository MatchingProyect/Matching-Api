const { addReservationInDb } = require("../../controllers/addInDB");

const createReservation = async(req, res) => {
try {
    const {dateTimeStart, dateTimeEnd, totalCost} = req.body;
    const reservationCreated = await addReservationInDb(dateTimeStart, dateTimeEnd, totalCost);

    if(reservationCreated) return res.status(200).json({
        status: true,
        reservationCreated
    })
} catch (error) {
    res.status(500).json({
        status: false,
        message: error.message
    })
}
}

module.exports = createReservation;