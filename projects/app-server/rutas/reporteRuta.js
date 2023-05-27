const express = require("express");
const reporteRuta = express.Router();
const reporteControlador = require("../controladores/reporteControlador");

//api/clientes
reporteRuta.post("/", reporteControlador.crearReporte);
reporteRuta.get("/", reporteControlador.obtenerReporte);

module.exports = reporteRuta;
