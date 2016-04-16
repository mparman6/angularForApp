var mongoose = require('mongoose');
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

module.exports = Event;

