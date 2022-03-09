# Table of Contents

# General Info
The cars API project is a basic backend project to demonstrate my understanding of NodeJS and ExpressJS. It contains basic functionalites like filtering, sort and select which allows
users to get the specific data they desire.
For the database, I used Atlas cloud database from Mongo DB to store the data and Mongoose, the object data modeling, to create the schema.
Data used in this API is car data but it was randomly generated by Mockaroo, an online data generator platform. You might see some weird car models that don't exist, so
please don't be surprised. 
You can visit the project via this link. https://random-cars-api.herokuapp.com/api/v1/cars

# How to run the project
1. Install all the dependencies (Please check the installed packages in package.json file)
```
npm install
```

2. Start the project
```
npm start
```

# Functionalities
Query parameters play a huge role here to query to server to get the desire data. 
## 1. Search by object properties.
Initially, there 300 objects in the array as in the picture below.</br>
Corresponding URL: https://random-cars-api.herokuapp.com/api/v1/cars

[img]

When you apply query parameters, you will get more specific results that match your desire. For instance, if you want all cars with the brand Toyota, simply append the query parameters and the end of the URL like this.</br>
Corresponding URL: https://random-cars-api.herokuapp.com/api/v1/cars?car_brand_name=toyota </br>

[img]

'?car_brand_name=toyota' is the extended part that narrows down the result to only Toyota cars. 

Of course, it is also legal to have more than one conditions. Simply connect them by the ampersand sign. </br>
If you are a fan of a red Toyota, you will like this.
Corresponding URL: https://random-cars-api.herokuapp.com/api/v1/cars?car_brand_name=toyota&car_color=red



