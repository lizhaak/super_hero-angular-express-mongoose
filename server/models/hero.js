var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create the Schema
var heroSchema = new Schema({
  alias: {type: String, require: true},
  first_name: {type: String, require: true},
  last_name: {type: String, require: true},
  city: String,
  power_name: String
});

// Create the model
var Hero = mongoose.model('Hero', heroSchema);

// Export model to use in other parts of the app
module.exports = Hero;
