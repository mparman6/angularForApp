var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.send('Server is working!');
});

app.listen(PORT, function() {
  console.log('Listening on', PORT)
});


var mongoose = require('mongoose');
// mongoose.connect('mongodb://mattp:password@ds061355.mlab.com:61355/gmtestdb');
mongoose.connect('mongodb://localhost/eventdb');

// schema for database
var Schema = mongoose.Schema;

var EventSchema = mongoose.Schema({
  _id: {
    type: String,
  },
  title: {
    type: String,
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  category: {
    type: String
  },
  date: { //on client side: ensure format is uniform -->  00/00/0000
    type: String
  },
  time: { //on client side: ensure format is uniform
    type: String
  },
  description: {
    type: String
  }
});

var Event = mongoose.model('Event', EventSchema);


// setting up array for bulk insert

var events = [
  
  {
    "title": "Snowboarding at Blue Mountain",
    "state": "PA",
    "category": "Mountain",
    "date": "12/01/2016",
    "time": "3pm",
    "description": "Heading up to the mountin to do some boarding... who wants to join?"
  },

  {
    "title": "Surfing Manasquan Inlet",
    "state": "NJ",
    "category": "Water",
    "date": "04/12/2016",
    "time": "7am",
    "description": "Swell coming! Meeting in the parking lot @ 7am. Be there!"
  },

  {
    "title": "Striper Fishing",
    "state": "NJ",
    "category": "Water",
    "date": "5/14/2016",
    "time": "7pm",
    "description": "Party boat evening trip to slaughter some stripers, 7pm - 2am. Should be awesome"
  },

  {
    "title": "Hiking in the Catskills",
    "state": "NY",
    "category": "Mountain",
    "date": "6/14/2016",
    "time": "2pm",
    "description": "A group of 20-somethings hitting the mountains for a day hike. All welcome. Bring your own food"
  },

  {
    "title": "Camping in the Poconos",
    "state": "PA",
    "category": "Mountain",
    "date": "5/20/2016",
    "time": "5pm",
    "description": "A night of fun in the moutains. Bonfires, smores, & sleeping bags."
  },

  {
    "title": "4x4 Adventure in the Pinelands",
    "state": "NJ",
    "category": "Forest",
    "date": "7/14/2016",
    "time": "12pm",
    "description": "It's a jeep thing, come mudding in South Jersey."
  },

  {
    "title": "Skydiving @ the ranch in upstate NY",
    "state": "NY",
    "category": "Air",
    "date": "6/16/2016",
    "time": "9am",
    "description": "A day of jumping. The more the merrier. But, no noobs, please."
  },

  {
    "title": "Trail Run @ Hartsthrone Park",
    "state": "NJ",
    "category": "Forest",
    "date": "8/01/2016",
    "time": "10am",
    "description": "Hitting the trails for a few hours. Could use a running partner"
  },

  {
    "title": "Open Water Swim",
    "state": "NJ",
    "category": "Water",
    "date": "5/14/2016",
    "time": "7am",
    "description": "A group of us are going on a 2 mile swim, Long Branch to Sea Bright. All welcome. Know your limits."
  },

  {
    "title": "Deer Hunting",
    "state": "PA",
    "category": "Forest",
    "date": "10/12/2016",
    "time": "5am",
    "description": "Looking for a hunting partner. Experienced only, please"
  }

];

//insert all materials data in db

Event.collection.insert(events, insertAll);

function insertAll(err, docs) {
  if (err) {
    console.log(err);
  } else {
    console.log('All events were stored in DB');
  }
}