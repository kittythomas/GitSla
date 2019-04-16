import GithubNotifications from '../../github/githubNotifications';
import SlackNotifications from '../slackNotifications/slackNotifications';

class SlackActionsController {
  // eslint-disable-next-line no-unused-vars
  static showUnreadGithubNotifications(payload, res) {}

  // eslint-disable-next-line no-unused-vars
  static async showAllNotifications(payload, respond) {
    const notifications = await GithubNotifications.getAllNotifications();
    const allNotifications = SlackNotifications.allGithubNotifications(notifications);
    respond(allNotifications);
  }
}

export default SlackActionsController;
