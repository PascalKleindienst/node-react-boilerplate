/**
 * Setup Routes
 * @param  {Object} app        The Server
 * @param  {String} publicPath Path to public folder
 */
module.exports = (app, publicPath) => {
    app.get('*', (req, res) => {
        res.sendFile(path.join(publicPath, 'index.html'));
    });
}
