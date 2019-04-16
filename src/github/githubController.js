import GithubNotifications from './githubNotifications';

export default class GithubController {
  static async getAllGithubNotifications(req, res) {
    const { data } = await GithubNotifications.getAllNotifications();
    res.send(data);
  }
}
