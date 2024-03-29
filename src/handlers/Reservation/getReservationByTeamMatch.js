const { getReservationByTeamMatchInDb } = require("../../controllers/getInDB");

const getReservationByTeamMatch = async(req, res) => {
 try {
    const {id} = req.params;
    const reservation = await getReservationByTeamMatchInDb(id);

    if(reservation) {
        console.log(reservation.dataValues)
        return res.status(200).json({
        status: true,
        reservation:reservation.dataValues
    })}
    else return res.status(404).json({
        status: false,
        message: 'Reservation not found'
    })
 } catch (error) {
    console.log(error)

    res.status(500).json({
        status: false,
        message: error.message
    })
 }   
}

module.exports = getReservationByTeamMatch;