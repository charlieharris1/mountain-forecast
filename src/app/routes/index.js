module.exports = function (app) {
  app.route('/')
    .get((req, res) => {
      res.type('text/plain');
      res.status(404);
      res.send('HOME PAGE');
    });
};
