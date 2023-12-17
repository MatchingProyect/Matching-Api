const { getShiftScheduleFromDb, filterShiftSchedulesFromDb } = require("../../controllers/filtersAndGet");

const getAndFilterShiftSchedules = async (req, res) => {
    try {
        const { shiftScheduleId } = req.params;

        if (shiftScheduleId) {

            const shiftSchedule = await getShiftScheduleFromDb(shiftScheduleId);

            if (shiftSchedule) {
                return res.status(200).json({ status: true, shiftSchedule });
            } else {
                return res.status(404).json({ status: false, message: "ShiftSchedule not found" });
            }
        } else {
            const filterCriteria = req.query; 
            const filteredShiftSchedules = await filterShiftSchedulesFromDb(filterCriteria);

            return res.status(200).json({ status: true, filteredShiftSchedules });
        }
    } catch (error) {
        return res.status(500).json({ status: false, message: error.message });
    }
};

module.exports = getAndFilterShiftSchedules;
