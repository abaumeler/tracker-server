require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var app = express();

// MongoDB setup
mongoose.Promise = global.Promise;

const DbHost = process.env.DB_HOST;
const DbUser = process.env.DB_USER;
const DbPassword = process.env.DB_PW;

mongoose.connect(`mongodb://${ DbUser }:${ DbPassword }@${ DbHost }`, { useNewUrlParser: true });

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

// Routes
app.use('/users', require('./routes/users'));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Server listening at ${ port }`);
