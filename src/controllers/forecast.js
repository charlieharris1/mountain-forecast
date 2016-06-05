import request from 'request-promise';
import config from '../../config/default.json';

const mountainAreaUrl = `http://datapoint.metoffice.gov.uk/public/data/txt/wxfcs/mountainarea/json/capabilities?key=${config.apiKey}`;
const requestOptions = {
  uri: mountainAreaUrl,
  json: true,
};

const transformLocationData = (rawData) => rawData.MountainForecastList.MountainForecast;

export default class Forecast {
  basicPage(req, res) {
    res.render('Layout');
  }

  fetchMountainAreaData(req, res) {
    request(requestOptions)
      .then((rawLocationData) => transformLocationData(rawLocationData))
      .then((transformedLocations) => res.json(transformedLocations))
      .catch((err) => console.error(err));
  }
}
