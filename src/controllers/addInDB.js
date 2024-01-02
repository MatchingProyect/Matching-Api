const dataBase = require('../dataBase/dataBase')
const { User, Profile, Sport, Club, Location, Court, Payment, PaymentType, Reservation, ScoreMatch, TeamMatch, AdvertisingEvent, AdvertisingSystem, MatchResult, PointEvent, PointSystem, PaymentStatus, ReservationType, MatchType, RatingUser, ShiftSchedule, FriendRequest, UserFriends } = dataBase.models

const addUserInDb = async ({admin, displayName, gender, dayBirth, email, phone, creditCardWarranty, avatarImg, password, description}) => {
    try {
        if(!displayName || !email ) return `faltan datos`
        const [newUser, create] = await User.findOrCreate({where: {displayName}, 
            defaults: {admin, displayName, gender, dayBirth, email, phone, creditCardWarranty, avatarImg, password, description}
        })

        if (!create) return "este usuario ya existe"

        return newUser

    } catch (error) {
        throw error.message
    }
}

const addProfileInDb = async (laterality, courtSide, matchType, dayPreference, timePreference, categoryLvl, SportId, UserId) => {
    try {

        const newProfile = await Profile.create({ laterality, courtSide, matchType, dayPreference, timePreference, categoryLvl, SportId, UserId })

        if (newProfile) return newProfile
    } catch (error) {
        throw error.message
    }
}

const addSportInDb = async (name) => {
    try {
        if (!name) return "faltan datos"
        const sportAdding = await Sport.create({ name })
        if (sportAdding) return sportAdding
    } catch (error) {
        throw error.message
    }
}

const addClubInDb = async (name, showers, grills, parking, security) => {
    try {
        const addClub = await Club.create({ name, showers, grills, parking, security })
        if (addClub) return addClub
    } catch (error) {
        throw error.message
    }
}

const addLocationInDb = async (name, adress, city, state, postalCode, country) => {
    try {
        const addLocation = await Location.create({ name, adress, city, state, postalCode, country })
        if (addLocation) return addLocation
    } catch (error) {
        throw error.message;
    }
}

const addCourtInDb = async (name, description, priceFee, warrantyReservation, grassType, lighting, doorsType, wallsType, reputation) => {
    try {
        const addCourt = await Court.create({ name, description, priceFee, warrantyReservation, grassType, lighting, doorsType, wallsType, reputation })
        if (addCourt) return addCourt;
    } catch (error) {
        throw error.message;
    }
}

const addPaymentInDb = async (name, amount, dateTimeUpdated, PaymentTypeId, PaymentStatusId) => {
    try {
        const addPayment = await Payment.create({ name, amount, dateTimeUpdated, PaymentTypeId, PaymentStatusId });
        if (addPayment) return addPayment;
    } catch (error) {
        throw error.message;
    }
}

const addPaymentTypeInDb = async (name) => {
    try {
        const addPaymentType = await PaymentType.create({ name });
        if (addPaymentType) return addPaymentType;
    } catch (error) {
        throw error.message;
    }
}

const addReservationInDb = async (dateTimeStart, dateTimeEnd, totalCost, UserId, CourtId, MatchTypeId, ReservationTypeId) => {
    try {
        const addReservation = await Reservation.create({ dateTimeStart, dateTimeEnd, totalCost, UserId, CourtId, MatchTypeId, ReservationTypeId });
        console.log(UserId, CourtId)
        if (addReservation) return addReservation;
    } catch (error) {
        throw error.message;
    }
}

const addScoreMatchInDb = async (firstSet, secondSet, thirdSet) => {
    try {
        const addScoreMatch = await ScoreMatch.create({ firstSet, secondSet, thirdSet });
        if (addScoreMatch) return addScoreMatch;
    } catch (error) {
        throw error.message;
    }
}

const addTeamMatchesInDb = async (name) => {
    try {
        const addTeamMatch = await TeamMatch.create({ name });
        if (addTeamMatch) return addTeamMatch;
    } catch (error) {
        throw error.message;
    }
}

const addMatchResultInDb = async (name) => {
    try {
        const addMatchResult = await MatchResult.create({ name });
        if (addMatchResult) return addMatchResult;
    } catch (error) {
        throw error.message;
    }
}

const addAdvertisingEventInDb = async (dateTime, qrCode) => {
    try {
        const addAdvertisingEvent = await AdvertisingEvent.create({ dateTime, qrCode });
        if (addAdvertisingEvent) return addAdvertisingEvent;
    } catch (error) {
        throw error.message;
    }
}

const addAdvertisingSystemInDb = async (name, descriptionDiscount, pointsQuantityRedeem) => {
    try {
        const addAdvertisingSystem = await AdvertisingSystem.create({ name, descriptionDiscount, pointsQuantityRedeem });
        if (addAdvertisingSystem) return addAdvertisingSystem;
    } catch (error) {
        throw error.message;
    }
}

const addPointEventInDb = async (dateTime, qrCode) => {
    try {
        const addPointEvent = await PointEvent.create({ dateTime, qrCode });
        if (addPointEvent) return addPointEvent;
    } catch (error) {
        throw error.message;
    }
}

const addPointSystemInDb = async (name, description, pointsQuantityGain) => {
    try {
        const addPointSystem = await PointSystem.create({ name, description, pointsQuantityGain });
        if (addPointSystem) return addPointSystem;
    } catch (error) {
        throw error.message;
    }
}

const addMatchTypeInDb = async (name, description) => {
    try {
        const addMatchType = await MatchType.create({ name, description });
        if (addMatchType) return addMatchType;
    } catch (error) {
        throw error.message;
    }
}
const addRatingUserInDb = async (categoryLvl, defense, attack, control) => {
    try {
        const addRatingUser = await RatingUser.create({ categoryLvl, defense, attack, control });
        if (addRatingUser) return addRatingUser;
    } catch (error) {
        throw error.message;
    }
}
const addReservationTypeInDb = async (permanent) => {
    try {
        const addReservationType = await ReservationType.create({ permanent });
        if (addReservationType) return addReservationType;
    } catch (error) {
        throw error.message;
    }
}
const addShiftScheduleInDb = async (name, weekDay, timeStart, timeEnd, partnerPriority) => {
    try {
        const addShiftSchedule = await ShiftSchedule.create({ name, weekDay, timeStart, timeEnd, partnerPriority });
        if (addShiftSchedule) return addShiftSchedule;
    } catch (error) {
        throw error.message;
    }
}
const addPaymentStatusInDb = async (name) => {
    try {
        const addPaymentStatus = await PaymentStatus.create({ name });
        if (addPaymentStatus) return addPaymentStatus;
    } catch (error) {
        throw error.message;
    }
}

const addFriendRequestInDb = async (status, UserId, FriendRId) => {
    try {
        if(status === "false") await FriendRequest.destroy()
        const addFriendRequest = await FriendRequest.create({ status, UserId, FriendRId });
        if (addFriendRequest) return addFriendRequest;
    } catch (error) {
        throw error.message;
    }
}

const createRelationshipInDb = async(UserId, FriendId) => {
    try {
        const addRelationship = await UserFriends.create({UserId, FriendId});
        if(addRelationship) return addRelationship;

    } catch (error) {
        throw error.message;
    }
}

module.exports = {
    addUserInDb,
    addProfileInDb,
    addSportInDb,
    addClubInDb,
    addLocationInDb,
    addCourtInDb,
    addPaymentInDb,
    addPaymentTypeInDb,
    addReservationInDb,
    addScoreMatchInDb,
    addTeamMatchesInDb,
    addAdvertisingEventInDb,
    addAdvertisingSystemInDb,
    addMatchResultInDb,
    addPointEventInDb,
    addPointSystemInDb,
    addMatchTypeInDb,
    addRatingUserInDb,
    addReservationTypeInDb,
    addShiftScheduleInDb,
    addPaymentStatusInDb,
    addFriendRequestInDb,
    createRelationshipInDb
}