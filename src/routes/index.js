import Forecast from '../controllers/forecast';

export default (app) => {
  const forecast = new Forecast();

  app.route('/')
    .get(forecast.basicPage);

  app.route('/api/mountainAreas')
    .get(forecast.fetchMountainAreaData);
};

