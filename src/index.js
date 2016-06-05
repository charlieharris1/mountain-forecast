import express from 'express';
import ExpressReactViews from 'express-react-views';
import routes from './routes';

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', ExpressReactViews.createEngine({ beautify: true }));
app.use('/static', express.static('dist'));

routes(app);

app.listen(app.get('port'));
