import dotenv from 'dotenv';

dotenv.config();

const { env: { PORT, SLACK_SIGNING_SECRET } } = process;

const ENV = Object.freeze({
  PORT,
  SLACK_SIGNING_SECRET,
});

export default ENV;
