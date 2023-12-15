const { getAllPaymentsInDb } = require("../../controllers/getInDB");

const getAllPayments = async(req, res) => {
    try {
        const allPayments = await getAllPaymentsInDb();
        if(allPayments) return res.status(200).json({
            status: true,
            allPayments
        })
        else return res.status(404).json({
            status: false,
            message: 'Payments not found'
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

module.exports = getAllPayments;