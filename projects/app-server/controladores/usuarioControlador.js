const Usuario = require("../modelos/usuarioModelo");
const jsonToken = require("jsonwebtoken");

exports.crearUsuario = async (req, res) => {
  try {
    let usuario;
    //Crear el usuario
    usuario = new Usuario(req.body);
    await usuario.save();
    res.send(usuario);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo problemas en el registro del usuario");
  }
};
/*
exports.obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    //Crear el Cliente
    res.json(usuarios);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo problemas al cargar los usuarios");
  }
};

exports.obtenerUsuario = async (req, res) => {
  try {
    const username = req.query.username;
    const password = req.query.password;

    let usuario = await Usuario.findOne({ username, password });
    if (!usuario) {
      res.status(404).json({ msg: "No existe el usuario" });
    }
    res.json(usuario);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo problemas al cargar el usuario");
  }
};
*/

exports.obtenerUsuario = async (req, res) => {
  try {
    const username = req.query.username;
    const password = req.query.password;

    let usuario = await Usuario.findOne({ username, password });
    const token = jsonToken.sign({ _id: usuario._id }, "secretkey");

    if (!usuario) {
      return res.status(404).json({ msg: "No existe el usuario" });
    }

    res.json({ token });
  } catch (error) {
    //console.log(error);
    // res.status(500).send("Hubo problemas al cargar");
  }
};

exports.eliminarUsuario = async (req, res) => {
  try {
    let usuario = await Usuario.findById(req.params.id);
    if (!usuario) {
      res.status(404).json({ msg: "No existe el usuario" });
    }
    await Usuario.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "Usuario eliminado" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo problemas en eliminar al usuario");
  }
};
