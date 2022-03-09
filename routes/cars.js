//import Express Router
const express = require("express");
const router = express.Router();
console.log(router);
//get the controller
const getAllCars = require("../controllers/cars");

//bind it
router.route("/").get(getAllCars);

module.exports = router;
