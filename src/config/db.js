//import mongoose from mongoose for mongodb connectionsetup
const mongoose = require("mongoose");

//create a asynchrounous function to connect to mongodb
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/blog");
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDB;
