const { addValoracionInDb } = require("../../controllers/addInDB");

const createValoracion = async (req, res) => {
    try {
    const {id} = req.params; 
    const { valoracion } = req.body;

    console.log(id, valoracion)
  

      const nuevaValoracion = await addValoracionInDb(id, valoracion)
      console.log(nuevaValoracion)
      if(nuevaValoracion){
        return  res.status(200).json({status: true, nuevaValoracion});
      }else{
        console.log("b")
        return  res.status(404).json({status: false, message: "usuario no encontrado"});
      }
  
     
    } catch (error) {
        console.log("a")
      return res.status(500).json({status: false, message: error.message})
    }
  };

  module.exports=createValoracion