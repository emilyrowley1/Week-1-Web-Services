const express = require('express');
var app = express();

app.use('/', require('./routes'));

const port = process.env.PORT || 3000;

var server = app.listen(port, function () {
    console.log(`Listening on ${port} for something cool`);
});