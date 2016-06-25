var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 3000;

app.use('/api', require('../routes/api.js')(express));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var server = app.listen(port, () => {
       console.log('Magic happens on port ' + port);
    });

module.exports = server;