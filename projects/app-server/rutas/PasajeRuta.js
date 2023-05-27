const express = require("express");
const pasajeRuta = express.Router();
const pasajeControlador = require("../controladores/pasajeControlador");

//api/clientes
pasajeRuta.post("/", pasajeControlador.crearPasaje);
pasajeRuta.get("/", pasajeControlador.obtenerPasajes);
pasajeRuta.put("/:id", pasajeControlador.actualizarPasaje);
pasajeRuta.get("/:id", pasajeControlador.obtenerPasaje);
pasajeRuta.delete("/:id", pasajeControlador.eliminarPasaje);

module.exports = pasajeRuta;
