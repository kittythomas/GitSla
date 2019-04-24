import { createMessageAdapter } from '@slack/interactive-messages';
import ENV from '../../config';
import SlackActionsController from './slackActionsController';

const slackInteractionsRouter = createMessageAdapter(ENV.SLACK_SIGNING_SECRET);

slackInteractionsRouter.action({ callback_id: 'unread_notifications' },
  SlackActionsController.showAllNotifications);

slackInteractionsRouter.action({ callback_id: 'connect_github_account' },
  () => {});

export default slackInteractionsRouter;
