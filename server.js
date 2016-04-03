require('babel-register');

var express = require('express');
var app = express();
var routes = require('./src/app/routes');

app.set('port', process.env.PORT || 3000);

routes(app);

app.listen(app.get('port'));
