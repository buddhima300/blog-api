// import mongoose to create schema
const mongoose = require("mongoose");
// create new schema for user model
const userSchema = new mongoose.Schema({
  username: "string",
  email: "string",
  password: "string",
});

const userModel = mongoose.model("user", userSchema); // create a collection in mongoDB called User
module.exports = userModel;
