const express = require('express');
const _ = express.Router();

_.post('/registration', async (req,res)=> {
    try {
        const {fullName , email, password} = req.body;
        res.status(200).json({
            data:{
                fullName , email, password
            }
        })    
    } catch (error) {
        res.status(404).json({
            message:"Registration Route not working                  "
        })    
    }
    
})


module.exports = _;