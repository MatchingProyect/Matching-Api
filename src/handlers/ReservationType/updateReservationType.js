const { putReservationType } = require("../../controllers/putInDB");

const updateReservationType = async (req, res) => {
    try {
        const { reservationTypeId } = req.params; 
        const { permanent } = req.body;

        const updatedReservationType = await putReservationType(reservationTypeId, { permanent });

        if (updatedReservationType) {
            return res.status(200).json({ status: true, updatedReservationType });
        } else {
            return res.status(404).json({ status: false, message: "ReservationType not found" });
        }
    } catch (error) {
        return res.status(500).json({ status: false, message: error.message });
    }
};

module.exports = updateReservationType;
