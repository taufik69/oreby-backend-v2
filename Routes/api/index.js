const express = require("express");
const _ = express.Router();
const authApi = require("./auth.js");
const catagoriesApi = require("./catagory");
const becomemarchantApi = require("./Marchant");
const productApi = require("./product");
_.use("/auth", authApi);
_.use("/catagories", catagoriesApi);
_.use("/marchant", becomemarchantApi);
_.use("/product", productApi);

module.exports = _;
