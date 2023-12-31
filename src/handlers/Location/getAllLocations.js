const { filterBylocations, getLocationsInDb } = require("../../controllers/filtersAndGet");


const getAllLocations = async(req, res) =>{
    try {
        const {locations} = req.query;
        if(locations){
            const locationsFiltrades = await filterBylocations(locations)
            if(locationsFiltrades) return res.status(200).json({status: true, locationsFiltrades})
        }
        const allLocations = await getLocationsInDb()
        if(allLocations) return res.status(200).json({status: true, allLocations})
    } catch (error) {
        return res.status(200).json({status: false, message: error.message})
    }
}

module.exports = getAllLocations