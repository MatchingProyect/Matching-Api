const { putUserAdmin } = require("../../controllers/putInDB");

const volverAdm = async (req, res) => {
    try {
        const { id } = req.params;
        const { admin } = req.body;
        const userAdminUpdated = await putUserAdmin(id, admin);

        if (userAdminUpdated.length > 0) {
            return res.status(200).json({
                status: true,
                userAdminUpdated
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

module.exports = volverAdm;