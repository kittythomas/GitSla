import dotenv from 'dotenv';

dotenv.config();

const {
  env: {
    PORT,
    SLACK_SIGNING_SECRET,
    GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET,
  },
} = process;

const ENV = Object.freeze({
  PORT,
  SLACK_SIGNING_SECRET,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
});

export default ENV;
