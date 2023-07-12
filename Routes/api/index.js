const express = require("express");
const _ = express.Router();
const authApi = require("./auth.js");
const catagoriesApi = require("./catagory");
const becomemarchantApi = require("./Marchant");
_.use("/auth", authApi);
_.use("/catagories", catagoriesApi);
_.use("/marchant", becomemarchantApi);

module.exports = _;
