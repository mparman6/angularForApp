var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');



var material = require('./app/models/event')


// var db = require('./config/db');
// mongoose.connect(db.url);

mongoose.connect('mongodb://localhost/eventdb');
var db = mongoose.connection;

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/'));


app.get('/', (req, res) => {
  res.sendFile(process.cwd() + "/public/index.html");
});

// routes

app.get('/events', (req, res) => {
	db.collection('events').find({}).toArray(function(err, results) {
		res.json(results);
	});
});




app.listen(3000, () => {
	console.log('Running app.js on 3000');
});
