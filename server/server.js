// ========================================
// Init App and listen on port ============
// ========================================
require('dotenv').config({ path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env' });
const app = require('./app');
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('The magic happens on port ' + port);
});
