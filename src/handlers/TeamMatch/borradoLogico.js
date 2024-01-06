const { putTeamMatchEstado } = require("../../controllers/putInDB");

const borradoLogico = async (req, res) => {
    try {
        const { id } = req.params;
        const { estado } = req.body;
        const teamMatchEstadoUpdated = await putTeamMatchEstado(id, estado);

        if (teamMatchEstadoUpdated.length > 0) {
            return res.status(200).json({
                status: true,
                teamMatchEstadoUpdated
            })
        } else {
            return res.status(404).json({
                status: false,
                message: "No se encontro la partida"
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