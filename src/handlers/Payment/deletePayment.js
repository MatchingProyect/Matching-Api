const { deletePaymentInDb } = require("../../controllers/deleteInDB");

const deletePayment = async(req, res) => {
try {
    const {id} = req.params;
    const paymentDeleted = await deletePaymentInDb(id);
    
    if(paymentDeleted) return res.status(200).json({
        status: true,
        message: 'Payment deleted'
    })
} catch (error) {
    res.status(500).json({
        status: false,
        message: error.message
    })
}
}

module.exports = deletePayment;