require("dotenv").config();
const connectDB = require("./db/connect");
const Cars = require("./models/cars");
const jsonCars = require("./MOCK_DATA.json");

const jsonCarsFinal = jsonCars.map((car) => {
  return { ...car, price: car.price.replace("$", "") };
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Cars.deleteMany();
    await Cars.create(jsonCarsFinal);
    console.log("Connect to DB successfully !");
  } catch (err) {
    console.log(err);
  }
};

start();
