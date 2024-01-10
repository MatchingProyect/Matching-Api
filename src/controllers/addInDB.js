const dataBase = require('../dataBase/dataBase')
const { User, Profile, Sport, Club, Location, Court, Payment, PaymentType, Reservation, ScoreMatch, TeamMatch, AdvertisingEvent, AdvertisingSystem, MatchResult, PointEvent, PointSystem, PaymentStatus, ReservationType, MatchType, RatingUser, ShiftSchedule, FriendRequest, UserFriends, UserMatch, GuestReservation } = dataBase.models

const addUserInDb = async ({admin, active,onLine, displayName, gender, dayBirth, email, phone, creditCardWarranty, avatarImg, password, description}) => {
    try {
        if(!displayName || !email ) return `faltan datos`
        console.log("add")
        const [newUser, create] = await User.findOrCreate({where: {displayName}, 
            defaults: {admin, active,onLine, displayName, gender, dayBirth, email, phone, creditCardWarranty, avatarImg, password, description}
        })
        
        console.log(newUser, create)
        if (!create) return "este usuario ya existe"

        return newUser

    } catch (error) {
        throw error.message
    }
}

const addProfileInDb = async (laterality, courtSide, matchType, dayPreference, timePreference, categoryLvl, SportId, UserId) => {
    try {

        const newProfile = await Profile.create({ laterality, courtSide, matchType, dayPreference, timePreference, categoryLvl, SportId, UserId })
        console.log("newProfile", newProfile)
        if (newProfile) return newProfile
    } catch (error) {
        console.log(error.message)
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

const addClubInDb = async (name, showers, grills, parking, security, SportId, LocationId) => {
    try {
        const addClub = await Club.create({ name, showers, grills, parking, security, SportId, LocationId })
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

const addCourtInDb = async (name, description, priceFee, warrantyReservation, grassType, lighting, doorsType, wallsType, reputation, SportId , LocationId, ClubId) => {
    try {
        const addCourt = await Court.create({ name, description, priceFee, warrantyReservation, grassType, lighting, doorsType, wallsType, reputation, SportId , LocationId, ClubId })
        if (addCourt) return addCourt;
    } catch (error) {
        throw error.message;
    }
}

const addReservationInDb = async (dateTimeStart, dateTimeEnd, totalCost, teamMatch, UserId, CourtId, MatchTypeId, ReservationTypeId) => {
    try {
        const addReservation = await Reservation.create({ dateTimeStart, dateTimeEnd, totalCost, teamMatch, UserId, CourtId, MatchTypeId, ReservationTypeId, PaymentId: null, TeamMatchId: null });
        let addUserMatch;
        
        const user = await User.findByPk(UserId);
        if (addReservation) {
            const addTeamMatch = await TeamMatch.create({name: teamMatch});
            
            if(addTeamMatch) {
                try {
                    addUserMatch = await UserMatch.create({TeamMatchId: addTeamMatch.id, UserId});
                } catch (error) {
                    throw error.message;
                }
            }
            const addPaymentStatus = await PaymentStatus.create({name: 'pending'});
            const addPaymentType = await PaymentType.create({name: 'default'});

            const addPayment = await Payment.create({name: user.name, amount: totalCost, createdAt: addReservation.createdAt, updatedAt: null, PaymentStatusId: addPaymentStatus.id, PaymentTypeId: addPaymentType.id});

            await addReservation.update({PaymentId: addPayment.id, TeamMatchId: addTeamMatch.id});
            return {addReservation, addPayment, addPaymentStatus, addPaymentType, addTeamMatch, addUserMatch}
        }
    } catch (error) {
        console.error(error)
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

const addFriendRequestInDb = async (status, UserId, FriendRId) => {
    try {
        
        if(status === "rechazado") await FriendRequest.destroy({ where: { FriendRId: FriendRId, UserId: UserId } })
        const addFriendRequest = await FriendRequest.create({ status, UserId, FriendRId });
        if (addFriendRequest) return addFriendRequest;
    } catch (error) {
        throw error.message;
    }
}

const createRelationshipInDb = async(UserId, FriendId) => {
    try {
        const addRelationship = await UserFriends.create({UserId, FriendId});
        if(addRelationship){
            await FriendRequest.destroy({where: {FriendRId: UserId, UserId: FriendId}})
            return addRelationship;
        } 

    } catch (error) {
        throw error.message;
    }
}

const addGuestReservationInDb = async({UserId, ReservationId, TeamMatchId}) => {
    try {
        const addGuestReservation = await GuestReservation.create({UserId, ReservationId, TeamMatchId});
        if(addGuestReservation) return addGuestReservation;
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
    addReservationInDb,
    addScoreMatchInDb,
    addAdvertisingEventInDb,
    addAdvertisingSystemInDb,
    addMatchResultInDb,
    addPointEventInDb,
    addPointSystemInDb,
    addMatchTypeInDb,
    addRatingUserInDb,
    addReservationTypeInDb,
    addShiftScheduleInDb,
    addFriendRequestInDb,
    createRelationshipInDb,
    addGuestReservationInDb
}