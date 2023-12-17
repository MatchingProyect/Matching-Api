const { getAllReservationsInDb, filterByReservations } = require("../../controllers/filtersAndGet");


const getAllReservations = async(req, res) => {
try {
    const {reservations} = req.query;
    if(reservations){
        const reservationFilter = await filterByReservations(reservations);

        if(reservationFilter) return res.status(200).json({
            status: true,
            reservationFilter
        })
    }

    const allReservations = await getAllReservationsInDb();
    if(allReservations) return res.status(200).json({
        status: true,
        allReservations
    })
    else return res.status(404).json({
        status: false,
        message: 'Reservations not found'
    })
} catch (error) {
    res.status(500).json({
        status: false,
        message: error.message
    })
}
}

module.exports = getAllReservations;