const express = require("express");
const clienteRuta = express.Router();
const clienteControlador = require("../controladores/clienteControlador");

//api/clientes
clienteRuta.post("/", clienteControlador.crearCliente);
clienteRuta.get("/", clienteControlador.obtenerClientes);
clienteRuta.put("/:id", clienteControlador.actualizarCliente);
clienteRuta.get("/:id", clienteControlador.obtenerCliente);
clienteRuta.delete("/:id", clienteControlador.eliminarCliente);

module.exports = clienteRuta;
