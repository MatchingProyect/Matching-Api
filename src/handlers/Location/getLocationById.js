const dataBase = require('../../dataBase/dataBase');
const { Location } = dataBase.models;

const getLocationsById = async function(req, res) {
    try {
        let {id} = req.params;
        const locationFound = await Location.findAll ({ where: {id: id}});
        if(locationFound) return res.status(200).json({status: true, locationFound});
    } catch (error) {
        return res.status(500).json({status: false, message: error.message})
};
};

module.exports = getLocationsById