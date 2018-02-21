// ==================================================
// Bootstrap Server =================================
// ==================================================
const express        = require('express');
const app            = express();
const morgan         = require('morgan');
const cookieParser   = require('cookie-parser');
const bodyParser     = require('body-parser');
const passport       = require('passport')
const session        = require('express-session')
const path           = require('path');
const publicPath     = path.join(__dirname, '..', 'public');
const models         = require('./models');

// ========================================
// EXPRESS SERVER =========================
// ========================================
app.use(morgan(process.env.LOGLEVEL || 'tiny'));
app.use(express.static(publicPath));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ========================================
// PASSPORT ===============================
// ========================================
app.use(session({ secret: process.env.SECRET, resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

require('./config/passport.js')(passport, models.User);

// ========================================
// ROUTES =================================
// ========================================
const authRoutes = require('./routes/auth')(app, passport);
const fallBackRoutes = require('./routes/routes')(app, publicPath);

// ========================================
// DATABASE ===============================
// ========================================
models.sequelize.sync().then(() => {
    console.log('Nice! Database looks fine')
}).catch((err) => {
    console.log(err, 'Something went wrong with the Database Update!')
});

module.exports = app;
