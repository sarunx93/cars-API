require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const carsRouter = require("./routes/cars");
const errorHandle = require("./middleware/error-handle");
const notFound = require("./middleware/not-found");

//middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send('<h1>Car API</h1><a href="/api/v1/cars">API</a>');
});

app.use("/api/v1/cars", carsRouter);
app.use(errorHandle);
app.use(notFound);

const port = process.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};
start();
