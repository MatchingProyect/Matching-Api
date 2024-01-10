const dataBase = require('../../dataBase/dataBase');
const { getAllProfInDb } = require('../../controllers/getInDB');
const { Profile } = dataBase;

const bringSportsProfiles = async function(req, res) {
    try {
        const { id } = req.params;
        const allProfiles = await getAllProfInDb();
        let theOne = allProfiles.filter((element) => element.UserId == id);
        if (theOne) return res.status(200).json({
            status: true,
            theOne
        })
    } catch(error){
        res.status(500).json({
            status: false,
            message: error.message
        })
    };
};

module.exports =  bringSportsProfiles
 