import request from 'request-promise';
import config from '../../../config/default.json';

const mountainAreaUrl = `http://datapoint.metoffice.gov.uk/public/data/txt/wxfcs/mountainarea/json/sitelist?key=${config.apiKey}`;
const requestOptions = {
  uri: mountainAreaUrl,
  json: true,
};

export default class Forecast {
  fetchMountainAreas(req, res) {
    request(requestOptions)
      .then((result) => res.json(result))
      .catch((err) => console.error(err));
  }
}
