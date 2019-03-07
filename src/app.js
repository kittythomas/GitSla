import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('combined'));

app.use('*', (req, res) => res.status(404).json({
  message: 'Resource Not Found.'
}));

export default app;
