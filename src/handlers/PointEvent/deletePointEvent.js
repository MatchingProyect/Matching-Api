const { destroyPointEvent } = require("../../controllers/deleteInDB");

const deletePointEvent = async(req, res)=>{
    try {
        const {id} = req.params;
        const deleted = await destroyPointEvent(id)
        if(deleted) return res.status(200).json({status: true, deleted})
    } catch (error) {
        return res.status(200).json({status: false, message: error.message})
    }
}

module.exports = deletePointEvent