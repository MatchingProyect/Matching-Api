const { getSportsInDb, filterSportInDb } = require("../../controllers/filtersAndGet")


const getAllSport = async(req, res) =>{
    try {
        const {sports} = req.query
     
    
        if(sports){
            const sportFilter = await filterSportInDb(sports)

            if(sportFilter) return res.status(200).json({status: true, sportFilter})

        }
        const allSport = await getSportsInDb()

        if(allSport) return res.status(200).json({status: true, allSport})


    } catch (error) {
        return res.status(500).json({status: false, message: error.message})
    }
}

module.exports = getAllSport