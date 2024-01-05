const { putPaymentStatusInDb } = require("../../controllers/putInDB");

const updatePaymentStatus = async(req, res) => {
    try {
        const {id} = req.params;
        const {name} = req.body;
        const paymentStatusUpdated = await putPaymentStatusInDb(id, name);

        if(paymentStatusUpdated) return res.status(200).json({
            status: true,
            paymentStatusUpdated
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

module.exports = updatePaymentStatus;