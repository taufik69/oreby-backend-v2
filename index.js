
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const DatabaseConnection = require('./Configaration/DatabaseConnect');
const routes = require('./Routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(routes);
DatabaseConnection();
console.log(process.env.BASE_URL)

app.listen(process.env.PORT || 5000, ()=> {
    console.log('server running on port 3000')
})