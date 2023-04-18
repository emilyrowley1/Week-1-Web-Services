const express = require('express');
const app = express();

const port = 8081;

app.get('/test', function (req, res) {
    res.send('Hello World');
});

var server = app.listen(port, function () {
    console.log(`Listening on ${port} for something cool`);
});