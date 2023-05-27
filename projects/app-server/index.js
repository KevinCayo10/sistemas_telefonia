const express = require("express");
const conectarBD = require("./config/db");
const cors = require("cors");

//crear servidor
const app = express();

//conectar bd
conectarBD();

app.use(express.json());
app.use(cors());

//Llamar a las apis
app.use("/api/clientes", require("./rutas/clienteRuta"));
app.use("/api/reportes", require("./rutas/reporteRuta"));
app.use("/api/usuarios", require("./rutas/usuarioRuta"));
app.use("/api/pasajes", require("./rutas/PasajeRuta"));

//Definir ruta inicial
app.get("/", (req, res) => {
  res.send("Servidor activo");
});

//Definir puerto de escucha
app.listen(3800, () => {
  console.log("Servidor ejecutando");
});
