const { where } = require('sequelize')
const dataBase = require('../dataBase/dataBase')
const { User, Profile, Court, Payment, PaymentStatus, PaymentType, ReservationType, FriendRequest } = dataBase.models

const putProfile = async (id, laterality, courtSide, matchType, dayPreference, timePreference, categoryLvl, SportId, UserId) => {
    try {
        const updatedProfile = await Profile.update({ laterality, courtSide, matchType, dayPreference, timePreference, categoryLvl, SportId, UserId }, { where: { id } })
        if (updatedProfile) return updatedProfile
    } catch (error) {
        throw error.message
    }
}

const putUser = async (id, admin, displayName, gender, dayBirth, email, phone, creditCardWarranty, avatarImg, password, onLine) => {
    try {
        const updatedUser = await User.update({ admin, displayName, gender, dayBirth, email, phone, creditCardWarranty, avatarImg, password, onLine }, { where: { id } })
        if (updatedUser) return updatedUser
    } catch (error) {
        throw error.message
    }
}

const putUserEstado = async(id,  estado) => {
    try {
        const updatedUserEstado = await User.update({ estado: estado}, {where: {id}});
        if(updatedUserEstado) return updatedUserEstado;
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

const putPaymentStatusInDb = async(id, name) => {
    try {
        const paymentStatusUpdated = await PaymentStatus.update({name}, {where:{id}});
        if(paymentStatusUpdated) return paymentStatusUpdated;
    } catch (error) {
        throw error.message;
    }
}

const putPaymentTypeInDb = async(id, name) => {
    try {
        const paymentTypeUpdated = await PaymentType.update({name}, {where: {id}});
        if(paymentTypeUpdated) return paymentTypeUpdated;
    } catch (error) {
        throw error.message;
    }
}

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
        if(status === "rechazado") await FriendRequest.destroy({where: {FriendRId: FriendId, UserId: UserId}})
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


module.exports = {
    putProfile,
    putUser,
    putCourt,
    putPayment,
    putReservationType,
    putStatusRequest,
    putPaymentStatusInDb,
    putPaymentTypeInDb,
    putUserEstado
}