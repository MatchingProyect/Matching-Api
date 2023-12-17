const { getAllReservationsInDb, filterByReservations } = require("../../controllers/filtersAndGet");


const getAllReservations = async(req, res) => {
try {
    const { page, oneReservation } = req.query;
    const pageNumber = Number(page) || 1;
    const limit = 2
    const offset = (pageNumber - 1) * limit;
    
    if(oneReservation){
        const reservationFilter = await filterByReservations(oneReservation);
        if(reservationFilter) return res.status(200).json({
            status: true,
            reservationFilter
        })
    }

    const allReservations = await getAllReservationsInDb(offset, limit);
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