const { putUserEstado } = require("../../controllers/putInDB");

const borradoLogico = async(req, res) => {
    try {
        const {id} = req.params;
        const { estado} = req.body;
        const userEstadoUpdated = await putUserEstado(id,  estado);

        if(userEstadoUpdated.length>0){  return res.status(200).json({
            status: true,
            userEstadoUpdated
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

module.exports = borradoLogico;