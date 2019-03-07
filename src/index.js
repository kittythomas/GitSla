import dotenv from 'dotenv';
import http from 'http';
import app from './app';

dotenv.config();

const server = http.createServer(app);

const port = process.env.PORT;

server.listen(port, ()=>{
  console.log(`server start at port ${port}`);
});
