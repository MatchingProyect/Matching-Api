const { addFriendRequestInDb, createRelationshipInDb } = require("../../controllers/addInDB");
const { getFriendRequestInDb, getAllFriendsReqInDb, allFriendsInDb } = require("../../controllers/getInDB");
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

const getAllFriendsReq = async(req, res) =>{
    try {
        const allFriendsRequest = await getAllFriendsReqInDb()
        if(allFriendsRequest) return res.status(200).json({status: true, allFriendsRequest})
    } catch (error) {
        return res.status(404).json({status: false, message: error.message})
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

        
        
        if (status === "true") {
            
            const statusUpdated = await putStatusRequest(status, UserId, FriendId);
            const relationship = await createRelationshipInDb(UserId, FriendId);
            console.log(relationship)
            
            if (relationship) {
                return res.status(200).json({
                    status: true,
                    relationship,
                    statusUpdated
                });
            } else {
                return res.status(404).json({
                    status: false,
                    message: 'Relationship not created',
                    statusUpdated
                });
            }
        } else  {
            
            const deletedRequest = await putStatusRequest(status, UserId, FriendId);
            
            if (deletedRequest) {
                return res.status(200).json({
                    status: true,
                    message: 'Friend request deleted',
                    deletedRequest
                });
            } else {
                return res.status(404).json({
                    status: false,
                    message: 'Friend request not deleted',
                    deletedRequest
                });
            }
        } 
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });
    }
};

const allFriends = async(req, res) =>{
    try {
        const allFriendsDb = await allFriendsInDb()
        if(allFriends) return res.status(200).json({status:true, allFriendsDb})
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });
    }
}




module.exports = {
    relationUser,
    addFriend,
    friendRequest,
    getAllFriendsReq,
    allFriends
};