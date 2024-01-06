const { putCourtEstado } = require("../../controllers/putInDB");

const borradoLogicoCourt = async(req, res) => {
    try {
        const {id} = req.params;
        const { estado} = req.body;
        const courtEstadoUpdated = await putCourtEstado(id,  estado);

        if(courtEstadoUpdated.length>0){  return res.status(200).json({
            status: true,
            courtEstadoUpdated
        })}else{
         return res.status(404).json({
            status: false,
            message: "No se encontro el usuario"
        })
    }
            
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

module.exports = borradoLogicoCourt;