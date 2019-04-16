import slackRouter from './slack/slackInteractions/index';
import githubRouter from './github';

const apiPrefix = '/api/v1';

const routes = (app) => {
  app.use(apiPrefix, slackRouter);
  app.use(apiPrefix, githubRouter);
};

export default routes;
