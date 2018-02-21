// ========================================
// ROUTES =================================
// ========================================
module.exports = (app, publicPath) => {
    const path = require('path');

    app.get('*', (req, res) => {
        res.sendFile(path.join(publicPath, 'index.html'));
    });
}
