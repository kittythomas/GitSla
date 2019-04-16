import SlackResponseType from './slackResponseType';

export class SlackMessage {
  constructor(title, text, authorName = null, color = '#3AAF85') {
    this.title = title;
    this.text = text;
    this.author_name = authorName;
    this.color = color;
  }
}


export class SlackAttachment {
  constructor(callbackId, title, text, imageUrl, color) {
    this.callback_id = callbackId;
    this.title = title;
    this.text = text;
    this.image_url = imageUrl;
    this.color = color;
    this.fields = [];
    this.actions = [];
  }

  addFieldsOrActions(type, valuesArray) {
    if (Array.isArray(valuesArray)) this[type].push(...valuesArray);
  }
}

export class SlackAttachmentField {
  constructor(title, value, short = false) {
    this.title = title;
    this.value = value;
    this.short = short;
  }
}

export class SlackInteractiveMessage {
  constructor(text, attachments, channelId, user, asUser = false) {
    this.text = text;
    this.channel = channelId;
    this.user = user;
    this.as_user = asUser;
    this.attachments = attachments;
    this.response_type = SlackResponseType.ephemeral;
  }
}
