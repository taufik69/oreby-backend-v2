const mongoose = require('mongoose')
const DatabaseConnection = ()=> {
    mongoose.connect('mongodb+srv://taufikislam172:WyGeERaOfcXjWxzq@cluster0.xtjx1tj.mongodb.net/'
    ).then(()=> {
        console.log('database conneciton sucessful')
    }).catch((error)=> {
        console.log('Error from database conneciton ', Error)
    })
 }
 module.exports = DatabaseConnection;