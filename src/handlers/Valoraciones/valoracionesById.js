const { valoracionesByUserInDb } = require("../../controllers/getInDB");

const getValoracionesByUserId = async (req, res) => {
  try {
    const { id } = req.params;


    const valoraciones = await valoracionesByUserInDb(id)
    if (valoraciones) {
      return res.status(200).json({ status: true, valoraciones });
    } else {
      return res.status(404).json({ status: false, message: "no encontrado" })
    }
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
};

module.exports = getValoracionesByUserId