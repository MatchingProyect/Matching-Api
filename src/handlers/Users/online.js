const { putUserOnLine } = require("../../controllers/putInDB");

const online = async (req, res) => {
    try {
        const { id } = req.params;
        const { onLine } = req.body;
        const userOnLineUpdated = await putUserOnLine(id, onLine);

        if (userOnLineUpdated.length > 0) {
            return res.status(200).json({
                status: true,
                userOnLineUpdated
            })
        } else {
            return res.status(404).json({
                status: false,
                message: "No se encontro el usuario"
            })
        }

    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

module.exports = online;