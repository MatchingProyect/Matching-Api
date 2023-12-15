const { getAllPaymentsTypesInDb } = require("../../controllers/getInDB");

const getAllPaymentsTypes = async(req, res) => {
try {
    const allPaymentsTypes = await getAllPaymentsTypesInDb();
    if(allPaymentsTypes) return res.status(200).json({
        status: true,
        allPaymentsTypes
    })
    else return res.status(404).json({
        status: false,
        message: 'Payment types not found'
    })
} catch (error) {
    res.status(500).json({
        status: false,
        message: error.message
    })
}
}

module.exports = getAllPaymentsTypes;