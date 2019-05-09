import { validationResult } from 'express-validator/check';
import MongoDB from '../database';

export default class ApiController {
  static async registerUser(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    let notificationPreferences = 15;
    const { body: { email, token, slack_id: slackId } } = req;
    if (req.body.notification_preference) {
      notificationPreferences = req.body.notification_preference;
    }
    const data = {
      email, slackId, token, notificationPreferences,
    };

    const mongodb = new MongoDB();
    await mongodb.openConnection(MongoDB.insertOrUpdateOne, 'users', data);

    return res.send({ message: 'User added successfully.' });
  }
}
