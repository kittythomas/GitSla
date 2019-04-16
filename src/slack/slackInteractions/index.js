import express from 'express';
import SlackCommandsController from './slackCommandsController';
import slackInteractionsRouter from './slackRouter';

const slackRouter = express.Router();
slackRouter.post('/slack/command', SlackCommandsController.launch);
slackRouter.use('/slack/actions', (slackInteractionsRouter.expressMiddleware()));

export default slackRouter;
