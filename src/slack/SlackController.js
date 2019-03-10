class SlackController {
  static launch(req, res) {
    const message = {
      title: 'Hello',
      text: 'Welcome to git bot. What\'s you\'re mission today?',
      author_name: 'Njeri Ngigi',
      color: '#3AAF85'
    }
    return res.status(200).json(message);
  }
}

export default SlackController;
