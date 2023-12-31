const { putPayment } = require("../../controllers/putInDB");

const updatePayment = async(req, res) => {
try {
    const {id} = req.params;
    const {name, amount, dateTimeUpdated, PaymentTypeId, PaymentStatusId, PagoId} = req.body;
    const paymentUpdated = await putPayment(id, name, amount, dateTimeUpdated, PaymentTypeId, PaymentStatusId, PagoId);

    if(paymentUpdated) return res.status(200).json({
        status: true,
        paymentUpdated
    })
} catch (error) {
    res.status(500).json({
        status: false,
        message: error.message
    })
}
}

module.exports = updatePayment;