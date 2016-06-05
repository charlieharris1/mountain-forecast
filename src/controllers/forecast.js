import request from 'request-promise';
import config from '../../config/default.json';

const mountainAreaUrl = `http://datapoint.metoffice.gov.uk/public/data/txt/wxfcs/mountainarea/json/capabilities?key=${config.apiKey}`;
const requestOptions = {
  uri: mountainAreaUrl,
  json: true,
};

const areaSpecificReqOptions = (uri) => {
  let newUri = uri.replace(/\{format\}/i, 'json');
  newUri = newUri.replace(/\{key\}/i, `${config.apiKey}`);

  return {
    uri: newUri,
    json: true,
  };
}

const transformLocationData = (rawData) => {
  return rawData.MountainForecastList.MountainForecast;
};

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

  areaSpecificData(req, res) {
    request(areaSpecificReqOptions(req.query.uri))
      .then((areaData) => res.json(areaData))
      .catch((err) => console.error(err));
  }
}
