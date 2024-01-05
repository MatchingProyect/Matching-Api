const { putPaymentTypeInDb } = require("../../controllers/putInDB");

const updatePaymentType = async(req, res) => {
    try {
        const {id} = req.params;
        const {name} = req.body;
        const paymentTypeUpdated = await putPaymentTypeInDb(id, name);

        if(paymentTypeUpdated) return res.status(200).json({
            status: true,
            paymentTypeUpdated
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

module.exports = updatePaymentType;