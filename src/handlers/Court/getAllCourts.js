const { getAllCourtsInDb } = require("../../controllers/getInDB")

const getAllCourts = async(req, res) => {
    try {
        const allCourts = await getAllCourtsInDb();
        if(allCourts) return res.status(200).json({
            status: true,
            allCourts
        });
        else return res.status(404).json({
            status: false,
            message: 'not found'
        })

    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

module.exports = getAllCourts;