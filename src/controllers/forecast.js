import request from 'request-promise';
import config from '../../config/default.json';

const mountainAreaUrl = `http://datapoint.metoffice.gov.uk/public/data/txt/wxfcs/mountainarea/json/capabilities?key=${config.apiKey}`;
const requestOptions = {
  uri: mountainAreaUrl,
  json: true,
};
const transformLocationData = (rawData) => {
  const getAreaAndRiskLevel = (area) => ({ area: area.Area, risk: area.Risk });
  return rawData.MountainForecastList.MountainForecast.map(getAreaAndRiskLevel);
}

export default class Forecast {
  fetchMountainAreas(req, res) {
    request(requestOptions)
      .then((rawAreaData) => transformLocationData(rawAreaData))
      .then((data) => {
        return res.render('Layout');
      })
      .catch((err) => console.error(err));
  }
}
