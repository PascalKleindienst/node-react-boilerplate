/**
 * Bootstrap Server
 */
// Load Packages
const express    = require('express');
const app        = express();
const morgan     = require('morgan');
const bodyParser = require('body-parser');

const path       = require('path');
const publicPath = path.join(__dirname, '..', 'public');

// Configure Server
app.use(morgan(process.env.LOGLEVEL || 'tiny'));
app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
const routes = require('./routes/routes')(app, publicPath);

module.exports = app;
