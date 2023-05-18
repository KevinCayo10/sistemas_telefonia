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

//Definir ruta inicial
app.get("/", (req, res) => {
  res.send("Servidor activo");
});

//Definir puerto de escucha
app.listen(3800, () => {
  console.log("Servidor ejecutando");
});
