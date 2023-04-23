const routes = require('express').Router();

routes.get('/', function (req, res) {
    res.send('Emily Wayment');
});

module.exports = routes;