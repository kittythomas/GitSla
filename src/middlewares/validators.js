import { body } from 'express-validator/check';

export default class Validate {
  static validateUser() {
    return [
      body('email', 'Enter a valid email').exists().isEmail(),
      body('token', 'Enter user\'s the GitHub token').exists(),
      body('slack_id', 'Enter user\'s slack ID').exists(),
      body('notification_preference', 'Enter time in minutes: 15, 30 or 60 minutes')
        .optional().isInt().isIn([15, 30, 60]),
    ];
  }
}
