const routes = require('express').Router();

routes.get('/', function (req, res) {
    res.send('Hello World');
});

module.exports = routes;