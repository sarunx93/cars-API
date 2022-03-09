const cars = require("../models/cars.js");

const capitalize = function (word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
};

const getAllCars = async (req, res) => {
  const { car_brand_name, car_model, sort, fields, numericFilter } = req.query;
  const queryObject = {};
  if (car_brand_name) {
    queryObject.car_brand_name = capitalize(car_brand_name);
  }
  if (car_model) {
    queryObject.car_model = capitalize(car_model);
  }
  if (numericFilter) {
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$lt",
      "<=": "$lte",
    };
    const regEx = /\b(<|>|>=|<=|=)\b/g;
    let filters = numericFilter.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );
    const options = ["price", "car_model_yar"];
    filters = filters.split(",").forEach((item) => {
      //how each item looks like.
      //price-$gt-40
      const [field, operator, value] = item.split("-");
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }
  let result = cars.find(queryObject);

  //Sort and select will work slightly different since we can not pass it in the find function.
  //Instead, we need to chain them after the result.
  if (sort) {
    const sortList = sort.split(",").join(" ");

    result = result.sort(sortList);
  } else {
    result = result;
  }
  if (fields) {
    const fieldList = fields.split(",").join(" ");
    result.select(fieldList);
  } else {
    result = result;
  }
  const carsData = await result;
  // const carsData = await cars.find(queryObject);
  res.status(200).json({ amount: carsData.length, carsData });
};

module.exports = getAllCars;
