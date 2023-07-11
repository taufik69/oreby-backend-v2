const express = require("express");
const _ = express.Router();

const createCatagories = require("../../Controller/CreateCatagories.js");

_.post("/createcatagories", createCatagories);

module.exports = _;
