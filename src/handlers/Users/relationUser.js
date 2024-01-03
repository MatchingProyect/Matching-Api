const { addFriendRequestInDb, createRelationshipInDb } = require("../../controllers/addInDB");
const { getFriendRequestInDb } = require("../../controllers/getInDB");
const { putStatusRequest } = require("../../controllers/putInDB");

const relationUser = async (req, res) => {
    try {
        const { status, UserId, FriendRId } = req.body;
        const request = await addFriendRequestInDb(status, UserId, FriendRId);
        if (request) return res.status(200).json({
            status: true,
            request
        })
        else return res.status(404).json({
            status: false,
            message: 'Request not created'
        })

    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

const friendRequest = async (req, res) => {
    try {
        const {userType} = req.query
        const { id } = req.params;
        const getFriendRequest = await getFriendRequestInDb(id, userType);
        if (getFriendRequest) return res.status(200).json({
            status: true,
            getFriendRequest
        })
        else return res.status(404).json({
            status: false,
            message: 'Friend Request not got it'
        })

    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}


const addFriend = async (req, res) => {
    try {
        const { status, UserId, FriendId } = req.body;
        if (status) {
            const statusUpdated = await putStatusRequest(status, UserId, FriendId);
            const relationship = await createRelationshipInDb(UserId, FriendId);
            if (relationship) return res.status(200).json({
                status: true,
                relationship,
                statusUpdated
            })
            else {
                const statusUpdated = await putStatusRequest(status, UserId, FriendId);
                return res.status(404).json({
                    status: false,
                    message: 'Relationship not created',
                    statusUpdated
                })
            }
        }
        else return res.status(200).json({
            status: false,
            message: 'User rejected relationship'
        })

    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}



module.exports = {
    relationUser,
    addFriend,
    friendRequest
};