var express = require('express');
var router = express.Router();
var google_key = 'AIzaSyDzNvC3fh6Fd54Z5DvdfchmxDe3YfAUBO0';
var weatherService = require('../server/weatherService');
var parser = require('json-parser');

/* GET users listing. */
router.get('/', function(req, res, next) {
  weatherService.getGeolocalisation('grenoble').then(function(result) {
    var obj = parser.parse(result);
    var pos = obj.results[0].geometry.location;
    weatherService.getWeatherForecast(pos.lat, pos.lng).then(function(result) {
      res.send(result);
    });
  });
});

module.exports = router;
