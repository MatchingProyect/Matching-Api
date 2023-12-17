const { addPaymentStatusInDb } = require("../../controllers/addInDB");

const createPaymentStatus = async(req, res)=>{
    try {
        const {name} = req.body;
        const newPaymentStatus = await addPaymentStatusInDb(name);
        if(newPaymentStatus) return res.status(200).json({status: true, newPaymentStatus});
    } catch (error) {
        return res.status(500).json({status: false, message: error.message});
    }
}

module.exports = createPaymentStatus;