const express = require("express");
const _ = express.Router();
const authApi = require("./auth.js");
const catagoriesApi = require("./catagory");

_.use("/auth", authApi);
_.use("/catagories", catagoriesApi);

module.exports = _;
