const { addCourtInDb } = require("../../controllers/addInDB");

const createCourt = async(req, res) => {
    try {
        const {name, description, priceFee, warrantyReservation, grassType, lighting, doorsType, wallsType, reputation, SportId, LocationId, ClubId} = req.body;
        
        const courtCreated = await addCourtInDb(name, description, priceFee, warrantyReservation, grassType, lighting, doorsType, wallsType, reputation, SportId, LocationId, ClubId);

        if(courtCreated) return res.status(200).json({
            status: true,
            courtCreated
        })
        
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

module.exports = createCourt;
