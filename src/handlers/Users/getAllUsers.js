const { getAllUsersInDb, searchByName } = require("../../controllers/getInDB")

const getAllUsers = async(req, res) =>{
    try {
        const { name, page } = req.query;
        const pageNumber = Number(page) || 1;
        const limit = 55
     const offset = (pageNumber - 1) * limit;

        if(name){
            const search = await searchByName(name);
            if(search) return res.status(200).json({
                status: true,
                search
            })
            return res.status(200).json({
                status: false,
                message: 'Name not found.'
            })

        }
        const allUsers = await getAllUsersInDb(offset, limit)
        if(allUsers){
            return res.status(200).json({status: true, allUsers})
        }else{
            return res.status(404).json({status: false, message: 'not found'})
        }
    } catch (error) {
        return res.status(500).json({status: false, message: error.message})
    }
}

module.exports= getAllUsers