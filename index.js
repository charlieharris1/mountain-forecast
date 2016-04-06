import express from 'express';
import routes from './src/app/routes/index.js';

const app = express();
const currentDirectory = process.cwd();

app.set('port', process.env.PORT || 3000);

app.use('/controllers', express.static(`${currentDirectory}/src/app/controllers`));

routes(app);

app.listen(app.get('port'));
