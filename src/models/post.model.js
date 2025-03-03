const mongoose = require("mongoose");
const userModel = require("./user.model");

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: userModel,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const postModel = mongoose.model("post", PostSchema);
module.exports = postModel;
