const mongoose = require("mongoose");
const newSchema = new mongoose.Schema(
  {
    id: String,
    json: Object,
  },
  { timestamps: true }
);

module.exports = mongoose.model("JsonSchema", newSchema);
