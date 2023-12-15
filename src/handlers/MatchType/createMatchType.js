const {addMatchInDB} = require('../../controllers/addInDB');

const createMatchType = async (req, res) => {
  try {
    const { type } = req.body;
    const newType = await addMatchInDB.createMatchType(type);
    if(newType) return res.status(200).json({status: true, newType});

  } catch (error) {
    return res.status(500).json({status: false, message: error.message})
  }
}

module.exports = createMatchType 