const express = require('express');
const app = express();
const bodyParser = require('body-parser');

require('dotenv/config');


//Middlewares
app.use(bodyParser.json());

//Routes
const translateRoute = require('./routes/translate');

app.use('/translate', translateRoute);


console.log("Listening on port " + process.env.PORT)
app.listen(process.env.PORT);