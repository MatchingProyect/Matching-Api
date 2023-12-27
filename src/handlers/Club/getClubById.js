const { getClubByIdInDb } = require("../../controllers/filtersAndGet")

const getClubById = async(req, res)=>{
    try {
        const {id} = req.params
        const clubById = await  getClubByIdInDb(id)
        if(clubById) return res.status(200).json({status: true, clubById})
    } catch (error) {
        return res.status(500).json({status: false, message: error.message})
    }


}

module.exports = getClubById