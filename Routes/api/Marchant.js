const express = require("express");
const _ = express.Router();
const becomemarchant = require("../../Controller/BecomeMerchant");
_.post("/becomemarchant", becomemarchant);

module.exports = _;
