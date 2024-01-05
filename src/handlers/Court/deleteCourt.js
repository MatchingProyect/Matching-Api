const { deleteCourtInDb } = require("../../controllers/deleteInDB");

const deleteCourt = async(req, res) => {
    try {
        console.log(req.params)
        const {id} = req.params;
        const courtDeleted = await deleteCourtInDb(id);
        if(courtDeleted) return res.status(200).json({
            status: true,
            message: 'Court deleted!'
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

module.exports = deleteCourt;