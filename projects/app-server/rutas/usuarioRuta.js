const express = require("express");
const usuarioRuta = express.Router();
const usuarioControlador = require("../controladores/usuarioControlador");

//api/clientes
usuarioRuta.post("/", usuarioControlador.crearUsuario);
//usuarioRuta.get("/", usuarioControlador.obtenerUsuarios);
//usuarioRuta.put("/:id", usuarioControlador.actualizarUsuario);
//usuarioRuta.get("/:username/:password", usuarioControlador.obtenerUsuario);
usuarioRuta.get("/", usuarioControlador.obtenerUsuario);
usuarioRuta.delete("/:id", usuarioControlador.eliminarUsuario);

module.exports = usuarioRuta;
