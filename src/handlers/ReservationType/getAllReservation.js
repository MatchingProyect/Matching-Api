const { filterReservationTypesFromDb, getReservationTypeFromDb } = require("../../controllers/filtersAndGet");

const getAllReservation = async (req, res) => {
    try {
        if (req.params.reservationTypeId) {
            const { reservationTypeId } = req.params;
            const reservationType = await getReservationTypeFromDb(reservationTypeId);

            if (reservationType) {
                return res.status(200).json({ status: true, reservationType });
            } else {
                return res.status(404).json({ status: false, message: "ReservationType not found" });
            }
        } else {
            const filterCriteria = req.query;
            const filteredReservationTypes = await filterReservationTypesFromDb(filterCriteria);

            return res.status(200).json({ status: true, filteredReservationTypes });
        }
    } catch (error) {
        return res.status(500).json({ status: false, message: error.message });
    }
};

module.exports = getAllReservation;
