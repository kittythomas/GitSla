import http from 'http';
import app from './app';
import ENV from './config';

const server = http.createServer(app);

const port = ENV.PORT;

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started at port ${port}.`);
});
