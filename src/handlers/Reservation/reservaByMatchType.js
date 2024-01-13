const { getReservaByMatchType } = require("../../controllers/getInDB");

const obtenerReservasPorTipo = async (req, res) => {
    try {
        const { id } = req.params;
    
    
      const matchType = await getReservaByMatchType(id)
  
      if (matchType) {
        return res.status(200).json({status: true, matchType});
      }
    } catch (error) {
      console.error('Error al obtener reservas:', error);
      return res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
  };

module.exports= obtenerReservasPorTipo