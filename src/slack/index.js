import express from 'express';
import SlackController from './SlackController';

const slackRouter = express.Router();

const slackCommandHandler = [
  SlackController.launch
]

slackRouter.post('/slack/command', ...slackCommandHandler);

export default slackRouter;
