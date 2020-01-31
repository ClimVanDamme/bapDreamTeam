const mongoose = require("mongoose");

const DrinkSchema = mongoose.Schema(
  {
    name: String,
    price: Number
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Drink", DrinkSchema);
