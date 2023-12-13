const { getClubsInDb, filterByClubs } = require("../../controllers/filtersAndGet");

const getAllClubs = async(req, res) =>{
    try {
        const {clubs} = req.query;
        if(clubs){
            const clubsFiltrades = await filterByClubs(clubs)
            if(clubsFiltrades) return res.status(200).json({status: true, clubsFiltrades})
        }
        const allClubes = await getClubsInDb()
        if(allClubes) return res.status(200).json({status: true, allClubes})
    } catch (error) {
        throw error.message
    }
}

module.exports = getAllClubs