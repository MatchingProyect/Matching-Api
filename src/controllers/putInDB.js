const dataBase = require('../dataBase/dataBase')
const { User, Profile, Court, Payment, ReservationType, FriendRequest } = dataBase.models

const putProfile = async (id, laterality, courtSide, matchType, dayPreference, timePreference, categoryLvl, SportId, UserId) => {
    try {
        const updatedProfile = await Profile.update({ laterality, courtSide, matchType, dayPreference, timePreference, categoryLvl, SportId, UserId }, { where: { id } })
        if (updatedProfile) return updatedProfile
    } catch (error) {
        throw error.message
    }
}

const putUser = async (id, displayName, gender, dayBirth, email, phone, creditCardWarranty, avatarImg, password) => {
    try {
        const updatedUser = await User.update({ displayName, gender, dayBirth, email, phone, creditCardWarranty, avatarImg, password }, { where: { id } })
        if (updatedUser) return updatedUser
    } catch (error) {
        throw error.message
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

const putPayment = async (id, name, amount, dateTimeUpdated, PaymentTypeId, PaymentStatusId, PagoId) => {
    try {
        const paymentUpdated = await Payment.update({ name, amount, dateTimeUpdated, PaymentTypeId, PaymentStatusId, PagoId }, { where: { id } });
        if (paymentUpdated) return paymentUpdated;
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
        if(status === "false") await FriendRequest.destroy({where: {FriendRId: FriendId, UserId: UserId}})
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
    putStatusRequest
}