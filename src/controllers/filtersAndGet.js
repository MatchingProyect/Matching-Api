const dataBase = require('../dataBase/dataBase')
const { Sport, Club} = dataBase.models

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
        return club.schedule.match(regex);
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
  }