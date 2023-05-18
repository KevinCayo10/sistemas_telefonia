const mongoose = require("mongoose");
const clienteSchema = mongoose.Schema({
  nombresCompletos: {
    type: String,
    require: true,
  },
  direccion: {
    type: String,
    require: true,
  },
  fechaNacimiento: {
    type: Date,
    require: true,
  },
  celular: {
    type: String,
    require: true,
  },
  fechaCreacion: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("cliente", clienteSchema);
