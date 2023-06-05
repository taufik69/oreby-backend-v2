const express = require('express');
const _= express.Router();
const authapi = require('./auth.js')

_.use('/auth',authapi);

module.exports = _;