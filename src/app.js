import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import routes from './routes';

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(expressValidator());

routes(app);

app.use('*', (req, res) => res.status(404).json({
  message: 'Resource Not Found.',
}));

export default app;
