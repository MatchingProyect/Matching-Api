const { addShiftScheduleInDb } = require("../../controllers/addInDB");

const createShiftSchedule = async(req, res)=>{
    try {
        const {name, weekDay, timeStart, timeEnd, partnerPriority} = req.body;
        const newShiftSchedule = await addShiftScheduleInDb(name, weekDay, timeStart, timeEnd, partnerPriority);
        if(newShiftSchedule) return res.status(200).json({status: true, newShiftSchedule});
    } catch (error) {
        return res.status(500).json({status: false, message: error.message});
    }
}

module.exports = createShiftSchedule;
