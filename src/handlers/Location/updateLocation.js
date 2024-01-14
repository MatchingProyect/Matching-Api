const { putLocation } = require('../../controllers/putInDB');

const updateLocation = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, adress, city, state, postalCode, country } = req.body;
        const locationToUpdate = putLocation(id, name, adress, city, state, postalCode, country);
        if (locationToUpdate) return res.status(200).json({status: true, locationToUpdate})
    } catch (error) {
        return res.status(500).json({status: false, message: error.message})
    }
}

module.exports = updateLocation;