const Forecast = require(`${process.cwd()}/src/app/controllers/forecast.js`);

module.exports = function (app) {
  const forecast = new Forecast();

  app.route('/')
    .get(forecast.fetchMountainAreas);
};
