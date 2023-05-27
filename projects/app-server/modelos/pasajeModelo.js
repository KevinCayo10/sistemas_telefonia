const mongoose = require("mongoose");
const pasajeSchema = mongoose.Schema({
  cedula: {
    type: String,
    require: true,
  },
  cliente: {
    type: String,
    require: true,
  },
  destino: {
    type: String,
    require: true,
  },
  fechaSalida: {
    type: Date,
    require: true,
  },
  transporte: {
    type: String,
    require: true,
  },
  precio: {
    type: Number,
    require: true,
  },
  fechaCreacion: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("pasaje", pasajeSchema);
