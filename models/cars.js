const mongoose = require("mongoose");
const carsSchema = mongoose.Schema({
  // id: { type: String, required: [true, "ID must be provided."] },
  car_brand_name: {
    type: String,
    required: [true, "Car make must be provided."],
  },
  car_model: {
    type: String,
    required: [true, "Model must be provided."],
  },
  car_model_year: {
    type: Number,
    default: 2000,
  },
  car_color: {
    type: String,
    default: "Black",
  },
  price: {
    type: Number,
    required: [true, "Price must be provided."],
  },
});
module.exports = mongoose.model("Cars", carsSchema);
