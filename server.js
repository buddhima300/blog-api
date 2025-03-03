// first get import the express js framework
const express = require("express");
const app = express();

// then we import some middlewares such as CORS and body-parser
const cors = require("cors");
const bodyParser = require("body-parser");
// then we have to use this middlewares
app.use(cors());
app.use(bodyParser.json());

//import the mongodbconnection and run it
const connectDB = require("./src/config/db");
connectDB();

//now lets create a simple API routes for authentication and blog posts
const authRoutes = require("./src/routes/auth");
app.use("/api", authRoutes);

//now lets create simple server and make it listen to port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is running in port ${PORT} successfully}`);
});
