import express from 'express';
import GithubController from './githubController';

const githubRouter = express.Router();

githubRouter.get('/github/notifications', GithubController.getAllGithubNotifications);

export default githubRouter;
