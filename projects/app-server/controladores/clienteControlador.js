const Cliente = require("../modelos/clienteModelo");

exports.crearCliente = async (req, res) => {
  try {
    let cliente;
    //Crear el Cliente
    cliente = new Cliente(req.body);
    await cliente.save();
    res.send(cliente);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo problemas en el registro del cliente");
  }
};

exports.obtenerClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find();
    //Crear el Cliente
    res.json(clientes);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo problemas al cargar los clientes");
  }
};

exports.actualizarCliente = async (req, res) => {
  try {
    const { nombresCompletos, direccion, fechaNacimiento, celular } = req.body;
    let cliente = await Cliente.findById(req.params.id);
    if (!cliente) {
      res.status(404).json({ msg: "No existe el Cliente" });
    }
    cliente.nombresCompletos = nombresCompletos;
    cliente.direccion = direccion;
    cliente.fechaNacimiento = fechaNacimiento;
    cliente.celular = celular;

    cliente = await Cliente.findOneAndUpdate({ _id: req.params.id }, cliente, {
      new: true,
    });
    res.json(cliente);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo problemas en la actualizacion del cliente");
  }
};

exports.obtenerCliente = async (req, res) => {
  try {
    let cliente = await Cliente.findById(req.params.id);
    if (!cliente) {
      res.status(404).json({ msg: "No existe el Cliente" });
    }
    res.json(cliente);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo problemas al cargar el cliente");
  }
};

exports.eliminarCliente = async (req, res) => {
  try {
    let cliente = await Cliente.findById(req.params.id);
    if (!cliente) {
      res.status(404).json({ msg: "No existe el Cliente" });
    }
    await Cliente.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "Cliente eliminado" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo problemas en eliminar al cliente");
  }
};
