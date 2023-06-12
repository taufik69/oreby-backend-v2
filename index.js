
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const DatabaseConnection = require('./Configaration/DatabaseConnect');
const routes = require('./Routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
DatabaseConnection();
app.use(routes);


app.listen( process.env.PORT || 5000, ()=> {
    console.log('server running on port 3000')
})