const { addPaymentInDb } = require("../../controllers/addInDB");

const createPayment = async (req, res) => {
    try {
        const { name, amount } = req.body;
        const paymentCreated = await addPaymentInDb(name, amount);

        if (paymentCreated) return res.status(200).json({
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