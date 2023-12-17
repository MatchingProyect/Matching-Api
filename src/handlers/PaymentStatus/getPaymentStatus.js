const { getAllPaymentStatusesFromDb } = require('../../controllers/getInDB');

const getPaymentStatus = async (req, res) => {

  try {

    const paymentStatuses = await getAllPaymentStatusesFromDb();

    if(!paymentStatuses?.length) {
      return res.status(404).json({ status: false, message: 'No payment statuses found'});
    }

    return res.status(200).json({status: true, paymentStatuses});

  } catch (error) {

    return res.status(500).json({status: false, message: error.message});

  }

};

module.exports =  getPaymentStatus  
