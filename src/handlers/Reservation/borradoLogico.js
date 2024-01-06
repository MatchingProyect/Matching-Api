const { putReservationEstado } = require("../../controllers/putInDB");

const borradoLogico = async (req, res) => {
    try {
        const { id } = req.params;
        const { estado } = req.body;
        const reservationEstadoUpdated = await putReservationEstado(id, estado);

        if (reservationEstadoUpdated.length > 0) {
            return res.status(200).json({
                status: true,
                reservationEstadoUpdated
            })
        } else {
            return res.status(404).json({
                status: false,
                message: "No se encontro la reserva"
            })
        }

    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

module.exports = borradoLogico;