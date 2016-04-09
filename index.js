import express from 'express';
import routes from './src/app/routes/index.js';
import path from 'path';
import request from 'request-promise';
import config from './config/default.json';
const mountainAreaUrl = `http://datapoint.metoffice.gov.uk/public/data/txt/wxfcs/mountainarea/json/sitelist?key=${config.apiKey}`;

const transformLocationData = (rawData) => rawData.Locations.Location;
const requestOptions = { uri: mountainAreaUrl, json: true };
const app = express();

app.set('port', process.env.PORT || 3000);

app.use('/', express.static(path.join(__dirname, 'src/ui')));

app.get('/api/mountainAreas', (req, res) =>
  request(requestOptions)
    .then((rawLocationData) => transformLocationData(rawLocationData))
    .then((transformedLocations) => res.json(transformedLocations))
    .catch((err) => console.error(err))
);

routes(app);

app.listen(app.get('port'));
