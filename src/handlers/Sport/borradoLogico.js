const { putSportEstado } = require("../../controllers/putInDB");

const borradoLogico = async (req, res) => {
    try {
        const { id } = req.params;
        const { estado } = req.body;
        const sportEstadoUpdated = await putSportEstado(id, estado);

        if (sportEstadoUpdated.length > 0) {
            return res.status(200).json({
                status: true,
                sportEstadoUpdated
            })
        } else {
            return res.status(404).json({
                status: false,
                message: "No se encontro el deporte"
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