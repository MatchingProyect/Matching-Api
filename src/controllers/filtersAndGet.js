const dataBase = require('../dataBase/dataBase')
const { Sport, Club, Location} = dataBase.models

const getSportsInDb = async () => {
  
    try {
    
     const sports = await Sport.findAll();
      return sports;
    } catch (error) {
      throw error.message;
  
    }
  
  }

const getClubsInDb = async()=>{
    try {
        const clubs = await Club.findAll()
        if(clubs) return clubs
    } catch (error) {
        throw error.message
    }
}

const getLocationsInDb = async()=>{
    try {
        const allLocation = await Location.findAll()
        if(allLocation) return allLocation
    } catch (error) {
        throw error.message
    }
}

const filterBylocations = async(search)=>{
    try {
        const totalLocations = await getLocationsInDb();

        return totalLocations.filter((location) => {
          const regex = new RegExp(search, "i");  
          return location.name.match(regex);
        });
    } catch (error) {
        throw error.message
    }
}


const filterSportInDb = async(search) => {
    try {
      const sports = await getSportsInDb();

      return sports.filter((sport) => {
        const regex = new RegExp(search, "i");  
        return sport.name.match(regex);
      });
    } catch (error) {
      throw error;
    }
  }

  const filterByClubs = async(search)=>{
    try {
        const clubs = await getSportsInDb();

      return clubs.filter((club) => {
        const regex = new RegExp(search, "i");  
        return club.name.match(regex);
      });
    } catch (error) {
        throw error.message
    }
  }

  module.exports = {
    getSportsInDb,
    getClubsInDb,
    filterSportInDb,
    filterByClubs,
    getLocationsInDb,
    filterBylocations
  }