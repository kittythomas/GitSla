import { SlackActionsOrFields, slackDivider, SlackSection } from '../slackModels/slackBlocks';
import getUrl from '../../github/githubUrls';

export default class SlackNotifications {
  static allGithubNotifications(notifications) {
    const { data } = notifications;
    const blocks = [];
    if (data.length < 1) {
      blocks.push(new SlackSection(
        'All Clear! You don\'t have any unread notifications \n',
      ));
      return { blocks };
    }
    blocks.push(new SlackSection(`*You have ${data.length} unread notification(s)*`), slackDivider);
    // eslint-disable-next-line array-callback-return
    data.map((notification) => {
      const {
        repository: { name, html_url: htmlUrl }, reason, unread, subject: { title, url },
      } = notification;
      blocks.push(
        SlackNotifications.createFields(name, reason, unread, title, htmlUrl, url),
        slackDivider,
      );
    });
    return { blocks };
  }

  static createFields(Repository, Reason, status, subject, htmlUrl, url) {
    const notificationUrl = getUrl(htmlUrl, url);
    const slackFields = new SlackActionsOrFields('section', 'fields');
    const Status = status ? 'unread' : 'read';
    const fields = {
      Repository, Reason, Status, 'Subject title': subject, 'Link URL': notificationUrl,
    };
    // eslint-disable-next-line array-callback-return
    Object.keys(fields).map((field) => {
      slackFields.addField(`*${field}*`);
      slackFields.addField(fields[field]);
    });
    return slackFields;
  }

  static launchNotification() {
    const slackSection = new SlackSection('*Welcome to git bot. What\'s your mission today?*');
    const slackAction = new SlackActionsOrFields('actions', 'elements');
    slackAction.addAction('Check Unread Notifications', 'unread_notifications', 'primary');
    slackAction.addAction('Random emoji', 'random_emoji', 'primary');
    slackAction.addOptionalProps('unread_notifications');
    return { blocks: [slackSection, slackAction] };
  }
}
