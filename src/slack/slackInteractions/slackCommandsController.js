import SlackNotifications from '../slackNotifications/slackNotifications';

class SlackCommandsController {
  static launch(req, res) {
    const message = SlackNotifications.launchNotification();
    return res.status(200).json(message);
  }

  static linkToGithub(req, res) {
    const message = SlackNotifications.loginToGithubNotification();
    return res.status(200).json(message);
  }
}

export default SlackCommandsController;
