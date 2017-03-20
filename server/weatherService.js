const
  request = require('request-promise');
var google_key = 'AIzaSyDzNvC3fh6Fd54Z5DvdfchmxDe3YfAUBO0';
var weather_key = '91b91eed3abfe96ef00eb50f97eeec7d';

function getGeolocalisation(cityName) {
  return request({
    uri: 'https://maps.googleapis.com/maps/api/geocode/json',
    qs: {
      key: google_key,
      address: cityName
    },
    method: 'GET'
  });
}

function getWeatherForecast(lat, lng) {
  return request({
    uri: 'http://api.openweathermap.org/data/2.5/forecast/daily',
    qs: {
      APPID: weather_key,
      lat: lat,
      lon: lng,
      cnt: 10
    },
    method: 'GET'
  });
}

module.exports =  {
  getGeolocalisation: getGeolocalisation,
  getWeatherForecast: getWeatherForecast
}
