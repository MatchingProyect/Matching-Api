const dataBase = require('../dataBase/dataBase');

const { Sport, MatchResult, Club, Location, MatchType, RatingUser, ReservationType, Reservation, ShiftSchedule } = dataBase.models

const getSportsInDb = async (offset, limit) => {

  try {

    const sports = await Sport.findAll({ offset: offset, limit: limit });
    return sports;
  } catch (error) {
    throw error.message;

  }

}

const getMatchResultInDb = async (offset, limit) => {

  try {

    const matchResults = await MatchResult.findAll({ offset: offset, limit: limit });
    return matchResults;
  } catch (error) {
    throw error.message;

  }

}

const matchResultFilter = async (search) => {
  try {
    const totalMatchResults = await getMatchResultInDb();


    return totalMatchResults.filter((match) => {
      const regex = new RegExp(search, "i");
      return match.name.match(regex);
    });
  } catch (error) {
    throw error.message;
  }
}


const getClubsInDb = async (offset, limit) => {
  try {
    const clubs = await Club.findAll({ offset: offset, limit: limit })
    if (clubs) return clubs
  } catch (error) {
    throw error.message
  }
}

const getLocationsInDb = async () => {
  try {
    const allLocation = await Location.findAll()
    if (allLocation) return allLocation
  } catch (error) {
    throw error.message
  }
}

const filterBylocations = async (search) => {
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


const filterSportInDb = async (search) => {
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

const filterByClubs = async (search) => {
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

const getAllMatchTypes = async () => {
  try {
    return await MatchType.findAll();
  } catch (error) {
    throw error;
  }
}

const filterMatchTypes = async (id) => {
  try {
    return await MatchType.findByPk(id);
  } catch (error) {
    throw error;
  }
}

const getAllRatings = async () => {
  try {
    return await RatingUser.findAll();
  } catch (error) {
    throw error;
  }
}

const filterRatings = async (id) => {
  try {
    return await RatingUser.findByPk(id);
  } catch (error) {
    throw error;
  }
}

const getReservationTypeFromDb = async (reservationTypeId) => {
  try {
    const reservationType = await ReservationType.findByPk(reservationTypeId);

    return reservationType;
  } catch (error) {
    throw error.message;
  }
};

const filterReservationTypesFromDb = async (filterCriteria) => {
  try {
    const filteredReservationTypes = await ReservationType.findAll({
      where: filterCriteria,
    });

    return filteredReservationTypes;
  } catch (error) {
    throw error.message;
  }
};

const getShiftScheduleFromDb = async (shiftScheduleId) => {
  try {

    const shiftSchedule = await ShiftSchedule.findByPk(shiftScheduleId);

    return shiftSchedule;
  } catch (error) {
    throw new Error(error.message);
  }
};
const filterShiftSchedulesFromDb = async (filterCriteria) => {
  try {

    const filteredShiftSchedules = await ShiftSchedule.findAll({
      where: filterCriteria

    });

    return filteredShiftSchedules;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllReservationsInDb = async (offset, limit) => {
  try {
    const reservations = await Reservation.findAll({ offset: offset, limit: limit });
    return reservations;
  } catch (error) {
    throw error.message;
  }
}

const filterByReservations = async (search) => {
  try {
    const reservations = await getAllReservationsInDb();

    return reservations.filter((reservation) => {
      const regex = new RegExp(search, 'i');
      return reservation.dateTimeStart.match(regex);
    })
  } catch (error) {
    throw error.message;
  }
}

module.exports = {
  getSportsInDb,
  getClubsInDb,
  filterSportInDb,
  filterByClubs,
  getLocationsInDb,
  filterBylocations,
  getMatchResultInDb,
  matchResultFilter,
  filterMatchTypes,
  getAllMatchTypes,
  getAllRatings,
  filterRatings,
  getReservationTypeFromDb,
  filterReservationTypesFromDb,
  getShiftScheduleFromDb,
  filterShiftSchedulesFromDb,
  getAllReservationsInDb,
  filterByReservations
}