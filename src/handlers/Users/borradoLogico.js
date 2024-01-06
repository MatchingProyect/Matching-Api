const { putUserEstado } = require("../../controllers/putInDB");

const borradoLogico = async(req, res) => {
    try {
        const {id} = req.params;
        const {inLine, estado} = req.body;
        const userEstadoUpdated = await putUserEstado(id, inLine, estado);

        if(userEstadoUpdated) return res.status(200).json({
            status: true,
            userEstadoUpdated
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

module.exports = borradoLogico;