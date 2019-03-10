import slackRouter from "./index";

const apiPrefix = '/api/v1';

const routes = (app) => {
  app.use(apiPrefix, slackRouter)
};

export default routes;
