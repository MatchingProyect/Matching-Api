const { where } = require('sequelize')
const dataBase = require('../dataBase/dataBase')
const { User, Profile, Court,Club, Payment, PaymentStatus, PaymentType, ReservationType, FriendRequest, Location, Reservation, Sport, TeamMatch } = dataBase.models

const putProfile = async (id, laterality, courtSide, matchType, dayPreference, timePreference, categoryLvl, SportId, UserId) => {
    try {
        const updatedProfile = await Profile.update({ laterality, courtSide, matchType, dayPreference, timePreference, categoryLvl, SportId, UserId }, { where: { id } })
        if (updatedProfile) return updatedProfile
    } catch (error) {
        throw error.message
    }
}
const putSport = async (id, name) => {
    try {
        const updateSport = await Sport.update({name} , {where: {id}});
        if(updateSport) return updateSport;
    } catch (error) {
        throw error.message
    }
}

const putUser = async (id, admin, displayName, gender, dayBirth, email, phone, creditCardWarranty, avatarImg, password, onLine) => {
    try {
        const userUpdate = { admin, displayName, gender, dayBirth, email, phone, creditCardWarranty, avatarImg, password, onLine }
        const updatedUser = await User.update(userUpdate, { where: { id } })

        if (updatedUser) return userUpdate
    } catch (error) {
        throw error.message
    }
}

const putUserOnLine = async(id, onLine) =>{
    try {
        const userOnlineInDb = await User.update({onLine}, {where: {id}})
        if(userOnlineInDb) return userOnlineInDb
    } catch (error) {
        throw error.message
    }
}

const putUserEstado = async (id, estado) => {
    try {
        const updatedUserEstado = await User.update({ estado: estado }, { where: { id } });
        if (updatedUserEstado) return updatedUserEstado;
    } catch (error) {
        throw error.message;
    }
}

const putUserPassword = async (email, password) => {
    try {
        const updatedUserPassword = await User.update({ password: password }, { where: { email } });
        if (updatedUserPassword) return updatedUserPassword;
    } catch (error) {
        throw error.message;
    }
}

const putLocationEstado = async (id, estado) => {
    try {
        const updatedLocationEstado = await Location.update({ estado }, { where: { id } });
        if (updatedLocationEstado) return updatedLocationEstado;
    } catch (error) {
        throw error.message;
    }
}

const putReservationEstado = async (id, estado) => {
    try {
        const updatedReservationEstado = await Reservation.update({ estado }, { where: { id } });
        if (updatedReservationEstado) return updatedReservationEstado;
    } catch (error) {
        throw error.message;
    }
}

const putSportEstado = async (id, estado) => {
    try {
        const updatedSportEstado = await Sport.update({ estado }, { where: { id } });
        if (updatedSportEstado) return updatedSportEstado;
    } catch (error) {
        throw error.message;
    }
}

const putTeamMatchEstado = async (id, estado) => {
    try {
        const updatedTeamMatchEstado = await TeamMatch.update({ estado }, { where: { id } });
        if (updatedTeamMatchEstado) return updatedTeamMatchEstado;
    } catch (error) {
        throw error.message;
    }
}

const putCourt = async (id, name, description, priceFee, warrantyReservation, grassType, lighting, doorsType, wallsType, reputation) => {
    try {
        const courtUpdated = await Court.update({ name, description, priceFee, warrantyReservation, grassType, lighting, doorsType, wallsType, reputation }, { where: { id } });
        if (courtUpdated) return courtUpdated;
    } catch (error) {
        throw error.message;
    }
}

const putPayment = async (id, name, amount) => {
    try {
        const paymentUpdated = await Payment.update({ name, amount }, { where: { id } });
        if (paymentUpdated) return paymentUpdated;
    } catch (error) {
        throw error.message;
    }
}

const putPaymentStatusInDb = async (id, name) => {
    try {
        const paymentStatusUpdated = await PaymentStatus.update({ name }, { where: { id } });
        if (paymentStatusUpdated) return paymentStatusUpdated;
    } catch (error) {
        throw error.message;
    }
}

const putPaymentTypeInDb = async (id, name) => {
    try {
        const paymentTypeUpdated = await PaymentType.update({ name }, { where: { id } });
        if (paymentTypeUpdated) return paymentTypeUpdated;
    } catch (error) {
        throw error.message;
    }
}

const putClubEstado = async (id, estado) => {
    try {
       
        const updatedClubEstado = await Club.update({estado: estado}, {where: {id}});
        
        if(updatedClubEstado) return updatedClubEstado;

    } catch (error) {
        throw error.message;
    }
};

const putCourtEstado = async (id, estado) => {
    try {
        const updatedCourtEstado = await Court.update({ estado }, { where: { id } });
        if (updatedCourtEstado) return updatedCourtEstado;
    } catch (error) {
        throw error.message;
    }
};


const putReservationType = async (reservationTypeId, updates) => {
    try {
        const [updatedRowsCount, updatedReservationTypes] = await ReservationType.update(updates, {
            where: { id: reservationTypeId },
            returning: true,
        });

        if (updatedRowsCount > 0) {
            return updatedReservationTypes[0];
        } else {
            return null;
        }
    } catch (error) {
        throw error.message;
    }
};

const putStatusRequest = async (status, UserId, FriendId) => {
    try {
        if (status === "rechazado") await FriendRequest.destroy({ where: { FriendRId: FriendId, UserId: UserId } })
        const statusUpdated = await FriendRequest.update(
            { status },
            {
                where: { UserId, FriendRId: FriendId }
            }
        );
        if (statusUpdated[0]) {
            return statusUpdated;
        }
    } catch (error) {
        throw error.message;
    }
};

const putUserAdmin = async(id, admin) =>{
    try {
        const adm = await User.update({admin}, {where: {id}});
        if(adm) return adm;
    } catch (error) {
        
    }
}

module.exports = {
    putProfile,
    putUser,
    putSport,
    putCourt,
    putPayment,
    putReservationType,
    putStatusRequest,
    putPaymentStatusInDb,
    putPaymentTypeInDb,
    putUserEstado,
    putLocationEstado,
    putReservationEstado,
    putSportEstado,
    putTeamMatchEstado,
    putCourtEstado,
    putClubEstado,
    putUserAdmin,
    putUserPassword
}