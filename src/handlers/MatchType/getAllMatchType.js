const { filterMatchTypes, getAllMatchTypes } = require('../../controllers/filtersAndGet');

const getMatchTypesHandler = async (req, res) => {
  try {
    const { name } = req.query;
    
    if(name) {
      const filtered = await filterMatchTypes(name);
      if(filtered) {
        return res.status(200).json({ status: true, filtered });  
      }
    }
    
    const all = await getAllMatchTypes();
    if(all) {
     return res.status(200).json({ status: true, all }); 
    }

  } catch (error) {
    return res.status(500).json({status: false, message: error.message});
  }
}

module.exports = 
  getMatchTypesHandler  
