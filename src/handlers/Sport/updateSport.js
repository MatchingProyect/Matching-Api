const dataBase = require('../../dataBase/dataBase');
const {putSport} = require('../../controllers/putInDB');
const { Sport } = dataBase;

const updateSport = async function(req, res){
    try{
        const { id } = req.params;
        const { name } = req.body;
        const updatedSport = await putSport(id, name);
        if (updateSport) return res.status(200).json({status: true, updatedSport});
     } catch (error) {
        return res.status(500).json({status: false, message: error.message})
    };
};

module.exports = updateSport

