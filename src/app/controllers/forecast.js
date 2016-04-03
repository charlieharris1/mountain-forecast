const request = require('request-promise');
const config = require('../../../config/default.json');
const mountainAreaUrl = `http://datapoint.metoffice.gov.uk/public/data/txt/wxfcs/mountainarea/json/capabilities?key=${config.apiKey}`;
const requestOptions = {
  uri: mountainAreaUrl,
  json: true,
};

module.exports = class Forecast {
  fetchMountainAreas(req, res) {
    request(requestOptions)
      .then((result) => res.json(result))
      .catch((err) => console.error(err));
  }
};
