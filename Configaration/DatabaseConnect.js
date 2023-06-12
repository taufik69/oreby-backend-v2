require('dotenv').config();
const mongoose = require('mongoose');
const DatabaseConnection = ()=> {
    mongoose.connect(process.env.DATABASE_URL, 
    
        
    ).then(()=> {
        console.log('database conneciton sucessful')
    }).catch((error)=> {
        console.log('Error from database conneciton ', Error)
    })
 }
 module.exports = DatabaseConnection;