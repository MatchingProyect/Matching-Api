const { getMatchResultInDb, matchResultFilter } = require("../../controllers/filtersAndGet");



const getMatchResult = async(req, res) =>{
    try {
        const {name} = req.query;
        if(name){
            const search = await matchResultFilter(name);
            if(search) return res.status(200).json({
                status: true,
                search
            })
            return res.status(200).json({
                status: false,
                message: 'Name not found.'
            })

        }
        const matchResult = await getMatchResultInDb()
        if(matchResult){
            return res.status(200).json({status: true, matchResult})
        }else{
            return res.status(404).json({status: false, message: 'not found'})
        }
    } catch (error) {
        return res.status(500).json({status: false, message: error.message})
    }
}

module.exports= getMatchResult