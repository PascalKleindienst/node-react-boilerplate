// ========================================
// Init App and listen on port ============
// ========================================
const app = require('./app');
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('The magic happens on port ' + port);
});
