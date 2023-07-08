const express = require("express");
const _ = express.Router();
const registration = require("../../Controller/Registration");
const Login = require("../../Controller/Login");

_.post("/registration", registration);
_.post("/login", Login);

module.exports = _;
