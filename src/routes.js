import slackRouter from './slack/slackInteractions/index';
import githubRouter from './github';
import apiRouter from './api';


const apiPrefix = '/api/v1';

const routes = (app) => {
  app.use(apiPrefix, slackRouter);
  app.use(apiPrefix, githubRouter);
  app.use(apiPrefix, apiRouter);
};

export default routes;
