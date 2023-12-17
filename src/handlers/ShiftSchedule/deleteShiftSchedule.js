const { deleteShiftScheduleFromDb } = require("../../controllers/deleteInDB");

const deleteShiftSchedule = async (req, res) => {
    try {
        const { shiftScheduleId } = req.params;

        const deletedShiftSchedule = await deleteShiftScheduleFromDb(shiftScheduleId);

        if (deletedShiftSchedule) {
            return res.status(200).json({ status: true, deletedShiftSchedule });
        } else {
            return res.status(404).json({ status: false, message: "ShiftSchedule not found" });
        }
    } catch (error) {
        return res.status(500).json({ status: false, message: error.message });
    }
};

module.exports = deleteShiftSchedule;
