const { putLocationEstado } = require("../../controllers/putInDB");

const borradoLogico = async (req, res) => {
    try {
        const { id } = req.params;
        const { estado } = req.body;
        const locationEstadoUpdated = await putLocationEstado(id, estado);

        if (locationEstadoUpdated.length > 0) {
            return res.status(200).json({
                status: true,
                locationEstadoUpdated
            })
        } else {
            return res.status(404).json({
                status: false,
                message: "No se encontro la ubicación"
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