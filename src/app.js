import express from 'express';
import morgan from 'morgan';
import routes from './slack/routes';

const app = express();

app.use(morgan('combined'));

routes(app);

app.use('*', (req, res) => res.status(404).json({
  message: 'Resource Not Found.'
}));                        

export default app;
