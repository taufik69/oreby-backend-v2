const express = require('express');
const _ = express.Router();

_.get('/demo', async (req,res)=> {
    res.status(200).json({
        message:"This api routes work finely"
    })
})


module.exports = _;