const { putUserPassword } = require("../../controllers/putInDB");

const updatePassword = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userPasswordUpdated = await putUserPassword(email, password);
        console.log(userPasswordUpdated)
        if (userPasswordUpdated) {
            return res.status(200).json({
                status: true,
                userPasswordUpdated
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

module.exports = updatePassword;