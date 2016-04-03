require('babel-register');
var express = require('express');
var app = express();
var routes = require('./src/app/routes/index.js');
var currentDirectory = process.cwd();

app.set('port', process.env.PORT || 3000);

app.use('/controllers', express.static(`${currentDirectory}/src/app/controllers`));

routes(app);

app.listen(app.get('port'));
