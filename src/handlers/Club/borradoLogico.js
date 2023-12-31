const { putClubEstado } = require("../../controllers/putInDB");

const borradoLogicoClub = async(req, res) => {
    try {
        const {id} = req.params;
        const {estado} = req.body;
        const clubEstadoUpdated = await putClubEstado(id,  estado);

        if(clubEstadoUpdated.length>0){  return res.status(200).json({
            status: true,
            clubEstadoUpdated
        })}else{
            console.log('entro al 404')
         return res.status(404).json({
            status: false,
            message: "No se encontro el usuario"
        })
    }
            
    } catch (error) {
        console.log('entro al cach')
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

module.exports = borradoLogicoClub;