const express = require("express");
const _ = express.Router();
const registration = require("../../Controller/Registration");
const Login = require("../../Controller/Login");
const OtpverficationMatch = require("../../Controller/OtpverificatonMatch");
const becomeMerchant = require("../../Controller/BecomeMerchant");

_.post("/registration", registration);
_.post("/login", Login);
_.post("/otpmatch", OtpverficationMatch);
_.post("/becomemerchant", becomeMerchant);

module.exports = _;
