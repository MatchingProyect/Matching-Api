const { addCourtInDb } = require("../../controllers/addInDB");

const createCourt = async(req, res) => {
    try {
        const {name, description, priceFee, warrantyReservation, grassType, lighting, doorsType, wallsType, reputation, horario, SportId, LocationId, clubid} = req.body;
        
        console.log(req.body)

        const courtCreated = await addCourtInDb(name, description, priceFee, warrantyReservation, grassType, lighting, doorsType, wallsType, reputation, horario, SportId, LocationId, clubid);

        if(courtCreated) return res.status(200).json({
            status: true,
            courtCreated
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

module.exports = createCourt;
