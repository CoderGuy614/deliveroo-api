// Packages
const express = require("express");

require("dotenv").config();

// Server

const app = express();
const database = require("./database");

// Middleware
//
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors({ credentials: true }));
app.use(cors());

// Routes

app.use("/restaurants", require("./controllers/restaurants.js"));
app.use("/categories", require("./controllers/categories.js"));

// Start

app.listen(process.env.PORT, () => {
  console.log(`Ready on port ${process.env.PORT}`);
});

module.exports = app;
