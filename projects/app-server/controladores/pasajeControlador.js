const Pasaje = require("../modelos/pasajeModelo");

exports.crearPasaje = async (req, res) => {
  try {
    let pasaje;
    //Crear el pasaje
    pasaje = new Pasaje(req.body);
    console.log(pasaje);
    await pasaje.save();
    console.log(pasaje);
    res.send(pasaje);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo problemas en el registro del pasaje");
  }
};

exports.obtenerPasajes = async (req, res) => {
  try {
    const pasaje = await Pasaje.find();
    //Crear el Cliente
    res.json(pasaje);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo problemas al cargar los pasaje");
  }
};

exports.actualizarPasaje = async (req, res) => {
  try {
    const { cedula, cliente, destino, fechaSalida, transporte, precio } =
      req.body;
    let pasaje = await Pasaje.findById(req.params.id);
    if (!pasaje) {
      res.status(404).json({ msg: "No existe el pasaje" });
    }
    pasaje.cedula = cedula;
    pasaje.cliente = cliente;
    pasaje.destino = destino;
    pasaje.fechaSalida = fechaSalida;
    pasaje.transporte = transporte;
    pasaje.precio = precio;

    pasaje = await Pasaje.findOneAndUpdate({ _id: req.params.id }, pasaje, {
      new: true,
    });
    res.json(pasaje);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo problemas en la actualizacion del pasaje");
  }
};

exports.obtenerPasaje = async (req, res) => {
  try {
    let pasaje = await Pasaje.findById(req.params.id);
    if (!pasaje) {
      res.status(404).json({ msg: "No existe el pasaje" });
    }
    res.json(pasaje);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo problemas al cargar el pasaje");
  }
};

exports.eliminarPasaje = async (req, res) => {
  try {
    let pasaje = await Pasaje.findById(req.params.id);
    if (!pasaje) {
      res.status(404).json({ msg: "No existe el pasaje" });
    }
    await Pasaje.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "pasaje eliminado" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo problemas en eliminar al pasaje");
  }
};
