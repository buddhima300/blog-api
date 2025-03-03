// lets import express
const express = require("express");
const {
  signupController,
  signinController,
} = require("../controllers/auth.controller");

// create a instance of express router
const router = express.Router();

// create a simple api routing endpoints for signup and signin
router.post("/register", signupController);
router.post("/login", signinController);

module.exports = router;
