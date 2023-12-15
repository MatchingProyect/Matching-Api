const { response } = require("express");
const { getAllMatchTypeInDb } = require("../../controllers/getInDB")

const getAllMatchType = async (req, res) => {
  try {
    const allMatch = await getAllMatchTypeInDb();
    if (allMatch) {
      return res.status(200).json({
      status: true,
      
    })
    } else {
      return res.status(404).json({
        status: false,
        message: "match not found"
      });
    }
    
    
  } catch (error) {
    res.status(500).json({
      status: false,
            message: error.message
    })
  }

}

module.exports = getAllMatchType