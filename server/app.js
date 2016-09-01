var express = require("express");
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Modules
var heroes = require('./routes/heroes');

// Middleware
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());

// Express Routes
app.use('/heroes', heroes);

// Mongoose Connection Handling
var databaseUri = 'mongodb://localhost:27017/Heroes';

mongoose.connect(databaseUri);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ', databaseUri);
});

mongoose.connection.on('error', function (err) {
  console.log('Mongoose failed to connect because error: ', err);
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/views/index.html'));
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
