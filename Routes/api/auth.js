const express = require('express');
const _ = express.Router();
const registration = require('../../Controller/Registration');


_.post('/registration',registration );


module.exports = _;