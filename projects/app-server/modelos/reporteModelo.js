const mongoose = require("mongoose");
const reporteSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  value: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("reporte", reporteSchema);
