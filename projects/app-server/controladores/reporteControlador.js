const Reporte = require("../modelos/reporteModelo");

exports.crearReporte = async (req, res) => {
  try {
    let reporte;
    //Crear el reporte
    reporte = new Reporte(req.body);
    await reporte.save();
    res.send(reporte);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo problemas en el registro del reporte");
  }
};

exports.obtenerReporte = async (req, res) => {
  try {
    const reporte = await Reporte.find();
    //Crear el Cliente
    res.json(reporte);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo problemas al cargar los reportes");
  }
};
