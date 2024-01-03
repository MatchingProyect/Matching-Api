const { getClubsInDb, filterByClubs } = require("../../controllers/filtersAndGet");

const getAllClubs = async(req, res) =>{
    try {
        const {clubs, page} = req.query;
        const pageNumber = Number(page) || 1;
        const limit = 20
        const offset = (pageNumber - 1) * limit;
        if(clubs){
            const clubsFiltrades = await filterByClubs(clubs)
            if(clubsFiltrades) return res.status(200).json({status: true, clubsFiltrades})
        }
        const allClubes = await getClubsInDb(offset, limit)
        if(allClubes) return res.status(200).json({status: true, allClubes})
    } catch (error) {
        return res.status(500).json({status: false, message: error.message})
    }
}

module.exports = getAllClubs