import axios from 'axios';

export default class GithubNotifications {
  static get githubToken() {
    return process.env.GITHUB_TOKEN;
  }

  // eslint-disable-next-line
  static async getAllNotifications() {
    const { githubToken } = GithubNotifications;
    const response = await axios.get(
      'https://api.github.com/notifications?since=2014-03-12T08:00:00Z',
      { headers: { Authorization: `token ${githubToken}` } },
    // eslint-disable-next-line no-console
    ).catch(error => console.log(error));

    return response;
  }
}
