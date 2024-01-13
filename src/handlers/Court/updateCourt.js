const { putCourt } = require("../../controllers/putInDB");

const updateCourt = async(req, res) => {
    try {
        const {id} = req.params;
        const {name, description, priceFee, warrantyReservation, grassType, lighting, doorsType, wallsType, reputation, imgClub, horario} = req.body;
        console.log(imgClub);
        const courtUpdated = await putCourt(id, name, description, priceFee, warrantyReservation, grassType, lighting, doorsType, wallsType, reputation, imgClub, horario);

        if(courtUpdated) return res.status(200).json({
            status: true,
            courtUpdated
        })

    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

module.exports = updateCourt;