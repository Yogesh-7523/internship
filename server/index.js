const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const data = require("./sample_data.json");
const port = 5000;
const app = express();
const dotenv = require("dotenv");
dotenv.config();
app.use(cors());
app.use(bodyParser.json());


// Connect to MongoDB database
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
});
console.log("db");

// Define schema for User model
const userSchema = new mongoose.Schema({
  id: Number,
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  income: String,
  city: String,
  car: String,
  quote: String,
  phone_price: String,
});

// Create User model from schema
const User = mongoose.model("User", userSchema);
// User.create(data);
console.log("created");

// Define API endpoint to fetch users with income lower than $5 USD and a car of brand "BMW" or "Mercedes"
app.get('/1', async (req, res) => {
  try {
    const users = await User.find({
      $and: [
        {$expr: { $lt: [{ $toDouble: { $substr: [ "$income", 1, -1 ] } }, 5] }},
        { $or: [{ car: 'BMW' }, { car: 'Mercedes-Benz' }] }
      ]
      // "id": 1
    });
    
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

//Male Users which have phone price greater than 10,000. //postman working correctly
app.get('/2', async (req, res) => {
  try {
    const users = await User.find({
      $and: [
        {gender: "Male"},
        {$expr: { $gt: [{ $toInt: "$phone_price" }, 10000] }}
      ]
    });
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
//Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.

app.get('/3', async (req, res) => {
  try {
    // const users = await User.find({
    //   $and: [
    //     { last_name: { $regex: /^M/ } }, // last name starts with "M"
    //     { $expr: { $gt: [ { $strLenCP: "$quote" }, 15 ] } }, // quote character length > 15
    //     // { email: { $regex: /M\w+@/ } } // email includes last name
    //   ]
    // });
    const users = await User.find({
      $and:[

        {last_name: /^M/},
        {$expr: { $gt: [{ $strLenCP: "$quote" }, 15] }},
        {email: { $regex: ".*"+ { $toLower: "$last_name" }+ ".*" }}
      ]
    })
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
// Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.
app.get('/4', async (req, res) => {
  try {
    const users = await User.find({
      $and:[
        {$or:[
          {car : "BMW"},
          {car : "Mercedes-Benz"},
          {car : "Audi"}
        ]},

        {email : {$not: /\d/}}
      ]
    });
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

//Show the data of top 10 cities which have the highest number of users and their average income.
app.get("/5", async (req, res) => {
  try {
    const result = await User.aggregate([
      { $group: {
        _id: "$city",
        count: { $sum: 1 },
        income: { $avg: { $toDouble: { $substr: ["$income", 1, -1] } } }
      } },
      { $sort: { count: -1, income: -1 } },
      { $limit: 10 },
      {
        $project: {
          _id: 0,
          city: "$_id",
          income : "$income",
        },
      },
    ]);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});
// Start server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
