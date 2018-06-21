// Initial Requires
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

// DB Connection
mongoose.connect('mongodb://localhost/nodekb');
let db = mongoose.connection;

// Check Connection
db.once('open', () => console.log("Connected to MongoDB"));

// Check for DB Errors
db.on('error', (err) => console.log(err));




// App Settings
const app = express();
app.set('view engine', 'ejs');

// Routing Import
const routes = require('./routes');

// Routes
app.get('/', routes.home);
app.get('/about', routes.about);


app.listen(3000, () => console.log('Server is running on Port 3000')); 