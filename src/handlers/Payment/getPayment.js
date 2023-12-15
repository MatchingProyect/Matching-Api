const { getOnePaymentInDb } = require("../../controllers/getInDB");

const getPayment = async(req, res) => {
    try {
        const {id} = req.params;
        const onePayment = await getOnePaymentInDb(id);
        if(onePayment) return res.status(200).json({
            status: true,
            onePayment
        })
        else return res.status(404).json({
            status: false,
            message: 'Payment nor found'
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

module.exports = getPayment;