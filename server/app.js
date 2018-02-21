/**
 * Bootstrap Server
 */
// Load Packages
const express        = require('express');
const app            = express();
const morgan         = require('morgan');
const bodyParser     = require('body-parser');
const path           = require('path');
const publicPath     = path.join(__dirname, '..', 'public');

// Load env config
if (process.env.NODE_ENV === 'test') {
    require('dotenv').config({ path: '.env.test' });
} else {
    require('dotenv').config();
}

// For Express
app.use(morgan(process.env.LOGLEVEL || 'tiny'));
app.use(express.static(publicPath));

// For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Models
const models = require("./models");

// Routes
const routes = require('./routes/routes')(app, publicPath);

//Sync Database
models.sequelize.sync().then(() => {
    console.log('Nice! Database looks fine')
}).catch((err) => {
    console.log(err, 'Something went wrong with the Database Update!')
});

module.exports = app;
