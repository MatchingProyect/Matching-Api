const { addPaymentTypeInDb } = require("../../controllers/addInDB");

const createPaymentType = async(req, res) => {
    try {
        const {name} = req.body
        const paymentTypeCreated = await addPaymentTypeInDb(name);

        if(paymentTypeCreated) return res.status(200).json({
            status: true,
            paymentTypeCreated
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

module.exports = createPaymentType;