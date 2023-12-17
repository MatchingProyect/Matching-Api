const { getRatingUserFromDb } = require('../../controllers/getInDB');

const getRatingUser = async (req, res) => {
  try {

    const { userId } = req.params;

    const ratingUser = await getRatingUserFromDb(userId);

    if(!ratingUser) {
      return res.status(404).json({status: false, message: "RatingUser not found"});
    }

    return res.status(200).json({status: true, ratingUser});

  } catch (error) {

    return res.status(500).json({status: false, message: error.message});

  }
};


  module.exports = getRatingUser  
