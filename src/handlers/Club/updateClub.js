const database = require ('../../dataBase/dataBase');
const { Club } = database.models;

const updateClub = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, imgClub, estado, LocationId, parking, security, showers, grills } = req.body;
        const updatedClub = await Club.update({name, imgClub, estado, LocationId, parking, showers, grills, security }, {where : { id }});
        res.status(200).json({
            status: true,
            updatedClub
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
};

module.exports = updateClub;