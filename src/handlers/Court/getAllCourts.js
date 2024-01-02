const { getAllCourtsInDb } = require("../../controllers/getInDB")

const getAllCourts = async(req, res) => {
    try {
        const { page } = req.query;
        const pageNumber = Number(page) || 1;
        const limit = 50
     const offset = (pageNumber - 1) * limit;
        const allCourts = await getAllCourtsInDb(offset, limit);
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