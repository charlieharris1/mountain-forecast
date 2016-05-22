import express from 'express';
import path from 'path';
import request from 'request-promise';
import config from '../config/default.json';
import ExpressReactViews from 'express-react-views';
import routes from './routes';
const mountainAreaUrl = `http://datapoint.metoffice.gov.uk/public/data/txt/wxfcs/mountainarea/json/capabilities?key=${config.apiKey}`;
const requestOptions = {
  uri: mountainAreaUrl,
  json: true,
};
const transformLocationData = (rawData) => rawData.MountainForecastList.MountainForecast;

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', ExpressReactViews.createEngine({ beautify: true }));
app.use('/static', express.static('dist'));

app.get('/api/mountainAreas', (req, res) =>
  request(requestOptions)
    .then((rawLocationData) => transformLocationData(rawLocationData))
    .then((transformedLocations) => res.json(transformedLocations))
    .catch((err) => console.error(err))
);

routes(app);

app.listen(app.get('port'));
