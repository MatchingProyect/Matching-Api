const { addPaymentInDb } = require("../../controllers/addInDB");

const createPayment = async(req, res) => {
try {
    const {name, amount, dateTimeUpdated} = req.body;
    const paymentCreated = await addPaymentInDb(name, amount, dateTimeUpdated);

    if(paymentCreated) return res.status(200).json({
        status: true,
        paymentCreated
    })
} catch (error) {
    res.status(500).json({
        status: false,
        message: error.message
    })
}
}

module.exports = createPayment;