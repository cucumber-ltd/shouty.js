var assert = require('assert');
var Shouty = require('../../lib/shouty');

// Simple location service just for our tests
var locations = {
  "Bridge House": {latitude: 53.4720597, longitude: -2.2998615},
  "The Quays":    {latitude: 53.4709477, longitude: -2.2938976},
  "Piccadilly":   {latitude: 53.4774029, longitude: -2.2309325}
};

module.exports = function () {
  this.World = function(callback) {
    callback();
    return new Shouty();
  };

  this.Given(/^"([^"]*)" is at "([^"]*)"$/, function (personName, locationName, callback) {
    // Write code here that turns the phrase above into concrete actions
    var geoLocation = locations[locationName];
    this.personIsAtLocation(personName, geoLocation);
    callback.pending();
  });

  this.Given(/^"([^"]*)" is more than (\d+) km away from "([^"]*)"$/, function (arg1, arg2, arg3, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.When(/^"([^"]*)" shouts$/, function (arg1, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Then(/^"([^"]*)" should not hear "([^"]*)"$/, function (arg1, arg2, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });
};
