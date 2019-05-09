import express from 'express';
import ApiController from './apiController';
import Validate from '../middlewares/validators';

const apiRouter = express.Router();

/**
 * params:
 *    - email (required)
 *    - token (github token) (required)
 *    - slack_id (required)
 *    - notification_preference **number**(15, 30, 60) (optional)
 */
apiRouter.post('/user',
  Validate.validateUser(),
  ApiController.registerUser);

export default apiRouter;
