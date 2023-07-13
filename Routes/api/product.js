const express = require("express");
const _ = express.Router();
const secureUpload = require("../../Controller/productController");
_.post("/createproduct", secureUpload);

module.exports = _;
